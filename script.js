// Danidu Official - මිල ගණන් සහිත සියලුම භාණ්ඩ සහ සේවා දත්ත ගබඩාව
const catalogItems = [
    // ================= 1. ලිපිද්‍රව්‍ය (Stationery) =================
    {
        id: 1,
        name: "Sammanee CR පොත් (80 Pages)",
        subtitle: "CR Book - 80 Pages",
        price: 180,
        priceText: "Rs. 180",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-book",
        desc: "පාසල් සහ කාර්යාල කටයුතු සඳහා උසස් තත්වයේ Sammanee CR පොත්."
    },
    {
        id: 2,
        name: "Sammanee අභ්‍යාස පොත් (40 Pages)",
        subtitle: "Exercise Book - 40 Pages",
        price: 60,
        priceText: "Rs. 60",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-book-open",
        desc: "පාසල් සිසුන් සඳහා Sammanee පිටු 40 අභ්‍යාස පොත්."
    },
    {
        id: 3,
        name: "Sammanee NoteBook",
        subtitle: "Pocket & Standard NoteBook",
        price: 40,
        priceText: "Rs. 40",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-note-sticky",
        desc: "කෙටි සටහන් තබා ගැනීම සඳහා පහසු Sammanee NoteBook."
    },
    {
        id: 4,
        name: "Atlas පෑන් (Red / Blue / Black)",
        subtitle: "රතු, නිල් සහ කළු පෑන්",
        price: 25,
        priceText: "Rs. 25",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-pen",
        desc: "සිසුන් සහ කාර්යාල භාවිතය සඳහා නිල්, කළු සහ රතු Atlas පෑන්."
    },
    {
        id: 5,
        name: "A4 කොළ (A4 Sheet)",
        subtitle: "තනි කොළයක මිල (80gsm)",
        price: 5,
        priceText: "Rs. 5",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-file-lines",
        desc: "මුද්‍රණ සහ ලේඛන කටයුතු සඳහා උසස් තත්වයේ A4 කොළ (තනි කොළ වශයෙන් හෝ පැකට් වශයෙන්)."
    },
    {
        id: 6,
        name: "Atlas අඩි රූල් - 30cm",
        subtitle: "Ruler (30 cm / අඟල් 12)",
        price: 80,
        priceText: "Rs. 80",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-ruler",
        desc: "කල්පවතින පැහැදිලි මිනුම් සහිත සෙන්ටිමීටර් 30 Atlas අඩි රූල්."
    },
    {
        id: 7,
        name: "Atlas අඩි රූල් - 15cm",
        subtitle: "Ruler (15 cm / අඟල් 6)",
        price: 40,
        priceText: "Rs. 40",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-ruler-horizontal",
        desc: "පැන්සල් පෙට්ටියට පහසුවෙන් දැමිය හැකි සෙන්ටිමීටර් 15 Atlas අඩි රූල්."
    },
    {
        id: 8,
        name: "ලියුම් කවර 6x4 (Envelopes)",
        subtitle: "6x4 Size Envelopes",
        price: 5,
        priceText: "Rs. 5",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-envelope",
        desc: "සාමාන්‍ය ලිපි හුවමාරු සඳහා 6x4 ප්‍රමාණයේ ලියුම් කවර."
    },
    {
        id: 9,
        name: "ලියුම් කවර 9x4 (Envelopes)",
        subtitle: "9x4 Official Envelopes",
        price: 10,
        priceText: "Rs. 10",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-envelope-open-text",
        desc: "රාජකාරි සහ අයදුම්පත් බහාලීම සඳහා 9x4 ප්‍රමාණයේ ලියුම් කවර."
    },
    {
        id: 10,
        name: "Cardboard File Cover (ෆයිල් කවර)",
        subtitle: "කාඩ්බෝඩ් ෆයිල් කවර",
        price: 20,
        priceText: "Rs. 20",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-folder-open",
        desc: "ලිපිගොනු ආරක්ෂිතව තබා ගැනීම සඳහා ශක්තිමත් කාඩ්බෝඩ් ෆයිල් කවර."
    },
    {
        id: 11,
        name: "මකන (Eraser)",
        subtitle: "Soft White Eraser",
        price: 20,
        priceText: "Rs. 20",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-eraser",
        desc: "පොතට හානි නොවී පැන්සල් ඉරි පිරිසිදුව මකා දමන මකන."
    },
    {
        id: 12,
        name: "Pencil Cutter",
        subtitle: "පැන්සල් කටර්",
        price: 40,
        priceText: "Rs. 40",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-scissors",
        desc: "තියුණු තලයක් සහිත පැන්සල් උල් කරන කටර්."
    },
    {
        id: 13,
        name: "Atlas Small Glue Bottle (ගම් බෝතල්)",
        subtitle: "Liquid Glue Bottle",
        price: 40,
        priceText: "Rs. 40",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-bottle-droplet",
        desc: "කඩදාසි සහ ලියුම් කවර ඇලවීම සඳහා Atlas ගම් බෝතල්."
    },
    {
        id: 14,
        name: "Sellotape (සෙලෝටේප්)",
        subtitle: "Clear Adhesive Tape",
        price: 45,
        priceText: "Rs. 45",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-tape",
        desc: "පාසල් සහ කාර්යාල අවශ්‍යතා සඳහා පැහැදිලි සෙලෝටේප්."
    },
    {
        id: 15,
        name: "Black Electrical Tape",
        subtitle: "කළු ඉලෙක්ට්‍රිකල් ටේප්",
        price: 75,
        priceText: "Rs. 75",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-bolt",
        desc: "විදුලි වයර් ආවරණය කිරීම සඳහා ශක්තිමත් කළු ටේප්."
    },

    // ================= 2. මොබයිල් උපාංග (Accessories) =================
    {
        id: 16,
        name: "Kubala Earphones (Type-C)",
        subtitle: "Type-C Wired Earphones",
        price: 580,
        priceText: "Rs. 580",
        category: "accessories",
        categoryLabel: "මොබයිල් උපාංග",
        icon: "fa-headphones",
        desc: "Type-C පෝට් සහිත නවීන දුරකථන සඳහා පැහැදිලි ශබ්දයක් ඇති Kubala ඉයර්ෆෝන්."
    },
    {
        id: 17,
        name: "L29 Earphones (Micro / 3.5mm)",
        subtitle: "High Bass Wired Handsfree",
        price: 750,
        priceText: "Rs. 750",
        category: "accessories",
        categoryLabel: "මොබයිල් උපාංග",
        icon: "fa-headphones-simple",
        desc: "උසස් Bass ශබ්ද තත්වයක් සහ Mic පහසුකම සහිත L29 ඉයර්ෆෝන්."
    },
    {
        id: 18,
        name: "Modula Fast Charging Cable (Type-C)",
        subtitle: "Fast Data & Charging Cable",
        price: 620,
        priceText: "Rs. 620",
        category: "accessories",
        categoryLabel: "මොබයිල් උපාංග",
        icon: "fa-plug",
        desc: "වේගවත් ආරෝපණය (Fast Charging) සඳහා Modula Type-C කේබල්."
    },
    {
        id: 19,
        name: "Celebrate Charging Cable (Type-C / Lightning)",
        subtitle: "Android & iPhone Fast Cables",
        price: 820,
        priceText: "Rs. 820",
        category: "accessories",
        categoryLabel: "මොබයිල් උපාංග",
        icon: "fa-charging-station",
        desc: "Android (Type-C) සහ iPhone (Lightning) දුරකථන සඳහා Celebrate කේබල්."
    },
    {
        id: 20,
        name: "Mikorean / Celebrate Silicone Cable",
        subtitle: "Type-C & Lightning Heavy Duty",
        price: 850,
        priceText: "Rs. 850",
        category: "accessories",
        categoryLabel: "මොබයිල් උපාංග",
        icon: "fa-cable-car",
        desc: "නොකැඩෙන සිලිකොන් නිමාවෙන් යුත් Mikorean සහ Celebrate Type-C / Lightning කේබල්."
    },
    {
        id: 21,
        name: "3 IN 1 Charging Cable",
        subtitle: "Type-C + Micro + iPhone Lightning",
        price: 1050,
        priceText: "Rs. 1,050",
        category: "accessories",
        categoryLabel: "මොබයිල් උපාංග",
        icon: "fa-plug-circle-bolt",
        desc: "එකම කේබලයකින් ඕනෑම දුරකථන වර්ග 3ක් එකවර චාර්ජ් කළ හැකි 3-in-1 කේබල්."
    },
    {
        id: 22,
        name: "ෆෝන් බැක් කවර් (Phone Back Covers)",
        subtitle: "Silicone, Armor & Clear Covers",
        price: 0,
        priceText: "මිල විමසන්න",
        category: "accessories",
        categoryLabel: "මොබයිල් උපාංග",
        icon: "fa-mobile-screen",
        desc: "Samsung, Redmi, iPhone, Vivo, Oppo ඇතුළු සියලුම දුරකථන සඳහා නවීන බැක් කවර්."
    },

    // ================= 3. ඩිජිටල් සහ තාක්ෂණික සේවා (Services) =================
    {
        id: 23,
        name: "TIN Number ලියාපදිංචිය",
        subtitle: "IRD Online TIN Registration",
        price: 300,
        priceText: "Rs. 300",
        category: "services",
        categoryLabel: "සේවාවන්",
        icon: "fa-id-card",
        desc: "දේශීය ආදායම් දෙපාර්තමේන්තුවේ නිල වෙබ් අඩවිය හරහා TIN අංකය ඉක්මනින් සාදා දීම."
    },
    {
        id: 24,
        name: "රීලෝඩ්, ඩේටා පැකේජ් සහ බිල්පත් ගෙවීම්",
        subtitle: "Dialog, Mobitel, Hutch, Airtel & Bills",
        price: 0,
        priceText: "Rs. 20 සිට",
        category: "services",
        categoryLabel: "සේවාවන්",
        icon: "fa-sim-card",
        desc: "ඕනෑම ජාලයකට රීලෝඩ්, 4G ඩේටා පැකේජ් සහ විදුලි/ජල බිල්පත් ගෙවීමේ පහසුකම්."
    },
    {
        id: 25,
        name: "ලේඛන සේවා (Photocopy / Print / Typing)",
        subtitle: "Sinhala & English Typing, CV & Scan",
        price: 0,
        priceText: "සේවාව අනුව",
        category: "services",
        categoryLabel: "සේවාවන්",
        icon: "fa-print",
        desc: "ෆොටෝකොපි, කලර්/කළු-සුදු ප්‍රින්ට්, ටයිප් සෙටින්, CV සැකසීම සහ අස්වැසුම අභියාචනා."
    },
    {
        id: 26,
        name: "දුරකථන අගුළු හැරීම (Phone Unlocking)",
        subtitle: "Password / FRP Unlock & Software",
        price: 0,
        priceText: "මිල විමසන්න",
        category: "services",
        categoryLabel: "සේවාවන්",
        icon: "fa-unlock-keyhole",
        desc: "අමතක වූ ෆෝන් පාස්වර්ඩ් ඉවත් කිරීම, Software ගැසීම සහ දුරකථන දෝෂ නිරාකරණය."
    },
    {
        id: 27,
        name: "වෙබ් අඩවි සහ ඇප් සකස් කිරීම",
        subtitle: "Web & Android App Development",
        price: 0,
        priceText: "මිල විමසන්න",
        category: "services",
        categoryLabel: "සේවාවන්",
        icon: "fa-laptop-code",
        desc: "ව්‍යාපාර සහ ආයතන සඳහා නවීන වෙබ් අඩවි, Android Apps, Logo සහ Banner නිර්මාණය."
    }
];

