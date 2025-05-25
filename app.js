// Villa POS System

// Define language translations
const translations = {
    en: {
        selectVilla: "Select Villa",
        newOrder: "New Order",
        drinks: "Drinks",
        services: "Services",
        gifts: "Gifts",
        custom: "Custom",
        searchItems: "Search items...",
        customItems: "Custom Items",
        itemName: "Item name",
        itemPrice: "Price in EUR",
        addItem: "Add Item",
        markAsGift: "Mark as gift",
        giftItems: "Gift Items",
        giftInfo: "Items added here will be marked as gifts and won't be charged",
        discounts: "Discounts",
        discountPercent: "%",
        discountAmount: "EUR",
        applyPercentDiscount: "Apply %",
        applyAmountDiscount: "Apply €",
        removeDiscount: "Remove Discount",
        totalItems: "Total Items",
        totalAmount: "Total Amount",
        giftValue: "Gift Value",
        discount: "Discount",
        discountValue: "Discount Value",
        finalTotal: "Final Total",
        proceedToPayment: "Proceed to Payment",
        clearOrder: "Clear Order",
        paymentMethod: "Payment Method",
        cash: "Cash",
        cashDescription: "Pay with cash",
        card: "Card",
        cardDescription: "Pay with credit/debit card",
        unpaid: "Unpaid",
        unpaidDescription: "Mark as unpaid (pay later)",
        completeOrder: "Complete Order",
        cancel: "Cancel",
        orderCompleted: "Order Completed",
        receipt: "RECEIPT",
        paidItems: "Paid Items",
        total: "Total",
        shareReceipt: "Share Receipt",
        saveAsPDF: "Save as PDF",
        newOrder: "New Order",
        orderHistory: "Order History",
        noOrders: "No orders yet",
        clearHistory: "Clear History",
        backToMain: "Back to Main",
        processing: "Processing...",
        beerKeg30: "Beer Keg 30L",
        beerKeg50: "Beer Keg 50L",
        freeItem: "Free",
        giftBeer: "Beer (Gift)",
        giftProsecco: "Prosecco (Gift)",
        giftCocktail: "Cocktail (Gift)",
        pleaseAddItems: "Please add items to your order",
        selectPaymentMethod: "Please select a payment method",
        receiptSaved: "Receipt saved as PDF",
        receiptShared: "Receipt shared successfully",
        errorSharing: "Error sharing receipt",
        sharingNotSupported: "Sharing not supported on this device",
        enterValidAmount: "Please enter a valid amount",
        enterItemNamePrice: "Please enter item name and price",
        discountApplied: "Discount applied",
        discountRemoved: "Discount removed",
        edit: "Edit",
        undo: "Undo"
    },
    cs: {
        selectVilla: "Vyberte vilu",
        newOrder: "Nová objednávka",
        drinks: "Nápoje",
        services: "Služby",
        gifts: "Dárky",
        custom: "Vlastní",
        searchItems: "Hledat položky...",
        customItems: "Vlastní položky",
        itemName: "Název položky",
        itemPrice: "Cena v EUR",
        addItem: "Přidat položku",
        markAsGift: "Označit jako dárek",
        giftItems: "Dárkové položky",
        giftInfo: "Položky přidané zde budou označeny jako dárky a nebudou účtovány",
        discounts: "Slevy",
        discountPercent: "%",
        discountAmount: "EUR",
        applyPercentDiscount: "Použít %",
        applyAmountDiscount: "Použít €",
        removeDiscount: "Odstranit slevu",
        totalItems: "Počet položek",
        totalAmount: "Celková částka",
        giftValue: "Hodnota dárků",
        discount: "Sleva",
        discountValue: "Hodnota slevy",
        finalTotal: "Konečná cena",
        proceedToPayment: "Pokračovat k platbě",
        clearOrder: "Vymazat objednávku",
        paymentMethod: "Způsob platby",
        cash: "Hotovost",
        cashDescription: "Platba v hotovosti",
        card: "Karta",
        cardDescription: "Platba kartou",
        unpaid: "Nezaplaceno",
        unpaidDescription: "Označit jako nezaplacené (platba později)",
        completeOrder: "Dokončit objednávku",
        cancel: "Zrušit",
        orderCompleted: "Objednávka dokončena",
        receipt: "ÚČTENKA",
        paidItems: "Placené položky",
        total: "Celkem",
        shareReceipt: "Sdílet účtenku",
        saveAsPDF: "Uložit jako PDF",
        newOrder: "Nová objednávka",
        orderHistory: "Historie objednávek",
        noOrders: "Zatím žádné objednávky",
        clearHistory: "Vymazat historii",
        backToMain: "Zpět na hlavní stránku",
        processing: "Zpracování...",
        beerKeg30: "Sud piva 30L",
        beerKeg50: "Sud piva 50L",
        freeItem: "Zdarma",
        giftBeer: "Pivo (Dárek)",
        giftProsecco: "Prosecco (Dárek)",
        giftCocktail: "Koktejl (Dárek)",
        pleaseAddItems: "Přidejte položky do objednávky",
        selectPaymentMethod: "Vyberte způsob platby",
        receiptSaved: "Účtenka uložena jako PDF",
        receiptShared: "Účtenka úspěšně sdílena",
        errorSharing: "Chyba při sdílení účtenky",
        sharingNotSupported: "Sdílení není na tomto zařízení podporováno",
        enterValidAmount: "Zadejte platnou částku",
        enterItemNamePrice: "Zadejte název a cenu položky",
        discountApplied: "Sleva aplikována",
        discountRemoved: "Sleva odstraněna",
        edit: "Upravit",
        undo: "Zpět"
    }
};

