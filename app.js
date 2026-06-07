// ==========================================================================
// Menu Dataset - Matching menu.png
// ==========================================================================
const MENU_ITEMS = [
  // Banh Mi Category
  {
    id: "bm-1",
    name: "1. Cold Cuts Banh Mi",
    chineseName: "綜合冷切肉法棍",
    price: 5.49,
    category: "banh-mi",
    tag: "Traditional",
    image: "images/banh-mi-classic.png",
    description: "Traditional combination of premium sliced Vietnamese ham, headcheese, house liver pâté, egg mayonnaise, cucumber, cilantro, and fresh red chilies in a crispy baguette."
  },
  {
    id: "bm-2",
    name: "2. Roasted Chicken Banh Mi",
    chineseName: "烤鸡法棍",
    price: 6.99,
    category: "banh-mi",
    tag: "Oven Roasted",
    image: "images/banh-mi-classic.png",
    description: "Juicy shredded roasted chicken breast infused with garlic and soy sauce, spread with house mayo, pâté, fresh cilantro, cucumber, and quick-pickled vegetables."
  },
  {
    id: "bm-3",
    name: "3. Meatball Pork (Xiu mai) Banh Mi",
    chineseName: "猪肉丸法棍",
    price: 6.99,
    category: "banh-mi",
    tag: "Traditional Stew",
    image: "images/banh-mi-classic.png",
    description: "Tender pork meatballs slow-simmered in a rich tomato sauce, served hot in our crispy toasted baguette with a smear of mayo, cilantro, and pickled vegetables."
  },
  {
    id: "bm-4",
    name: "4. Crispy Roast Pork Belly Banh Mi",
    chineseName: "烤五花肉法棍",
    price: 6.99,
    category: "banh-mi",
    tag: "House Special",
    image: "images/banh-mi-classic.png",
    description: "Succulent crispy pork belly slices with crackling skin, topped with savory hoisin drizzle, liver pâté, house mayo, cucumber, cilantro, and spicy jalapenos."
  },
  {
    id: "bm-5",
    name: "5. Lemongrass Pork Banh Mi",
    chineseName: "越南香茅猪肉法棍",
    price: 6.99,
    category: "banh-mi",
    tag: "Lemongrass Marinade",
    image: "images/banh-mi-classic.png",
    description: "Aromatically marinated charcoal-grilled pork shoulder with fresh lemongrass, garlic, and honey, paired with crisp cucumber, cilantro, and sweet pickles."
  },
  {
    id: "bm-6",
    name: "6. Lemongrass Beef Banh Mi",
    chineseName: "香茅牛肉法棍",
    price: 7.49,
    category: "banh-mi",
    tag: "Premium Stir-Fry",
    image: "images/banh-mi-classic.png",
    description: "Tender flank steak stir-fried with fragrant lemongrass and yellow onions, stuffed in a crispy baguette with garlic mayo, cilantro, and dynamic house pickles."
  },
  {
    id: "bm-7",
    name: "7. Grilled Pork Banh Mi",
    chineseName: "烤猪肉法式面包",
    price: 7.49,
    category: "banh-mi",
    tag: "Charcoal Grill",
    image: "images/banh-mi-classic.png",
    description: "Signature sweet-savory grilled pork slices marinated Saigon-style, served with house pâté, creamy egg spread, and refreshing fresh cilantro and chili."
  },

  // Drinks Category - Coffee
  {
    id: "dr-1",
    name: "Vietnamese Coffee",
    chineseName: "越南咖啡",
    price: 5.99,
    category: "drinks",
    tag: "Coffee",
    image: "images/vietnamese-coffee.png",
    description: "Traditional bold, slow-drip dark roast coffee brewed with a metal Phin filter, blended with sweet condensed milk and served over crushed ice."
  },
  {
    id: "dr-2",
    name: "Coconut Milk Coffee",
    chineseName: "椰奶咖啡",
    price: 6.50,
    category: "drinks",
    tag: "Coffee",
    image: "images/vietnamese-coffee.png",
    description: "Smooth, strong Vietnamese espresso blended with creamy iced coconut milk and shaved ice, creating a refreshing frozen tropical coffee delight."
  },
  {
    id: "dr-3",
    name: "Vietnamese Salted Cream Coffee",
    chineseName: "越南咸奶咖啡",
    price: 6.99,
    category: "drinks",
    tag: "Coffee",
    image: "images/vietnamese-coffee.png",
    description: "Our signature bold iced Vietnamese coffee topped with a thick, velvety layer of home-made savory-sweet salted sea salt cream foam."
  },

  // Drinks Category - Matcha
  {
    id: "dr-4",
    name: "Matcha Latte",
    chineseName: "抹茶拿铁",
    price: 5.99,
    category: "drinks",
    tag: "Matcha",
    image: "images/matcha-latte.png",
    description: "Premium ceremonial-grade stone-ground Japanese matcha whisked into hot water and poured over cold organic milk and ice."
  },
  {
    id: "dr-5",
    name: "Coconut Matcha",
    chineseName: "椰子抹茶",
    price: 6.49,
    category: "drinks",
    tag: "Matcha",
    image: "images/matcha-latte.png",
    description: "Earthysweet layers of vibrant green matcha latte poured gently over creamy, refreshing coconut milk and ice cubes."
  },
  {
    id: "dr-6",
    name: "Salted Cream Matcha",
    chineseName: "咸奶盖抹茶",
    price: 6.49,
    category: "drinks",
    tag: "Matcha",
    image: "images/matcha-latte.png",
    description: "Chilled matcha green tea latte topped with a luxurious, dense float of house-crafted salted cream foam."
  },
  {
    id: "dr-7",
    name: "Red Bean Matcha",
    chineseName: "红豆抹茶",
    price: 6.99,
    category: "drinks",
    tag: "Matcha",
    image: "images/matcha-latte.png",
    description: "A gorgeous layered treat with sweet, soft azuki red bean paste at the bottom, organic whole milk, and a header of whisked matcha."
  },

  // Drinks Category - Fruit Tea
  {
    id: "dr-8",
    name: "Kumquat Tea",
    chineseName: "金桔茶",
    price: 6.99,
    category: "drinks",
    tag: "Fruit Tea",
    image: "images/kumquat-tea.png",
    description: "A refreshing, citrusy brew of golden black tea infused with hand-squeezed fresh kumquats, lime wheels, mint leaves, and a touch of honey."
  },
  {
    id: "dr-9",
    name: "Passion Fruit Tea",
    chineseName: "百香果茶",
    price: 6.99,
    category: "drinks",
    tag: "Fruit Tea",
    image: "images/kumquat-tea.png",
    description: "Zesty and sweet iced black tea mixed with fresh, aromatic passion fruit pulp, seeds, ice, and clean sugar syrup."
  },

  // Combos Category
  {
    id: "cb-1",
    name: "Morning Combo",
    chineseName: "综合冷切肉法棍 + 越南咸奶咖啡",
    price: 9.99,
    category: "combos",
    tag: "Breakfast Deal",
    image: "images/vietnamese-coffee.png",
    description: "Fuel your day with our signature 1. Cold Cuts Banh Mi paired with a refreshing glass of Vietnamese Coffee. (Save $1.49!)"
  },
  {
    id: "cb-2",
    name: "Lunch Combo",
    chineseName: "香茅牛肉法棍 + 金桔茶",
    price: 12.99,
    category: "combos",
    tag: "Lunch Special",
    image: "images/banh-mi-classic.png",
    description: "The perfect lunch pairing: Our aromatic 6. Lemongrass Beef Banh Mi and an ice-cold citrus Kumquat Tea. (Save $1.49!)"
  },
  {
    id: "cb-3",
    name: "Afternoon Combo",
    chineseName: "烤猪肉法式面包 + 咸奶盖抹茶",
    price: 11.99,
    category: "combos",
    tag: "Afternoon Tea",
    image: "images/matcha-latte.png",
    description: "Unwind with the sweet-savory 7. Grilled Pork Banh Mi and our creamy, velvety Salted Cream Matcha. (Save $1.99!)"
  }
];

