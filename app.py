from flask import Flask, render_template, request, jsonify
from datetime import datetime
import json
import os

app = Flask(__name__)

INQUIRIES_FILE = "customer_inquiries.json"


def save_inquiry(data):
    """පාරිභෝගික පණිවිඩ JSON ගොනුවක ගබඩා කිරීම"""
    records = []
    if os.path.exists(INQUIRIES_FILE):
        with open(INQUIRIES_FILE, "r", encoding="utf-8") as f:
            try:
                records = json.load(f)
            except json.JSONDecodeError:
                records = []

    data["timestamp"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    records.append(data)

    with open(INQUIRIES_FILE, "w", encoding="utf-8") as f:
        json.dump(records, f, ensure_ascii=False, indent=4)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json()
    if not data or not data.get("name") or not data.get("phone"):
        return jsonify({"status": "error", "message": "තොරතුරු සම්පූර්ණ නැත"}), 400

    save_inquiry({
        "name": data.get("name"),
        "phone": data.get("phone"),
        "message": data.get("message", "")
    })
    return jsonify({"status": "success", "message": "පණිවිඩය සාර්ථකව ගබඩා විය!"})


@app.route("/api/inquiries", methods=["GET"])
def view_inquiries():
    """පැමිණ ඇති පාරිභෝගික පණිවිඩ පරීක්ෂා කිරීමට"""
    if not os.path.exists(INQUIRIES_FILE):
        return jsonify([])
    with open(INQUIRIES_FILE, "r", encoding="utf-8") as f:
        return jsonify(json.load(f))


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)