// Define the items data
const itemsData = {
    "jagermeister": { name: "Jägermeister shot", priceCZK: 59, priceEUR: 2.40, category: "drinks" },
    "soda": { name: "Coca-Cola, Sprite, Fanta", priceCZK: 32, priceEUR: 1.3, category: "drinks" },
    "vitamin-water": { name: "Vitamin Water", priceCZK: 35, priceEUR: 1.4, category: "drinks" },
    "redbull": { name: "Red Bull", priceCZK: 60, priceEUR: 2.4, category: "drinks" },
    "jack-cola": { name: "Jack & Cola", priceCZK: 125, priceEUR: 5, category: "drinks" },
    "gin-tonic": { name: "Gin & Tonic", priceCZK: 75, priceEUR: 3, category: "drinks" },
    "moscow-mule": { name: "Moscow Mule", priceCZK: 100, priceEUR: 4, category: "drinks" },
    "mojito": { name: "Mojito", priceCZK: 100, priceEUR: 4, category: "drinks" },
    "pina-colada": { name: "Piña Colada", priceCZK: 100, priceEUR: 4, category: "drinks" },
    "beer": { name: "Beer", priceCZK: 60, priceEUR: 2.4, category: "drinks" },
    "prosecco": { name: "Prosecco", priceCZK: 475, priceEUR: 19, category: "drinks" },
    "grill-gas": { name: "Gas for grill", priceCZK: 500, priceEUR: 20, category: "services" },
    "fire-table-gas": { name: "Gas for fire table", priceCZK: 300, priceEUR: 12, category: "services" },
    "city-tax": { name: "City Tax", priceCZK: 50, priceEUR: 2, category: "services", isPerPersonDay: true },
    "wellness-fee": { name: "Wellness fee", priceCZK: 0, priceEUR: 0, category: "services", isCustom: true },
    "beer-keg-30": { name: "Beer Keg 30L", priceCZK: 3000, priceEUR: 120, category: "drinks" },
    "beer-keg-50": { name: "Beer Keg 50L", priceCZK: 4375, priceEUR: 175, category: "drinks" },
    "gift-beer": { name: "Beer (Gift)", priceCZK: 60, priceEUR: 2.4, category: "gifts", isGift: true },
    "gift-prosecco": { name: "Prosecco (Gift)", priceCZK: 475, priceEUR: 19, category: "gifts", isGift: true },
    "gift-cocktail": { name: "Cocktail (Gift)", priceCZK: 100, priceEUR: 4, category: "gifts", isGift: true }
};