// ==========================================================================
// Application State
// ==========================================================================
let cart = [];
let activeFilter = "all";
let searchQuery = "";
let currentCustomizingItem = null;

// ==========================================================================
// DOM Elements
// ==========================================================================
const menuGrid = document.getElementById("menu-items-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("menu-search");

const cartToggleBtn = document.getElementById("cart-toggle");
const cartCloseBtn = document.getElementById("cart-close");
const cartOverlay = document.getElementById("cart-overlay");
const cartDrawer = document.getElementById("cart-drawer");
const startShoppingBtn = document.getElementById("start-shopping");

const cartEmptyState = document.getElementById("cart-empty");
const cartFilledState = document.getElementById("cart-filled");
const cartItemsList = document.getElementById("cart-items-list");
const cartSubtotalEl = document.getElementById("cart-subtotal");
const cartDiscountEl = document.getElementById("cart-discount");
const promoRow = document.getElementById("promo-row");
const cartTotalEl = document.getElementById("cart-total");
const cartCountEl = document.getElementById("cart-count");

const customModalOverlay = document.getElementById("custom-modal-overlay");
const customModal = document.getElementById("custom-modal");
const customModalClose = document.getElementById("custom-modal-close");
const customizationForm = document.getElementById("customization-form");
const addToCartConfirmBtn = document.getElementById("add-to-cart-confirm-btn");

const viewPaperMenuBtn = document.getElementById("view-paper-menu-btn");
const menuLightbox = document.getElementById("menu-lightbox");
const lightboxClose = document.getElementById("lightbox-close");

const checkoutBtn = document.getElementById("checkout-btn");
const successOverlay = document.getElementById("success-overlay");
const successDialog = document.getElementById("success-dialog");
const successCloseBtn = document.getElementById("success-close-btn");
const successOrderId = document.getElementById("success-order-id");
const successOrderItems = document.getElementById("success-order-items");
const successOrderTotal = document.getElementById("success-order-total");

const mobileMenuToggle = document.getElementById("mobile-toggle");
const mobileNav = document.getElementById("mobile-nav");

// ==========================================================================
// Init & Render Logic
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  setupEventListeners();
  initLeafletMap();
});