let selectedList = [];
let currentCategory = "all";

const itemsGrid = document.getElementById("itemsGrid");
const searchInput = document.getElementById("searchInput");
const filterTabs = document.getElementById("filterTabs");
const cartCount = document.getElementById("cartCount");
const cartModal = document.getElementById("cartModal");
const cartItemsList = document.getElementById("cartItemsList");

// භාණ්ඩ හා සේවා මිල ගණන් සමඟ පිටුවේ පෙන්වීම
function renderCatalog() {
    const query = searchInput.value.toLowerCase().trim();
    itemsGrid.innerHTML = "";

    const filtered = catalogItems.filter(item => {
        const matchesCat = currentCategory === "all" || item.category === currentCategory;
        const matchesSearch =
            item.name.toLowerCase().includes(query) ||
            item.subtitle.toLowerCase().includes(query) ||
            item.desc.toLowerCase().includes(query);
        return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
        itemsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#cbd5e1;">ඔබ සෙවූ නමින් කිසිවක් හමු නොවීය.</p>`;
        return;
    }

    filtered.forEach(item => {
        const isFixedPrice = item.price > 0;
        const card = document.createElement("div");
        card.className = "item-card";
        card.innerHTML = `
            <div>
                <div class="card-top-row">
                    <span class="item-badge badge-${item.category}">${item.categoryLabel}</span>
                    <span class="price-tag ${isFixedPrice ? '' : 'inquiry-tag'}">${item.priceText}</span>
                </div>
                <div class="item-icon"><i class="fa-solid ${item.icon}"></i></div>
                <h3>${item.name}</h3>
                <div class="item-subtitle">${item.subtitle}</div>
                <p class="item-desc">${item.desc}</p>
            </div>
            <button class="add-btn" onclick="addToList(${item.id})">
                <i class="fa-solid fa-plus"></i> ලැයිස්තුවට එක් කරන්න
            </button>
        `;
        itemsGrid.appendChild(card);
    });
}

// ලැයිස්තුවට එක් කිරීම
function addToList(id) {
    const item = catalogItems.find(i => i.id === id);
    if (!item) return;

    const existing = selectedList.find(i => i.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        selectedList.push({ ...item, qty: 1 });
    }
    updateCartUI();
}

// ප්‍රමාණය (+ / -) වෙනස් කිරීම
function changeQty(id, delta) {
    const item = selectedList.find(i => i.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        removeFromList(id);
    } else {
        updateCartUI();
    }
}

function removeFromList(id) {
    selectedList = selectedList.filter(i => i.id !== id);
    updateCartUI();
}

// තෝරාගත් ලැයිස්තුව සහ මුළු මුදල යාවත්කාලීන කිරීම
function updateCartUI() {
    const totalQty = selectedList.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalQty;

    if (selectedList.length === 0) {
        cartItemsList.innerHTML = `<p class="empty-msg">තවමත් කිසිවක් තෝරාගෙන නොමැත.</p>`;
        return;
    }

    let totalAmount = 0;
    let hasInquiryItems = false;

    const itemsHTML = selectedList.map(item => {
        if (item.price > 0) {
            totalAmount += item.price * item.qty;
        } else {
            hasInquiryItems = true;
        }

        const linePrice = item.price > 0
            ? `Rs. ${(item.price * item.qty).toLocaleString()}`
            : item.priceText;

        return `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong>
                    <div style="font-size:0.82rem; color:#00b4d8;">ඒකක මිල: ${item.priceText} | එකතුව: <span style="color:#ffcc00; font-weight:700;">${linePrice}</span></div>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                        <span style="font-weight:700;">${item.qty}</span>
                        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromList(${item.id})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
    }).join("");

    const totalBoxHTML = `
        <div class="cart-total-box">
            <div class="cart-total-row">
                <span>ඇස්තමේන්තුගත මුළු මුදල:</span>
                <span>Rs. ${totalAmount.toLocaleString()}</span>
            </div>
            ${hasInquiryItems ? `<div class="cart-total-note">* මිල විමසිය යුතු සේවාවන්හි ගාස්තු මෙම එකතුවට ඇතුළත් නොවේ.</div>` : ""}
        </div>
    `;

    cartItemsList.innerHTML = itemsHTML + totalBoxHTML;
}

// Category Tabs Click
filterTabs.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-btn")) {
        document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
        currentCategory = e.target.dataset.category;
        renderCatalog();
    }
});

// Live Search
searchInput.addEventListener("input", renderCatalog);

// Modal Controls
document.getElementById("openCartBtn").addEventListener("click", () => cartModal.classList.add("open"));
document.getElementById("closeCartBtn").addEventListener("click", () => cartModal.classList.remove("open"));
document.getElementById("clearCartBtn").addEventListener("click", () => {
    selectedList = [];
    updateCartUI();
});

// WhatsApp Order Send (මිල ගණන් සහ මුළු මුදල සමඟ)
document.getElementById("sendWhatsappOrder").addEventListener("click", () => {
    if (selectedList.length === 0) {
        alert("කරුණාකර පළමුව භාණ්ඩ හෝ සේවාවන් තෝරාගන්න.");
        return;
    }
    const customerName = document.getElementById("orderCustomerName").value.trim() || "පාරිභෝගිකයෙක්";
    let message = `*Danidu Official - නව ඇණවුමක් / විමසීමක්*\n`;
    message += `නම: ${customerName}\n\n*තෝරාගත් භාණ්ඩ / සේවා:*\n`;

    let totalAmount = 0;
    selectedList.forEach((item, index) => {
        const subTotal = item.price > 0 ? `Rs. ${(item.price * item.qty).toLocaleString()}` : item.priceText;
        if (item.price > 0) totalAmount += item.price * item.qty;
        message += `${index + 1}. ${item.name} (x${item.qty}) - ${subTotal}\n`;
    });

    if (totalAmount > 0) {
        message += `\n*ඇස්තමේන්තුගත මුළු මුදල: Rs. ${totalAmount.toLocaleString()}*\n`;
    }
    message += `කරුණාකර ඇණවුම තහවුරු කරන්න.`;

    const whatsappUrl = `https://wa.me/94760419130?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
});

// Python Flask Backend Contact Form Submission
document.getElementById("quickContactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const statusEl = document.getElementById("formStatus");
    const payload = {
        name: document.getElementById("custName").value,
        phone: document.getElementById("custPhone").value,
        message: document.getElementById("custMsg").value
    };

    try {
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        if (res.ok) {
            statusEl.textContent = "ඔබේ පණිවිඩය සාර්ථකව යොමු විය! අපි ඉක්මනින් අමතන්නෙමු.";
            e.target.reset();
        } else {
            throw new Error("Server offline");
        }
    } catch {
        const waText = `නම: ${payload.name}\nදුරකථන: ${payload.phone}\nපණිවිඩය: ${payload.message}`;
        window.open(`https://wa.me/94760419130?text=${encodeURIComponent(waText)}`, "_blank");
        statusEl.textContent = "WhatsApp හරහා පණිවිඩය යොමු කරන ලදී.";
    }
});

// ආරම්භයේදී දත්ත පෙන්වීම
renderCatalog();