// App state
let currentVilla = "";
let currentOrder = {};
let currentPayment = "";
let orderHistory = [];
let currentLanguage = "en";
let currentDiscount = { type: null, value: 0, amountEUR: 0 };
let lastActions = []; // Store last 5 actions for undo/edit

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
    loadOrderHistory();
    setupEventListeners();
    setupSearch();
    setupLanguage();
    setupSwipeNavigation();
    setupUndoBar();
});

// Set up language switcher
function setupLanguage() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            switchLanguage(btn.dataset.lang);
        });
    });
    updateLanguageText();
}

// Switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    updateLanguageText();
}

// Update UI text based on selected language
function updateLanguageText() {
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[currentLanguage][key]) el.textContent = translations[currentLanguage][key];
    });
    document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
        const key = el.getAttribute('data-lang-placeholder');
        if (translations[currentLanguage][key]) el.placeholder = translations[currentLanguage][key];
    });
    updateItemNames();
}

// Update item names based on language
function updateItemNames() {
    const beerKeg30 = document.querySelector('.item-row[data-item="beer-keg-30"] .item-name');
    if (beerKeg30) beerKeg30.textContent = translations[currentLanguage].beerKeg30;
    const beerKeg50 = document.querySelector('.item-row[data-item="beer-keg-50"] .item-name');
    if (beerKeg50) beerKeg50.textContent = translations[currentLanguage].beerKeg50;
    const giftBeer = document.querySelector('.item-row[data-item="gift-beer"] .item-name');
    if (giftBeer) giftBeer.textContent = translations[currentLanguage].giftBeer;
    const giftProsecco = document.querySelector('.item-row[data-item="gift-prosecco"] .item-name');
    if (giftProsecco) giftProsecco.textContent = translations[currentLanguage].giftProsecco;
    const giftCocktail = document.querySelector('.item-row[data-item="gift-cocktail"] .item-name');
    if (giftCocktail) giftCocktail.textContent = translations[currentLanguage].giftCocktail;
}

