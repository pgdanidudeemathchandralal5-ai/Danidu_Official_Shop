// Danidu Official - සියලුම භාණ්ඩ සහ සේවා දත්ත ගබඩාව
const catalogItems = [
    // භාණ්ඩ - ලිපිද්‍රව්‍ය (Stationery)
    {
        id: 1,
        name: "CR පොත් (CR Books)",
        subtitle: "පිටු 40 / 80 ",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-book",
        desc: "පාසල් සහ කාර්යාල කටයුතු සඳහා උසස් තත්වයේ සාමාන්‍ය සහ තනි රූල් CR පොත්."
    },
    {
        id: 2,
        name: "පෑන් (Red / Blue / Black Pens)",
        subtitle: "රතු, නිල් සහ කළු පෑන්",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-pen",
        desc: "Atlas, Tenny ඇතුළු සියලුම වර්ගයේ නිල්, කළු සහ රතු පෑන් තොග සහ සිල්ලර මිලට."
    },
    {
        id: 3,
        name: "අඩි රූල් (Rulers - 15cm / 30cm)",
        subtitle: "ප්ලාස්ටික් අඩි රූල්",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-ruler",
        desc: "පාසල් සිසුන් සහ කාර්යාල භාවිතය සඳහා අඟල් 6 (15cm) සහ අඟල් 12 (30cm) අඩි රූල්."
    },
    {
        id: 4,
        name: "A4 කොළ (A4 Sheets)",
        subtitle: "80gsm High Quality A4 Papers",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-file-lines",
        desc: "තනි කොළ වශයෙන් ලබා ගත හැක."
    },
    {
        id: 5,
        name: "ලියුම් කවර (Envelopes)",
        subtitle: "6x4 / 9x4",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-envelope",
        desc: "රාජකාරි සහ පෞද්ගලික ලිපි සඳහා දුඹුරු ලියුම් කවර සියලුම ප්‍රමාණවලින්."
    },
    {
        id: 6,
        name: "පැන්සල්, මකන සහ ෆයිල් කවර",
        subtitle: "Pencils, Erasers, Glue & File Covers",
        category: "stationery",
        categoryLabel: "ලිපිද්‍රව්‍ය",
        icon: "fa-folder-open",
        desc: "පැන්සල්, මකන, කටර්, ගම් බෝතල්, සෙලෝටේප් සහ කාඩ්බෝඩ් ෆයිල් කවර."
    },

    // භාණ්ඩ - මොබයිල් උපාංග (Accessories)
    {
        id: 7,
        name: "ෆෝන් බැක් කවර් (Phone Back Covers)",
        subtitle: "Silicone, Armor & Clear Covers",
        category: "accessories",
        categoryLabel: "මොබයිල් උපාංග",
        icon: "fa-mobile-screen",
        desc: "Samsung, Redmi, iPhone, Vivo, Oppo ඇතුළු සියලුම දුරකථන සඳහා නවීන බැක් කවර්."
    },
    {
        id: 8,
        name: "ඉයර්ෆෝන් (Earphones & Handsfree)",
        subtitle: "Wired & Wireless Earbuds",
        category: "accessories",
        categoryLabel: "මොබයිල් උපාංග",
        icon: "fa-headphones",
        desc: "උසස් ශබ්ද තත්වයෙන් යුත් Type-C, 3.5mm Jack ඉයර්ෆෝන් සහ Bluetooth Earbuds."
    },
    {
        id: 9,
        name: "චාජින් කේබල් (Charging Cables)",
        subtitle: "Fast Charging Type-C / Micro / iPhone",
        category: "accessories",
        categoryLabel: "මොබයිල් උපාංග",
        icon: "fa-plug",
        desc: "වේගවත් ආරෝපණය (Fast Charging) සහිත ශක්තිමත් ඩේටා සහ චාජින් කේබල්."
    },
    {
        id: 10,
        name: "Tempered Glass සහ Chargers",
        subtitle: "Screen Protectors & Fast Adapters",
        category: "accessories",
        categoryLabel: "මොබයිල් උපාංග",
        icon: "fa-shield-halved",
        desc: "දුරකථන තිරය ආරක්ෂා කරන Tempered Glass සහ Original Charging Adapters."
    },

    // සේවා (Services)
    {
        id: 11,
        name: "රීලෝඩ් සහ බිල්පත් ගෙවීම්",
        subtitle: "Reloads, Data Packages & Utility Bills",
        category: "services",
        categoryLabel: "සේවාවන්",
        icon: "fa-sim-card",
        desc: "Dialog, Mobitel, Hutch, Airtel රීලෝඩ්, 4G ඩේටා පැකේජ් සහ විදුලි/ජල බිල්පත් ගෙවීම."
    },
    {
        id: 12,
        name: "ලේඛන සේවා (Document Services)",
        subtitle: "Photocopy, Printouts, Typing & CV",
        category: "services",
        categoryLabel: "සේවාවන්",
        icon: "fa-print",
        desc: "සිංහල/ඉංග්‍රීසි ටයිප් කිරීම, ෆොටෝකොපි, කලර් ප්‍රින්ට්, Scan කිරීම සහ CV සැකසීම."
    },
    {
        id: 13,
        name: "TIN Number සහ Online අයදුම්පත්",
        subtitle: "TIN Registration & Aswesuma / Gov Forms",
        category: "services",
        categoryLabel: "සේවාවන්",
        icon: "fa-id-card",
        desc: "දේශීය ආදායම් දෙපාර්තමේන්තුවේ TIN අංකය සාදා දීම සහ රජයේ Online අයදුම්පත් පිරවීම."
    },
    {
        id: 14,
        name: "දුරකථන අගුළු හැරීම (Phone Unlocking)",
        subtitle: "Software Updates, FRP & Pattern Unlock",
        category: "services",
        categoryLabel: "සේවාවන්",
        icon: "fa-unlock-keyhole",
        desc: "අමතක වූ ෆෝන් පාස්වර්ඩ් ඉවත් කිරීම, Software ගැසීම සහ දුරකථන දෝෂ නිරාකරණය."
    },
    {
        id: 15,
        name: "වෙබ් අඩවි සහ ඇප් සකස් කිරීම",
        subtitle: "Web & Android App Development",
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

// භාණ්ඩ හා සේවා පිටුවේ පෙන්වීම
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
        const card = document.createElement("div");
        card.className = "item-card";
        card.innerHTML = `
            <div>
                <span class="item-badge badge-${item.category}">${item.categoryLabel}</span>
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

function removeFromList(id) {
    selectedList = selectedList.filter(i => i.id !== id);
    updateCartUI();
}

function updateCartUI() {
    const totalQty = selectedList.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalQty;

    if (selectedList.length === 0) {
        cartItemsList.innerHTML = `<p class="empty-msg">තවමත් කිසිවක් තෝරාගෙන නොමැත.</p>`;
        return;
    }

    cartItemsList.innerHTML = selectedList.map(item => `
        <div class="cart-item">
            <div>
                <strong>${item.name}</strong>
                <div style="font-size:0.8rem; color:#ffcc00;">ප්‍රමාණය: ${item.qty}</div>
            </div>
            <button class="remove-item" onclick="removeFromList(${item.id})">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `).join("");
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

// WhatsApp Order Send
document.getElementById("sendWhatsappOrder").addEventListener("click", () => {
    if (selectedList.length === 0) {
        alert("කරුණාකර පළමුව භාණ්ඩ හෝ සේවාවන් තෝරාගන්න.");
        return;
    }
    const customerName = document.getElementById("orderCustomerName").value.trim() || "පාරිභෝගිකයෙක්";
    let message = `*Danidu Official - නව ඇණවුමක් / විමසීමක්*\n`;
    message += `නම: ${customerName}\n\n*තෝරාගත් භාණ්ඩ / සේවා:*\n`;
    selectedList.forEach((item, index) => {
        message += `${index + 1}. ${item.name} (x${item.qty})\n`;
    });
    message += `\nකරුණාකර මිල ගණන් සහ ලබා ගත හැකි වේලාව දන්වන්න.`;

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
        // Python Server ක්‍රියාත්මක නොවන අවස්ථාවක WhatsApp වෙත යොමු කිරීම
        const waText = `නම: ${payload.name}\nදුරකථන: ${payload.phone}\nපණිවිඩය: ${payload.message}`;
        window.open(`https://wa.me/94760419130?text=${encodeURIComponent(waText)}`, "_blank");
        statusEl.textContent = "WhatsApp හරහා පණිවිඩය යොමු කරන ලදී.";
    }
});

// ආරම්භයේදී දත්ත පෙන්වීම
renderCatalog();