// Render the menu items with active filters and search
function renderMenu() {
  menuGrid.innerHTML = "";
  
  const filtered = MENU_ITEMS.filter(item => {
    // Category Filter
    if (activeFilter !== "all" && item.category !== activeFilter) {
      return false;
    }
    
    // Search Query Filter
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(query);
      const matchChinese = item.chineseName.toLowerCase().includes(query);
      const matchDesc = item.description.toLowerCase().includes(query);
      const matchTag = item.tag.toLowerCase().includes(query);
      return matchName || matchChinese || matchDesc || matchTag;
    }
    
    return true;
  });

  if (filtered.length === 0) {
    menuGrid.innerHTML = `
      <div class="text-center w-full" style="grid-column: 1 / -1; padding: 60px 20px;">
        <i class="fa-solid fa-cookie-bite" style="font-size: 3rem; color: var(--brand-caramel); margin-bottom: 16px; display: block;"></i>
        <h3 style="font-size: 1.5rem; margin-bottom: 8px;">No items match your criteria</h3>
        <p>Try searching for ingredients like "beef", "matcha" or browse another category.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";
    
    card.innerHTML = `
      <span class="menu-card-tag">${item.tag}</span>
      <div class="menu-card-img-wrapper">
        <img src="${item.image}" alt="${item.name}" class="menu-card-img" loading="lazy">
      </div>
      <div class="menu-card-body">
        <div class="menu-card-title-row">
          <h3>${item.name}</h3>
          <span class="menu-card-price">$${item.price.toFixed(2)}</span>
        </div>
        <div class="menu-card-chinese">${item.chineseName}</div>
        <p class="menu-card-desc">${item.description}</p>
        <div class="menu-card-footer">
          <button class="add-btn" data-id="${item.id}">
            <i class="fa-solid fa-plus"></i> Add to Order
          </button>
        </div>
      </div>
    `;
    
    menuGrid.appendChild(card);
  });
  
  // Attach Event Listeners to rendered add buttons
  document.querySelectorAll(".add-btn").forEach(button => {
    button.addEventListener("click", (e) => {
      const itemId = e.currentTarget.getAttribute("data-id");
      openCustomizationModal(itemId);
    });
  });
}

// Setup Event Listeners
function setupEventListeners() {
  // Category Filter clicks
  filterButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");
      activeFilter = e.target.getAttribute("data-filter");
      renderMenu();
    });
  });

  // Search input typing
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderMenu();
  });

  // Cart Drawer show/hide
  cartToggleBtn.addEventListener("click", toggleCart);
  cartCloseBtn.addEventListener("click", toggleCart);
  cartOverlay.addEventListener("click", toggleCart);
  startShoppingBtn.addEventListener("click", () => {
    toggleCart();
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  });

  // Customization Modal close
  customModalClose.addEventListener("click", closeCustomizationModal);
  customModalOverlay.addEventListener("click", closeCustomizationModal);

  // Customization form submission
  addToCartConfirmBtn.addEventListener("click", handleCustomizationConfirm);

  // Original menu lightbox
  viewPaperMenuBtn.addEventListener("click", () => menuLightbox.classList.add("active"));
  lightboxClose.addEventListener("click", () => menuLightbox.classList.remove("active"));
  menuLightbox.addEventListener("click", (e) => {
    if (e.target === menuLightbox) menuLightbox.classList.remove("active");
  });

  // Place Order Simulation
  checkoutBtn.addEventListener("click", handleCheckout);
  successCloseBtn.addEventListener("click", closeSuccessDialog);
  successOverlay.addEventListener("click", closeSuccessDialog);

  // Sticky header scroll shadow & Scrollspy active links
  window.addEventListener("scroll", handleWindowScroll);

  // Mobile menu dropdown
  mobileMenuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    const icon = mobileMenuToggle.querySelector("i");
    if (mobileNav.classList.contains("active")) {
      icon.className = "fa-solid fa-xmark";
    } else {
      icon.className = "fa-solid fa-bars";
    }
  });

  // Close mobile nav on link click
  document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      mobileMenuToggle.querySelector("i").className = "fa-solid fa-bars";
    });
  });
}

// Handle sticky header and Scrollspy links
function handleWindowScroll() {
  const header = document.querySelector(".main-header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "var(--shadow-md)";
    header.style.backgroundColor = "rgba(246, 239, 230, 0.95)";
  } else {
    header.style.boxShadow = "none";
    header.style.backgroundColor = "rgba(246, 239, 230, 0.88)";
  }

  // Scrollspy
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  
  let currentSec = "home";
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 120;
    const secHeight = sec.clientHeight;
    if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
      currentSec = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSec}`) {
      link.classList.add("active");
    }
  });
}