// Set up event listeners
function setupEventListeners() {
    document.querySelectorAll('.villa-card').forEach(card => {
        card.addEventListener('click', () => {
            currentVilla = card.dataset.villa;
            showScreen('orderScreen');
            initializeOrder();
        });
    });

    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const category = tab.dataset.category;
            document.querySelectorAll('.category-content').forEach(content => content.style.display = 'none');
            document.getElementById(`${category}Category`).style.display = 'block';
        });
    });

    document.querySelectorAll('.qty-input').forEach(input => {
        input.addEventListener('change', () => {
            const itemRow = input.closest('.item-row');
            const itemId = itemRow.dataset.item;
            const newQty = parseInt(input.value) || 0;
            const currentQty = currentOrder[itemId] ? currentOrder[itemId].qty : 0;
            handleQuantityChange(itemId, newQty, currentQty);
            updateOrderSummary();
        });
    });

    document.querySelectorAll('.increase-qty').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemRow = e.target.closest('.item-row');
            const itemId = itemRow.dataset.item;
            const qtyInput = itemRow.querySelector('.qty-input');
            let qty = parseInt(qtyInput.value) || 0;
            handleQuantityIncrease(itemId, qtyInput);
            qtyInput.value = qty + 1;
            updateOrderSummary();
        });
    });

    document.querySelectorAll('.decrease-qty').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemRow = e.target.closest('.item-row');
            const itemId = itemRow.dataset.item;
            const qtyInput = itemRow.querySelector('.qty-input');
            let qty = parseInt(qtyInput.value) || 0;
            if (qty > 0) {
                removeItem(itemId, 1);
                qtyInput.value = qty - 1;
                updateOrderSummary();
            }
        });
    });

    document.getElementById('cityTaxPeople').addEventListener('change', updateCityTax);
    document.getElementById('cityTaxDays').addEventListener('change', updateCityTax);
    document.getElementById('wellnessFeeAmount').addEventListener('change', updateWellnessFee);
    document.getElementById('addCustomItem').addEventListener('click', addCustomItem);
    document.querySelectorAll('.wellness-quick-amount').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const amount = e.target.dataset.amount;
            handleWellnessQuickAmount(amount);
        });
    });

    document.getElementById('applyPercentDiscount').addEventListener('click', () => {
        const percent = parseFloat(document.getElementById('discountPercent').value);
        if (!percent || percent <= 0 || percent > 100) {
            showNotification(translations[currentLanguage].enterValidAmount);
            return;
        }
        applyDiscount('percent', percent);
    });

    document.getElementById('applyAmountDiscount').addEventListener('click', () => {
        const amount = parseFloat(document.getElementById('discountAmount').value);
        if (!amount || amount <= 0) {
            showNotification(translations[currentLanguage].enterValidAmount);
            return;
        }
        applyDiscount('amount', amount);
    });

    document.getElementById('removeDiscount').addEventListener('click', removeDiscount);
    document.getElementById('backToVilla').addEventListener('click', () => showScreen('villaScreen'));
    document.getElementById('proceedToPayment').addEventListener('click', proceedToPayment);
    document.getElementById('clearOrder').addEventListener('click', clearOrder);
    document.getElementById('backToOrder').addEventListener('click', () => showScreen('orderScreen'));
    document.getElementById('cancelPayment').addEventListener('click', () => showScreen('orderScreen'));
    document.querySelectorAll('.payment-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
            currentPayment = option.dataset.payment;
        });
    });
    document.getElementById('completeOrder').addEventListener('click', completeOrder);
    document.getElementById('shareReceipt').addEventListener('click', shareReceipt);
    document.getElementById('saveReceipt').addEventListener('click', saveReceiptAsPDF);
    document.getElementById('newOrder').addEventListener('click', () => showScreen('villaScreen'));
    document.getElementById('homeButton').addEventListener('click', () => showScreen('villaScreen'));
    document.getElementById('backToMain').addEventListener('click', () => showScreen('villaScreen'));
    document.getElementById('backToMainFromHistory').addEventListener('click', () => showScreen('villaScreen'));
    document.getElementById('undoAction').addEventListener('click', undoLastAction);
    document.getElementById('editAction').addEventListener('click', editLastAction);
}

// Set up search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchItems');
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        document.querySelectorAll('.item-row').forEach(row => {
            const itemName = row.querySelector('.item-name').textContent.toLowerCase();
            row.style.display = itemName.includes(searchTerm) || searchTerm === '' ? 'flex' : 'none';
        });
    });
}

// Set up swipe navigation
function setupSwipeNavigation() {
    let touchstartX = 0;
    let touchendX = 0;
    document.body.addEventListener('touchstart', e => touchstartX = e.changedTouches[0].screenX);
    document.body.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        if (touchendX - touchstartX > 50) showScreen('villaScreen');
    });
}

// Set up undo bar
function setupUndoBar() {
    const undoBar = document.getElementById('undoBar');
    undoBar.addEventListener('click', (e) => e.stopPropagation());
}

// Initialize a new order
function initializeOrder() {
    currentOrder = {};
    currentDiscount = { type: null, value: 0, amountEUR: 0 };
    updateOrderSummary();
    document.querySelectorAll('.qty-input').forEach(input => input.value = "0");
    removeDiscount();
}

// Handle quantity changes
function handleQuantityChange(itemId, newQty, currentQty) {
    if (newQty > currentQty) {
        if (itemId === 'city-tax') {
            const people = parseInt(document.getElementById('cityTaxPeople').value) || 1;
            const days = parseInt(document.getElementById('cityTaxDays').value) || 1;
            addItem(itemId, newQty - currentQty, people, days);
        } else if (itemId === 'wellness-fee') {
            const amount = parseFloat(document.getElementById('wellnessFeeAmount').value) || 0;
            const note = document.getElementById('wellnessFeeNote').value || '';
            if (amount > 0) addCustomItem(itemId, newQty - currentQty, amount, note);
            else {
                showNotification(translations[currentLanguage].enterValidAmount);
                input.value = currentQty;
                return;
            }
        } else if (itemId.startsWith('gift-')) addGiftItem(itemId, newQty - currentQty);
        else addItem(itemId, newQty - currentQty);
    } else if (newQty < currentQty) removeItem(itemId, currentQty - newQty);
}

// Handle quantity increase
function handleQuantityIncrease(itemId, qtyInput) {
    if (itemId === 'city-tax') {
        const people = parseInt(document.getElementById('cityTaxPeople').value) || 1;
        const days = parseInt(document.getElementById('cityTaxDays').value) || 1;
        addItem(itemId, 1, people, days);
    } else if (itemId === 'wellness-fee') {
        const amount = parseFloat(document.getElementById('wellnessFeeAmount').value) || 0;
        const note = document.getElementById('wellnessFeeNote').value || '';
        if (amount > 0) addCustomItem(itemId, 1, amount, note);
        else showNotification(translations[currentLanguage].enterValidAmount);
    } else if (itemId.startsWith('gift-')) addGiftItem(itemId, 1);
    else addItem(itemId, 1);
}

// Add a regular item
function addItem(itemId, quantity = 1, people = 1, days = 1) {
    const item = itemsData[itemId];
    if (!currentOrder[itemId]) currentOrder[itemId] = {
        name: item.name, priceEUR: item.priceEUR, priceCZK: item.priceCZK, qty: 0, totalEUR: 0, totalCZK: 0, isGift: false
    };
    currentOrder[itemId].qty += quantity;
    if (item.isPerPersonDay) {
        currentOrder[itemId].people = people;
        currentOrder[itemId].days = days;
        currentOrder[itemId].totalEUR = item.priceEUR * people * days;
        currentOrder[itemId].totalCZK = item.priceCZK * people * days;
    } else {
        currentOrder[itemId].totalEUR = item.priceEUR * currentOrder[itemId].qty;
        currentOrder[itemId].totalCZK = item.priceCZK * currentOrder[itemId].qty;
    }
    recordAction({ type: 'add', itemId, quantity });
}

// Add a gift item
function addGiftItem(itemId, quantity = 1) {
    const item = itemsData[itemId];
    if (!currentOrder[itemId]) currentOrder[itemId] = {
        name: item.name, priceEUR: item.priceEUR, priceCZK: item.priceCZK, qty: 0, totalEUR: 0, totalCZK: 0, isGift: true
    };
    currentOrder[itemId].qty += quantity;
    currentOrder[itemId].totalEUR = item.priceEUR * currentOrder[itemId].qty;
    currentOrder[itemId].totalCZK = item.priceCZK * currentOrder[itemId].qty;
    recordAction({ type: 'add', itemId, quantity });
}

// Add a custom regular item
function addCustomRegularItem(itemId, name, priceEUR, quantity = 1) {
    if (!currentOrder[itemId]) currentOrder[itemId] = {
        name, priceEUR, priceCZK: priceEUR * 25, qty: 0, totalEUR: 0, totalCZK: 0, isGift: false, isCustom: true
    };
    currentOrder[itemId].qty += quantity;
    currentOrder[itemId].totalEUR = priceEUR * currentOrder[itemId].qty;
    currentOrder[itemId].totalCZK = (priceEUR * 25) * currentOrder[itemId].qty;
    recordAction({ type: 'add', itemId, quantity });
}

// Add a custom gift item
function addCustomGiftItem(itemId, name, priceEUR, quantity = 1) {
    if (!currentOrder[itemId]) currentOrder[itemId] = {
        name, priceEUR, priceCZK: priceEUR * 25, qty: 0, totalEUR: 0, totalCZK: 0, isGift: true, isCustom: true
    };
    currentOrder[itemId].qty += quantity;
    currentOrder[itemId].totalEUR = priceEUR * currentOrder[itemId].qty;
    currentOrder[itemId].totalCZK = (priceEUR * 25) * currentOrder[itemId].qty;
    recordAction({ type: 'add', itemId, quantity });
}