// Toggle Cart Drawer
function toggleCart() {
  cartDrawer.classList.toggle("active");
  cartOverlay.classList.toggle("active");
  
  // Disable body scroll when drawer is open
  if (cartDrawer.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

// ==========================================================================
// Customization Modal Logic
// ==========================================================================
function openCustomizationModal(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  currentCustomizingItem = item;
  
  // Populate basic modal info
  document.getElementById("modal-item-name").textContent = item.name;
  document.getElementById("modal-item-chinese").textContent = item.chineseName;
  document.getElementById("modal-item-price").textContent = `$${item.price.toFixed(2)}`;

  // Build customization forms based on category
  customizationForm.innerHTML = "";

  if (item.category === "banh-mi") {
    // 1. Spice Level
    customizationForm.appendChild(createRadioGroup("Spice Level", "spice", [
      { label: "No Spicy", value: "No Spicy" },
      { label: "Mild (Recommended)", value: "Mild", checked: true },
      { label: "Hot", value: "Hot" },
      { label: "Extra Hot", value: "Extra Hot" }
    ]));

    // 2. Ingredients Exclusions
    customizationForm.appendChild(createCheckboxGroup("Exclude Ingredients", "exclude", [
      { label: "No Cilantro", value: "Cilantro" },
      { label: "No Cucumbers", value: "Cucumbers" },
      { label: "No Jalapenos", value: "Jalapenos" },
      { label: "No Pickled Carrots & Daikon", value: "Pickles" },
      { label: "No Mayo", value: "Mayo" },
      { label: "No Liver Pâté", value: "Pâté" }
    ]));

    // 3. Extras
    customizationForm.appendChild(createCheckboxGroup("Add Extras", "extra", [
      { label: "Extra Meat", value: "Extra Meat", price: 2.00 },
      { label: "Double Pâté", value: "Double Pâté", price: 1.00 },
      { label: "Add Fried Egg", value: "Fried Egg", price: 1.50 }
    ]));

  } else if (item.category === "drinks") {
    // 1. Sweetness
    customizationForm.appendChild(createRadioGroup("Sweetness Level", "sweetness", [
      { label: "Regular Sweet (100%)", value: "100% Sweet", checked: true },
      { label: "Less Sweet (70%)", value: "70% Sweet" },
      { label: "Half Sweet (50%)", value: "50% Sweet" },
      { label: "Unsweetened (0%)", value: "0% Sweet" }
    ]));

    // 2. Ice Level
    customizationForm.appendChild(createRadioGroup("Ice Level", "ice", [
      { label: "Regular Ice", value: "Regular Ice", checked: true },
      { label: "Less Ice", value: "Less Ice" },
      { label: "No Ice", value: "No Ice" }
    ]));

    // 3. Toppings / Extras
    let toppings = [];
    if (item.tag === "Matcha") {
      toppings = [
        { label: "Extra Red Bean", value: "Red Bean", price: 1.00 },
        { label: "Extra Salted Cream", value: "Salted Cream", price: 1.00 }
      ];
    } else if (item.tag === "Coffee") {
      toppings = [
        { label: "Extra Condensed Milk", value: "Condensed Milk", price: 0.75 },
        { label: "Extra Salted Cream", value: "Salted Cream", price: 1.00 }
      ];
    } else {
      toppings = [
        { label: "Add Chia Seeds", value: "Chia Seeds", price: 0.75 },
        { label: "Add Basil Seeds", value: "Basil Seeds", price: 0.75 }
      ];
    }
    customizationForm.appendChild(createCheckboxGroup("Add Extra Toppings", "extra", toppings));

  } else if (item.category === "combos") {
    // Combo Options
    customizationForm.appendChild(createRadioGroup("Banh Mi Spice Level", "spice", [
      { label: "No Spicy Banh Mi", value: "No Spicy" },
      { label: "Mild Banh Mi (Recommended)", value: "Mild", checked: true },
      { label: "Hot Banh Mi", value: "Hot" }
    ]));
    
    customizationForm.appendChild(createRadioGroup("Drink Ice Level", "ice", [
      { label: "Regular Ice Drink", value: "Regular Ice", checked: true },
      { label: "Less Ice Drink", value: "Less Ice" },
      { label: "No Ice Drink", value: "No Ice" }
    ]));

    customizationForm.appendChild(createCheckboxGroup("Banh Mi Exclusions", "exclude", [
      { label: "No Cilantro", value: "Cilantro" },
      { label: "No Jalapenos", value: "Jalapenos" }
    ]));
  }

  // Show Modal
  customModalOverlay.classList.add("active");
  customModal.classList.add("active");
  document.body.style.overflow = "hidden"; // Disable scroll
}

function closeCustomizationModal() {
  customModalOverlay.classList.remove("active");
  customModal.classList.remove("active");
  
  if (!cartDrawer.classList.contains("active")) {
    document.body.style.overflow = "";
  }
}

// Helpers to build options inputs dynamically
function createRadioGroup(title, name, options) {
  const group = document.createElement("div");
  group.className = "form-group";
  
  let optionsHtml = "";
  options.forEach(opt => {
    optionsHtml += `
      <label class="option-control ${opt.checked ? 'selected-active' : ''}">
        <input type="radio" name="${name}" value="${opt.value}" ${opt.checked ? 'checked' : ''} onchange="handleOptionUIRadioChange(this)">
        <div class="option-text-wrapper">
          <span class="option-label">${opt.label}</span>
        </div>
      </label>
    `;
  });

  group.innerHTML = `
    <h4 class="form-group-title">${title} <span class="hint">(Choose One)</span></h4>
    <div class="options-list">${optionsHtml}</div>
  `;
  return group;
}

function createCheckboxGroup(title, name, options) {
  const group = document.createElement("div");
  group.className = "form-group";
  
  let optionsHtml = "";
  options.forEach(opt => {
    const priceText = opt.price ? `+$${opt.price.toFixed(2)}` : "";
    optionsHtml += `
      <label class="option-control">
        <input type="checkbox" name="${name}" value="${opt.value}" data-price="${opt.price || 0}" onchange="handleOptionUICheckboxChange(this)">
        <div class="option-text-wrapper">
          <span class="option-label">${opt.label}</span>
          ${priceText ? `<span class="option-price">${priceText}</span>` : ''}
        </div>
      </label>
    `;
  });

  group.innerHTML = `
    <h4 class="form-group-title">${title} <span class="hint">(Optional)</span></h4>
    <div class="options-list">${optionsHtml}</div>
  `;
  return group;
}

// Radio border activation
window.handleOptionUIRadioChange = (inputEl) => {
  const siblings = inputEl.closest(".options-list").querySelectorAll(".option-control");
  siblings.forEach(sib => sib.classList.remove("selected-active"));
  if (inputEl.checked) {
    inputEl.closest(".option-control").classList.add("selected-active");
  }
};

// Checkbox border activation
window.handleOptionUICheckboxChange = (inputEl) => {
  if (inputEl.checked) {
    inputEl.closest(".option-control").classList.add("selected-active");
  } else {
    inputEl.closest(".option-control").classList.remove("selected-active");
  }
};

// Handle customization approval
function handleCustomizationConfirm() {
  const item = currentCustomizingItem;
  if (!item) return;

  const formData = new FormData(customizationForm);
  const options = {
    spice: formData.get("spice") || "",
    sweetness: formData.get("sweetness") || "",
    ice: formData.get("ice") || "",
    exclusions: formData.getAll("exclude"),
    extras: []
  };

  let extraPrice = 0;
  
  // Find selected checkbox extras
  const extraCheckboxes = customizationForm.querySelectorAll("input[name='extra']:checked");
  extraCheckboxes.forEach(cb => {
    const price = parseFloat(cb.getAttribute("data-price"));
    options.extras.push(cb.value);
    extraPrice += price;
  });

  const cartItemId = `${item.id}-${options.spice}-${options.sweetness}-${options.ice}-${options.exclusions.join(",")}-${options.extras.join(",")}`;
  
  const existingCartIndex = cart.findIndex(c => c.cartItemId === cartItemId);

  if (existingCartIndex > -1) {
    cart[existingCartIndex].quantity += 1;
  } else {
    cart.push({
      cartItemId: cartItemId,
      item: item,
      options: options,
      extraPrice: extraPrice,
      quantity: 1
    });
  }

  // Re-calculate, render, open cart drawer, close modal
  updateCartUI();
  closeCustomizationModal();
  setTimeout(() => {
    if (!cartDrawer.classList.contains("active")) {
      toggleCart();
    }
  }, 100);
}

// ==========================================================================
// Cart Operations & Rendering
// ==========================================================================
function updateCartUI() {
  // Update cart item count badge
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountEl.textContent = totalCount;

  if (cart.length === 0) {
    cartEmptyState.style.display = "flex";
    cartFilledState.style.display = "none";
    return;
  }

  cartEmptyState.style.display = "none";
  cartFilledState.style.display = "flex";

  cartItemsList.innerHTML = "";
  let subtotal = 0;

  cart.forEach(cartItem => {
    const itemTotal = (cartItem.item.price + cartItem.extraPrice) * cartItem.quantity;
    subtotal += itemTotal;

    // Build options summary text
    let optionsText = [];
    if (cartItem.options.spice) optionsText.push(`Spice: ${cartItem.options.spice}`);
    if (cartItem.options.sweetness) optionsText.push(`Sweetness: ${cartItem.options.sweetness}`);
    if (cartItem.options.ice) optionsText.push(`Ice: ${cartItem.options.ice}`);
    
    if (cartItem.options.exclusions.length > 0) {
      optionsText.push(`Excludes: ${cartItem.options.exclusions.join(", ")}`);
    }
    if (cartItem.options.extras.length > 0) {
      optionsText.push(`Additions: ${cartItem.options.extras.join(", ")}`);
    }

    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="cart-item-img-wrapper">
        <img src="${cartItem.item.image}" alt="${cartItem.item.name}">
      </div>
      <div class="cart-item-details">
        <div class="cart-item-name-row">
          <span class="cart-item-name">${cartItem.item.name}</span>
          <span class="cart-item-price">$${(cartItem.item.price + cartItem.extraPrice).toFixed(2)}</span>
        </div>
        ${optionsText.length > 0 ? `<div class="cart-item-options">${optionsText.join(" | ")}</div>` : ''}
        <div class="cart-item-controls-row">
          <div class="quantity-controller">
            <button class="qty-btn" onclick="changeQty('${cartItem.cartItemId}', -1)"><i class="fa-solid fa-minus"></i></button>
            <span class="qty-val">${cartItem.quantity}</span>
            <button class="qty-btn" onclick="changeQty('${cartItem.cartItemId}', 1)"><i class="fa-solid fa-plus"></i></button>
          </div>
          <button class="remove-item-btn" onclick="removeCartItem('${cartItem.cartItemId}')">Remove</button>
        </div>
      </div>
    `;

    cartItemsList.appendChild(row);
  });

  // Calculate taxes, discounts, and grand totals
  // Note: Individual menu items already reflect correct prices. Combos are pre-calculated.
  // We will add 8.875% tax (NYC rate) to simulate real totals
  const taxRate = 0.08875;
  const tax = subtotal * taxRate;
  const grandTotal = subtotal + tax;

  cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  cartTotalEl.textContent = `$${grandTotal.toFixed(2)}`;
}

window.changeQty = (cartItemId, delta) => {
  const index = cart.findIndex(c => c.cartItemId === cartItemId);
  if (index === -1) return;

  cart[index].quantity += delta;
  
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  updateCartUI();
};

window.removeCartItem = (cartItemId) => {
  cart = cart.filter(c => c.cartItemId !== cartItemId);
  updateCartUI();
};

// ==========================================================================
// Checkout Simulator Logic
// ==========================================================================
function handleCheckout() {
  if (cart.length === 0) return;

  // Generate random order ID
  const orderNum = Math.floor(1000 + Math.random() * 9000);
  successOrderId.textContent = `#KL-${orderNum}`;

  // Build items summary
  successOrderItems.innerHTML = "";
  let totalPayable = 0;
  
  cart.forEach(cartItem => {
    const itemTotal = (cartItem.item.price + cartItem.extraPrice) * cartItem.quantity;
    totalPayable += itemTotal;

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${cartItem.quantity}x ${cartItem.item.name}</span>
      <strong>$${itemTotal.toFixed(2)}</strong>
    `;
    successOrderItems.appendChild(li);
  });

  const tax = totalPayable * 0.08875;
  const grandTotal = totalPayable + tax;

  successOrderTotal.textContent = `$${grandTotal.toFixed(2)}`;

  // Close Cart Drawer, Open Success dialog
  toggleCart();
  successOverlay.classList.add("active");
  successDialog.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSuccessDialog() {
  successOverlay.classList.remove("active");
  successDialog.classList.remove("active");
  document.body.style.overflow = "";

  // Reset Cart
  cart = [];
  updateCartUI();
}

// ==========================================================================
// Leaflet.js Map Initialization
// ==========================================================================
function initLeafletMap() {
  // Empire State Building region coordinates for Kelee Baguette placement
  const latitude = 40.7484;
  const longitude = -73.9857;

  // Set up the Leaflet Map container
  const map = L.map("leaflet-map", {
    center: [latitude, longitude],
    zoom: 16,
    scrollWheelZoom: false
  });

  // Warm light-brown maps styling: Use standard OpenStreetMap tiles, and styled via CSS filters
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Custom cup/baguette icon marker
  const customIcon = L.divIcon({
    className: "custom-map-marker",
    html: `
      <div style="
        background-color: var(--brand-coffee); 
        color: var(--bg-cream); 
        width: 38px; 
        height: 38px; 
        border-radius: 50%; 
        border: 2px solid var(--accent-gold); 
        display: flex; 
        align-items: center; 
        justify-content: center;
        box-shadow: var(--shadow-md);
      ">
        <i class="fa-solid fa-mug-hot" style="font-size: 0.95rem;"></i>
      </div>
    `,
    iconSize: [38, 38],
    iconAnchor: [19, 19]
  });

  // Place custom marker on map
  L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
}