// Add a custom item (like wellness fee)
function addCustomItem(itemId, quantity = 1, amount = 0, note = '') {
    const item = itemsData[itemId];
    if (!currentOrder[itemId]) currentOrder[itemId] = {
        name: item.name, customAmount: amount, note, qty: 0, totalEUR: 0, totalCZK: 0, isGift: false
    };
    currentOrder[itemId].qty += quantity;
    currentOrder[itemId].totalEUR = amount;
    currentOrder[itemId].totalCZK = amount * 25;
    recordAction({ type: 'add', itemId, quantity, amount, note });
}

// Remove an item
function removeItem(itemId, quantity = 1) {
    if (currentOrder[itemId]) {
        currentOrder[itemId].qty -= quantity;
        if (currentOrder[itemId].qty <= 0) delete currentOrder[itemId];
        else if (itemsData[itemId] && itemsData[itemId].isPerPersonDay) {
            const people = currentOrder[itemId].people;
            const days = currentOrder[itemId].days;
            currentOrder[itemId].totalEUR = currentOrder[itemId].priceEUR * people * days;
            currentOrder[itemId].totalCZK = currentOrder[itemId].priceCZK * people * days;
        } else if (itemsData[itemId] && itemsData[itemId].isCustom) {
            const amount = currentOrder[itemId].customAmount;
            currentOrder[itemId].totalEUR = amount;
            currentOrder[itemId].totalCZK = amount * 25;
        } else {
            currentOrder[itemId].totalEUR = currentOrder[itemId].priceEUR * currentOrder[itemId].qty;
            currentOrder[itemId].totalCZK = currentOrder[itemId].priceCZK * currentOrder[itemId].qty;
        }
        recordAction({ type: 'remove', itemId, quantity });
    }
}

// Apply discount
function applyDiscount(type, value) {
    currentDiscount.type = type;
    currentDiscount.value = value;
    const subtotal = getTotalAmount(false);
    if (type === 'percent') currentDiscount.amountEUR = (subtotal * value / 100);
    else currentDiscount.amountEUR = value;
    updateOrderSummary();
    showNotification(translations[currentLanguage].discountApplied);
    recordAction({ type: 'discount', discount: { type, value } });
}

// Remove discount
function removeDiscount() {
    currentDiscount = { type: null, value: 0, amountEUR: 0 };
    updateOrderSummary();
    document.querySelector('.discount-summary').style.display = 'none';
    document.querySelector('.final-total').style.display = 'none';
    showNotification(translations[currentLanguage].discountRemoved);
    recordAction({ type: 'removeDiscount' });
}

// Update order summary
function updateOrderSummary() {
    const totalItems = getTotalItems();
    const totalGiftItems = getTotalGiftItems();
    const totalAmount = getTotalAmount(false);
    const totalGiftAmount = getTotalGiftAmount();
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2) + ' EUR';
    document.getElementById('totalGiftItems').textContent = totalGiftItems;
    document.getElementById('totalGiftAmount').textContent = totalGiftAmount.toFixed(2) + ' EUR';
    if (currentDiscount.type) {
        document.querySelector('.discount-summary').style.display = 'flex';
        document.querySelector('.final-total').style.display = 'flex';
        document.getElementById('discountType').textContent = currentDiscount.type === 'percent' ? currentDiscount.value + '%' : currentDiscount.value.toFixed(2) + ' EUR';
        document.getElementById('discountValue').textContent = currentDiscount.amountEUR.toFixed(2) + ' EUR';
        const finalTotalAmount = Math.max(0, totalAmount - currentDiscount.amountEUR);
        document.getElementById('finalTotalAmount').textContent = finalTotalAmount.toFixed(2) + ' EUR';
    } else {
        document.querySelector('.discount-summary').style.display = 'none';
        document.querySelector('.final-total').style.display = 'none';
    }
}

// Update payment summary
function updatePaymentSummary() {
    const totalItems = getTotalItems();
    const totalGiftItems = getTotalGiftItems();
    const totalAmount = getTotalAmount(false);
    const totalGiftAmount = getTotalGiftAmount();
    document.getElementById('paymentTotalItems').textContent = totalItems;
    document.getElementById('paymentTotalAmount').textContent = totalAmount.toFixed(2) + ' EUR';
    document.getElementById('paymentTotalGiftItems').textContent = totalGiftItems;
    document.getElementById('paymentTotalGiftAmount').textContent = totalGiftAmount.toFixed(2) + ' EUR';
    if (currentDiscount.type) {
        document.querySelector('#paymentScreen .discount-summary').style.display = 'flex';
        document.querySelector('#paymentScreen .final-total').style.display = 'flex';
        document.getElementById('paymentDiscountType').textContent = currentDiscount.type === 'percent' ? currentDiscount.value + '%' : currentDiscount.value.toFixed(2) + ' EUR';
        document.getElementById('paymentDiscountValue').textContent = currentDiscount.amountEUR.toFixed(2) + ' EUR';
        const finalTotalAmount = Math.max(0, totalAmount - currentDiscount.amountEUR);
        document.getElementById('paymentFinalTotalAmount').textContent = finalTotalAmount.toFixed(2) + ' EUR';
    } else {
        document.querySelector('#paymentScreen .discount-summary').style.display = 'none';
        document.querySelector('#paymentScreen .final-total').style.display = 'none';
    }
}

// Get total items
function getTotalItems() {
    let total = 0;
    for (const itemId in currentOrder) if (!currentOrder[itemId].isGift) total += currentOrder[itemId].qty;
    return total;
}

// Get total gift items
function getTotalGiftItems() {
    let total = 0;
    for (const itemId in currentOrder) if (currentOrder[itemId].isGift) total += currentOrder[itemId].qty;
    return total;
}

// Get total amount
function getTotalAmount(includeGifts = false) {
    let total = 0;
    for (const itemId in currentOrder) if (includeGifts || !currentOrder[itemId].isGift) total += currentOrder[itemId].totalEUR;
    return total;
}

// Get total gift amount
function getTotalGiftAmount() {
    let total = 0;
    for (const itemId in currentOrder) if (currentOrder[itemId].isGift) total += currentOrder[itemId].totalEUR;
    return total;
}

// Get final total amount
function getFinalTotalAmount() {
    const subtotal = getTotalAmount(false);
    return currentDiscount.type ? Math.max(0, subtotal - currentDiscount.amountEUR) : subtotal;
}

// Complete order
function completeOrder() {
    if (!currentPayment) {
        showNotification(translations[currentLanguage].selectPaymentMethod);
        return;
    }
    showLoading();
    setTimeout(() => {
        const now = new Date();
        const dateStr = now.toLocaleDateString();
        const timeStr = now.toLocaleTimeString();
        const dateTimeStr = `${dateStr} ${timeStr}`;
        const subtotal = getTotalAmount(false);
        const finalTotal = getFinalTotalAmount();
        const giftTotal = getTotalGiftAmount();
        const order = {
            id: Date.now(), villa: getVillaName(currentVilla), villaId: currentVilla, date: dateTimeStr,
            timestamp: now.getTime(), items: { ...currentOrder }, totalItems: getTotalItems(),
            totalGiftItems: getTotalGiftItems(), subtotalAmount: subtotal, discount: { ...currentDiscount },
            finalAmount: finalTotal, giftAmount: giftTotal, payment: currentPayment
        };
        orderHistory.unshift(order);
        saveOrderHistory();
        generateReceipt(order);
        hideLoading();
        showScreen('receiptScreen');
        recordAction({ type: 'complete', order });
    }, 1000);
}

// Generate receipt
function generateReceipt(order) {
    document.getElementById('receiptVilla').textContent = order.villa;
    document.getElementById('receiptDate').textContent = order.date;
    const receiptPaidItemsContainer = document.getElementById('receiptPaidItems');
    receiptPaidItemsContainer.innerHTML = "";
    const receiptGiftItemsContainer = document.getElementById('receiptGiftItems');
    receiptGiftItemsContainer.innerHTML = "";
    const receiptGiftSection = document.getElementById('receiptGiftSection');
    let hasGiftItems = false;
    for (const itemId in order.items) {
        const item = order.items[itemId];
        const itemElement = document.createElement('div');
        itemElement.class
