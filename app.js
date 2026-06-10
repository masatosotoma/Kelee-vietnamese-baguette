// ==========================================================================
// Menu Dataset with Multi-Language Support (English & Chinese)
// ==========================================================================
const MENU_ITEMS = [
  // Banh Mi Category
  {
    id: "bm-1",
    nameEn: "1. Cold Cuts Banh Mi",
    nameZh: "1. 招牌冷切肉法棍",
    chineseName: "綜合冷切肉法棍",
    price: 5.49,
    category: "banh-mi",
    tagEn: "Traditional",
    tagZh: "传统经典",
    image: "images/banh-mi-classic.png",
    descriptionEn: "Traditional combination of premium sliced Vietnamese ham, headcheese, house liver pâté, egg mayonnaise, cucumber, cilantro, and fresh red chilies in a crispy baguette.",
    descriptionZh: "经典招牌法棍，搭配精选越南扎肉、熏蹄肉、自制鸡肝酱、奶油蛋黄酱、黄瓜、香菜和新鲜红辣椒。"
  },
  {
    id: "bm-2",
    nameEn: "2. Roasted Chicken Banh Mi",
    nameZh: "2. 烤鸡肉法棍",
    chineseName: "烤鸡法棍",
    price: 6.99,
    category: "banh-mi",
    tagEn: "Oven Roasted",
    tagZh: "鲜嫩烤鸡",
    image: "images/banh-mi-classic.png",
    descriptionEn: "Juicy shredded roasted chicken breast infused with garlic and soy sauce, spread with house mayo, pâté, fresh cilantro, cucumber, and quick-pickled vegetables.",
    descriptionZh: "鲜嫩多汁的手撕烤鸡肉，融入大蒜和酱油，涂上自制蛋黄酱和鸡肝酱，搭配香菜、黄瓜和酸甜泡菜。"
  },
  {
    id: "bm-3",
    nameEn: "3. Meatball Pork (Xiu mai) Banh Mi",
    nameZh: "3. 茄汁猪肉丸法棍",
    chineseName: "猪肉丸法棍",
    price: 6.99,
    category: "banh-mi",
    tagEn: "Traditional Stew",
    tagZh: "经典茄汁",
    image: "images/banh-mi-classic.png",
    descriptionEn: "Tender pork meatballs slow-simmered in a rich tomato sauce, served hot in our crispy toasted baguette with a smear of mayo, cilantro, and pickled vegetables.",
    descriptionZh: "手工猪肉丸在浓郁番茄酱汁中慢火炖煮，热腾腾地夹在酥脆法棍中，配上香菜和酸甜泡菜。"
  },
  {
    id: "bm-4",
    nameEn: "4. Crispy Roast Pork Belly Banh Mi",
    nameZh: "4. 脆皮五花肉法棍",
    chineseName: "烤五花肉法棍",
    price: 6.99,
    category: "banh-mi",
    tagEn: "House Special",
    tagZh: "招牌特色",
    image: "images/banh-mi-classic.png",
    descriptionEn: "Succulent crispy pork belly slices with crackling skin, topped with savory hoisin drizzle, liver pâté, house mayo, cucumber, cilantro, and spicy jalapenos.",
    descriptionZh: "金黄酥脆的脆皮烤五花肉，淋上特制海鲜酱，搭配鸡肝酱、自制蛋黄酱、黄瓜、香菜和辣青椒。"
  },
  {
    id: "bm-5",
    nameEn: "5. Lemongrass Pork Banh Mi",
    nameZh: "5. 香茅烤猪肉法棍",
    chineseName: "越南香茅猪肉法棍",
    price: 6.99,
    category: "banh-mi",
    tagEn: "Lemongrass Marinade",
    tagZh: "浓郁香茅",
    image: "images/banh-mi-classic.png",
    descriptionEn: "Aromatically marinated charcoal-grilled pork shoulder with fresh lemongrass, garlic, and honey, paired with crisp cucumber, cilantro, and sweet pickles.",
    descriptionZh: "炭烤猪肩肉，经新鲜香茅、大蒜和野生蜂蜜腌制，香气逼人，搭配爽脆黄瓜、香菜和酸甜泡菜。"
  },
  {
    id: "bm-6",
    nameEn: "6. Lemongrass Beef Banh Mi",
    nameZh: "6. 香茅爆炒牛肉法棍",
    chineseName: "香茅牛肉法棍",
    price: 7.49,
    category: "banh-mi",
    tagEn: "Premium Stir-Fry",
    tagZh: "火爆肥牛",
    image: "images/banh-mi-classic.png",
    descriptionEn: "Tender flank steak stir-fried with fragrant lemongrass and yellow onions, stuffed in a crispy baguette with garlic mayo, cilantro, and dynamic house pickles.",
    descriptionZh: "鲜嫩牛肉片与芳香香茅和黄洋葱大火爆炒，夹入酥脆法棍，搭配蒜香蛋黄酱、香菜和酸甜泡菜。"
  },
  {
    id: "bm-7",
    nameEn: "7. Grilled Pork Banh Mi",
    nameZh: "7. 蜜汁烤猪肉法式面包",
    chineseName: "烤猪肉法式面包",
    price: 7.49,
    category: "banh-mi",
    tagEn: "Charcoal Grill",
    tagZh: "炭火烤猪",
    image: "images/banh-mi-classic.png",
    descriptionEn: "Signature sweet-savory grilled pork slices marinated Saigon-style, served with house pâté, creamy egg spread, and refreshing fresh cilantro and chili.",
    descriptionZh: "经典西贡风味腌制的香甜烤猪肉片，搭配自制鸡肝酱、奶油蛋黄酱以及清爽的香菜和红辣椒。"
  },

  // Drinks Category - Coffee
  {
    id: "dr-1",
    nameEn: "Vietnamese Coffee",
    nameZh: "经典滴漏咖啡",
    chineseName: "越南咖啡",
    price: 5.99,
    category: "drinks",
    tagEn: "Coffee",
    tagZh: "经典咖啡",
    image: "images/vietnamese-coffee.png",
    descriptionEn: "Traditional bold, slow-drip dark roast coffee brewed with a metal Phin filter, blended with sweet condensed milk and served over crushed ice.",
    descriptionZh: "传统浓郁的慢滴黑咖啡，使用金属 Phin 滤壶冲泡，融入甜炼乳，加入碎冰饮用。"
  },
  {
    id: "dr-2",
    nameEn: "Coconut Milk Coffee",
    nameZh: "椰奶咖啡沙冰",
    chineseName: "椰奶咖啡",
    price: 6.50,
    category: "drinks",
    tagEn: "Coffee",
    tagZh: "冰爽椰奶",
    image: "images/vietnamese-coffee.png",
    descriptionEn: "Traditional Vietnamese coffee blended with smooth, creamy coconut milk and shaved ice, creating a refreshing frozen tropical coffee delight.",
    descriptionZh: "传统越南咖啡与丝滑浓郁 of 椰奶和沙冰完美融合，带来清爽冰凉的热带咖啡享受。"
  },
  {
    id: "dr-3",
    nameEn: "Vietnamese Salted Cream Coffee",
    nameZh: "招牌海盐咸奶盖咖啡",
    chineseName: "越南咸奶咖啡",
    price: 6.99,
    category: "drinks",
    tagEn: "Coffee",
    tagZh: "咸甜海盐",
    image: "images/vietnamese-coffee.png",
    descriptionEn: "Our signature bold iced Vietnamese coffee topped with a thick, velvety layer of home-made savory-sweet salted sea salt cream foam.",
    descriptionZh: "招牌冰越南咖啡，铺上一层厚厚、丝滑的自制咸甜海盐奶盖。"
  },

  // Drinks Category - Matcha
  {
    id: "dr-4",
    nameEn: "Matcha Latte",
    nameZh: "宇治抹茶拿铁",
    chineseName: "抹茶拿铁",
    price: 5.99,
    category: "drinks",
    tagEn: "Matcha",
    tagZh: "经典抹茶",
    image: "images/matcha-latte.png",
    descriptionEn: "Premium ceremonial-grade stone-ground Japanese matcha whisked into hot water and poured over cold organic milk and ice.",
    descriptionZh: "优质仪式级石磨日本宇治抹茶，融入温水冲调，倒入冰凉的有机纯牛奶和冰块中。"
  },
  {
    id: "dr-5",
    nameEn: "Coconut Matcha",
    chineseName: "椰子抹茶",
    nameZh: "椰奶抹茶拿铁",
    price: 6.49,
    category: "drinks",
    tagEn: "Matcha",
    tagZh: "浓郁椰奶",
    image: "images/matcha-latte.png",
    descriptionEn: "Earthysweet layers of vibrant green matcha latte poured gently over creamy, refreshing coconut milk and ice cubes.",
    descriptionZh: "层层分明的抹茶椰奶，亮丽的绿色抹茶缓缓倒入浓郁清爽的冰椰奶中。"
  },
  {
    id: "dr-6",
    nameEn: "Salted Cream Matcha",
    nameZh: "海盐奶盖冰抹茶",
    chineseName: "咸奶盖抹茶",
    price: 6.49,
    category: "drinks",
    tagEn: "Matcha",
    tagZh: "咸甜海盐",
    image: "images/matcha-latte.png",
    descriptionEn: "Chilled matcha green tea latte topped with a luxurious, dense float of house-crafted salted cream foam.",
    descriptionZh: "冰镇抹茶拿铁，覆盖一层奢华浓郁的自制咸奶盖。"
  },
  {
    id: "dr-7",
    nameEn: "Red Bean Matcha",
    nameZh: "相思蜜红豆抹茶",
    chineseName: "红豆抹茶",
    price: 6.99,
    category: "drinks",
    tagEn: "Matcha",
    tagZh: "渐层特调",
    image: "images/matcha-latte.png",
    descriptionEn: "A gorgeous layered treat with sweet, soft azuki red bean paste at the bottom, organic whole milk, and a header of whisked matcha.",
    descriptionZh: "高颜值的渐层饮品，底部是香甜软糯的蜜红豆沙，中层是有机纯牛奶，顶层是手打抹茶。"
  },

  // Drinks Category - Fruit Tea
  {
    id: "dr-8",
    nameEn: "Kumquat Tea",
    nameZh: "鲜桔金桔柠檬茶",
    chineseName: "金桔茶",
    price: 6.99,
    category: "drinks",
    tagEn: "Fruit Tea",
    tagZh: "清爽鲜果",
    image: "images/kumquat-tea.png",
    descriptionEn: "A refreshing, citrusy brew of golden black tea infused with hand-squeezed fresh kumquats, lime wheels, mint leaves, and a touch of honey.",
    descriptionZh: "清爽酸甜的金桔红茶，融入现挤新鲜金桔汁、青柠片、薄荷叶和少许蜂蜜。"
  },
  {
    id: "dr-9",
    nameEn: "Passion Fruit Tea",
    nameZh: "清香百香果绿茶",
    chineseName: "百香果茶",
    price: 6.99,
    category: "drinks",
    tagEn: "Fruit Tea",
    tagZh: "芬芳花果",
    image: "images/kumquat-tea.png",
    descriptionEn: "Zesty and sweet iced black tea mixed with fresh, aromatic passion fruit pulp, seeds, ice, and clean sugar syrup.",
    descriptionZh: "清甜可口的冰红茶，拌入新鲜芬芳的百香果肉、果籽、冰块和纯糖浆。"
  },

  // Combos Category
  {
    id: "cb-1",
    nameEn: "Morning Combo",
    nameZh: "元气早安套餐",
    chineseName: "综合冷切肉法棍 + 越南咸奶咖啡",
    price: 9.99,
    category: "combos",
    tagEn: "Breakfast Deal",
    tagZh: "超值早餐",
    image: "images/vietnamese-coffee.png",
    descriptionEn: "Fuel your day with our signature 1. Cold Cuts Banh Mi paired with a refreshing glass of Vietnamese Coffee. (Save $1.49!)",
    descriptionZh: "用招牌1号冷切肉法棍搭配一杯提神冰越南咖啡，开启活力满满的一天。（立省$1.49！）"
  },
  {
    id: "cb-2",
    nameEn: "Lunch Combo",
    nameZh: "丰盛午餐套餐",
    chineseName: "香茅牛肉法棍 + 金桔茶",
    price: 12.99,
    category: "combos",
    tagEn: "Lunch Special",
    tagZh: "能量午餐",
    image: "images/banh-mi-classic.png",
    descriptionEn: "The perfect lunch pairing: Our aromatic 6. Lemongrass Beef Banh Mi and an ice-cold citrus Kumquat Tea. (Save $1.49!)",
    descriptionZh: "完美午餐搭配：芳香怡人的6号香茅牛肉法棍，配上一杯冰镇金桔茶。（立省$1.49！）"
  },
  {
    id: "cb-3",
    nameEn: "Afternoon Combo",
    nameZh: "悠闲下午茶套餐",
    chineseName: "烤猪肉法式面包 + 咸奶盖抹茶",
    price: 11.99,
    category: "combos",
    tagEn: "Afternoon Tea",
    tagZh: "午后休憩",
    image: "images/matcha-latte.png",
    descriptionEn: "Unwind with the sweet-savory 7. Grilled Pork Banh Mi and our creamy, velvety Salted Cream Matcha. (Save $1.99!)",
    descriptionZh: "午后小憩佳品：咸甜香浓的7号烤猪肉法式面包，搭配丝滑浓郁的咸奶盖抹茶。（立省$1.99！）"
  }
];

// ==========================================================================
// Static Translation Dictionaries (i18n)
// ==========================================================================
const TRANSLATIONS = {
  en: {
    "meta-title": "Kelee Vietnamese Baguette | Authentic Banh Mi & Crafted Drinks",
    "announcement": "🥖 Freshly baked baguettes every morning. Try our Popular Combos to save up to $1.99! ☕",
    "logo-sub": "VIETNAMESE BAGUETTE",
    "nav-home": "Home",
    "nav-menu": "Menu",
    "nav-story": "Our Story",
    "nav-contact": "Contact",
    "hero-tag": "EST. 2026 • TRADITIONAL FLAVORS",
    "hero-title": "Crispy on the Outside,<br><span class=\"highlight-serif\">Soft & Fluffy</span> Inside.",
    "hero-subtitle": "Experience the ultimate Vietnamese Banh Mi crafted with crispy, oven-fresh baguettes, premium slow-cooked meats, pickled vegetables, and our house-special pate. Paired perfectly with our signature salted cream beverages.",
    "hero-btn-menu": "Explore Our Menu",
    "hero-btn-story": "Our Story",
    "feat1-title": "Oven-Fresh Baguettes",
    "feat1-desc": "We bake our baguettes daily in-house using traditional French-Vietnamese techniques for that perfect, airy crunch.",
    "feat2-title": "Traditional Spices",
    "feat2-desc": "Our meats are slow-cooked and marinated in rich aromatic lemongrass, star anise, and local spices overnight.",
    "feat3-title": "Crafted Beverages",
    "feat3-desc": "From slow-dripped Vietnamese coffee to house-made salted cream matches and fruit teas brewed from scratch.",
    "menu-sub": "Taste the Tradition",
    "menu-title": "Our Menu",
    "menu-desc": "Each Banh Mi is custom built with fresh cilantro, cucumber, pickled carrots & daikon, house mayonnaise, and savory pâté. Adjust spice levels to your liking in the cart.",
    "menu-btn-paper": "View Original Menu Card",
    "filter-all": "All Items",
    "filter-banh-mi": "Banh Mi (Baguettes)",
    "filter-drinks": "Drinks",
    "filter-combos": "Popular Combos",
    "search-placeholder": "Search menu (e.g. lemongrass, coffee)...",
    "about-sub": "The Legend of Kelee",
    "about-title": "A Classic Love for Baguettes",
    "about-desc1": "Kelee was born from a simple desire: to share the sensory magic of a perfect Vietnamese baguette. Our recipe combines classic French baking methods introduced to Vietnam centuries ago with the vibrant, bold, and fresh ingredients of Saigon streets.",
    "about-feat1-title": "The Perfect Bake",
    "about-feat1-desc": "High moisture dough and high-heat steam baking give our baguettes their wafer-thin, shatteringly crisp outer crust and cloud-soft interior.",
    "about-feat2-title": "Homemade Pâté & Mayo",
    "about-feat2-desc": "We spread our rich chicken liver pâté and creamy egg mayo on every baguette—made fresh in our kitchen daily.",
    "about-quote": "\"A bite into our Banh Mi is a symphony of textures—the crisp crackle of bread, the savory warmth of meats, the cool crunch of cucumber, and the bright tang of pickles.\"",
    "about-badge": "Authentic Recipe",
    "contact-sub": "Come Visit Us",
    "contact-title": "Location & Hours",
    "contact-addr-title": "Our Address",
    "contact-hours-title": "Opening Hours",
    "contact-hours-desc": `
      <ul class="hours-detailed">
        <li><strong>Tuesday:</strong> 10:00 AM – 8:00 PM</li>
        <li><strong>Wednesday:</strong> 10:00 AM – 8:00 PM</li>
        <li><strong>Thursday:</strong> 10:00 AM – 8:00 PM</li>
        <li><strong>Friday:</strong> 10:00 AM – 8:00 PM</li>
        <li><strong>Saturday:</strong> 10:00 AM – 8:00 PM</li>
        <li><strong>Sunday:</strong> 10:00 AM – 8:00 PM</li>
        <li class="closed-day"><strong>Monday:</strong> Closed</li>
      </ul>
    `,
    "contact-hours-hint": "Kitchen closes 15 minutes before closing.",
    "contact-phone-title": "Get in Touch",
    "map-overlay-title": "Kelee Vietnamese Baguette",
    "map-overlay-desc": "Come inside for hot, crispy sandwiches and fresh cold brew coffee!",
    "map-overlay-btn": "Get Directions",
    "footer-desc": "Serving fresh, crunchy, and savory traditional Vietnamese street food and drinks since 2026. Handcrafted with love.",
    "footer-nav-title": "Navigation",
    "footer-news-title": "Newsletter",
    "footer-news-desc": "Sign up to receive mouth-watering updates, new menu items, and special offers!",
    "footer-copy": "&copy; 2026 Kelee Vietnamese Baguette. All rights reserved. Built with classic aesthetics."
  },
  zh: {
    "meta-title": "Kelee 越南法棍 | 正宗法式面包 & 精制茶饮",
    "announcement": "🥖 每天清晨新鲜烘焙法棍。尝试人气超值套餐，最高可省 $1.99！ ☕",
    "logo-sub": "越南经典法棍",
    "nav-home": "首页",
    "nav-menu": "菜单",
    "nav-story": "品牌故事",
    "nav-contact": "联系我们",
    "hero-tag": "始于2026 • 传世美味",
    "hero-title": "外皮香脆酥爽，<br><span class=\"highlight-serif\">内里松软Q弹</span>",
    "hero-subtitle": "体验极致的越南法棍，采用每日现烤酥脆法棍、秘制慢熬肉品、爽口酸甜泡菜与手作鸡肝酱。搭配招牌海盐咸奶盖茶饮，风味绝佳。",
    "hero-btn-menu": "浏览菜单",
    "hero-btn-story": "品牌故事",
    "feat1-title": "每日现烤法棍",
    "feat1-desc": "我们每天在店内采用传统的法越烘焙技艺，烤制出外酥内软、充满麦香的完美法棍。",
    "feat2-title": "正宗传统调味",
    "feat2-desc": "肉品均经过新鲜香茅、八角等多种天然香料腌制，经低温慢熬，香浓入味。",
    "feat3-title": "匠心手作饮品",
    "feat3-desc": "从传统的 Phin 滤壶滴漏咖啡，到自家极力推介的海盐咸奶盖抹茶及鲜金桔果茶，应有尽有。",
    "menu-sub": "传承百年的街头美味",
    "menu-title": "美味菜单",
    "menu-desc": "每份法棍均搭配新鲜香菜、黄瓜、自制酸甜泡菜、特调蛋黄酱和香浓鸡肝酱。您可在购物车内自主调整辣度。",
    "menu-btn-paper": "查看原版菜单图",
    "filter-all": "全部单品",
    "filter-banh-mi": "正宗法棍",
    "filter-drinks": "特调饮品",
    "filter-combos": "超值套餐",
    "search-placeholder": "搜索单品 (例如：香茅, 咖啡)...",
    "about-sub": "Kelee 的传奇",
    "about-title": "对法棍最纯粹的执着",
    "about-desc1": "Kelee 诞生于一个质朴的心愿：分享完美越南法棍的诱人口感。我们的配方将几百年前传入越南的法国经典烘焙法，与西贡街头充满活力、香气浓郁的食材完美融合。",
    "about-feat1-title": "炉火纯青的烘焙",
    "about-feat1-desc": "高含水量的面团和高温蒸汽烘焙赋予了法棍如晶片般薄脆的外壳以及棉花般蓬松多汁的内里。",
    "about-feat2-title": "手工鸡肝酱与蛋黄酱",
    "about-feat2-desc": "我们在每一根法棍上都抹上丰厚浓郁的自制鸡肝酱和细腻奶油蛋黄酱——每日清晨现做。",
    "about-quote": "“咬下一口法棍，仿佛在口中奏响了一曲口感交响乐——面包的酥脆声、肉的香气、黄瓜的清香与泡菜的酸甜在舌尖交融。”",
    "about-badge": "正宗祖传配方",
    "contact-sub": "欢迎光临",
    "contact-title": "地址与营业时间",
    "contact-addr-title": "营业地址",
    "contact-hours-title": "营业时间",
    "contact-hours-desc": `
      <ul class="hours-detailed">
        <li><strong>星期二:</strong> 上午 10:00 – 晚上 8:00</li>
        <li><strong>星期三:</strong> 上午 10:00 – 晚上 8:00</li>
        <li><strong>星期四:</strong> 上午 10:00 – 晚上 8:00</li>
        <li><strong>星期五:</strong> 上午 10:00 – 晚上 8:00</li>
        <li><strong>星期六:</strong> 上午 10:00 – 晚上 8:00</li>
        <li><strong>星期日:</strong> 上午 10:00 – 晚上 8:00</li>
        <li class="closed-day"><strong>星期一:</strong> 店休</li>
      </ul>
    `,
    "contact-hours-hint": "厨房在打烊前15分钟停止接单。",
    "contact-phone-title": "联系电话",
    "map-overlay-title": "Kelee 越南法棍",
    "map-overlay-desc": "快来尝尝现烤酥脆法棍和冰爽滴漏咖啡吧！",
    "map-overlay-btn": "获取路线",
    "footer-desc": "自2026年起提供新鲜、香脆、美味的传统越南街头美食和手工特调茶饮。用心手作。",
    "footer-nav-title": "快捷导航",
    "footer-news-title": "订阅邮件",
    "footer-news-desc": "订阅以获取最新优惠、新品推介和特别活动资讯！",
    "footer-copy": "&copy; 2026 Kelee 越南法棍。版权所有。经典视觉美学设计。"
  }
};

// ==========================================================================
// Application State
// ==========================================================================
let activeFilter = "all";
let searchQuery = "";
let currentLang = localStorage.getItem("kelee_lang") || "en";

// ==========================================================================
// DOM Elements
// ==========================================================================
const menuGrid = document.getElementById("menu-items-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("menu-search");

const viewPaperMenuBtn = document.getElementById("view-paper-menu-btn");
const menuLightbox = document.getElementById("menu-lightbox");
const lightboxClose = document.getElementById("lightbox-close");

const mobileMenuToggle = document.getElementById("mobile-toggle");
const mobileNav = document.getElementById("mobile-nav");

const langToggleBtn = document.getElementById("lang-toggle");

// ==========================================================================
// Init & Render Logic
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  updateLanguageUI();
  renderMenu();
  setupEventListeners();
  initLeafletMap();
});

// Update all static texts on elements containing [data-i18n]
function updateLanguageUI() {
  const dictionary = TRANSLATIONS[currentLang];
  
  // Set title tag
  document.title = dictionary["meta-title"];
  
  // Walk DOM for data-i18n attributes
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key]) {
      element.innerHTML = dictionary[key];
    }
  });

  // Handle placeholders
  if (searchInput) {
    searchInput.placeholder = dictionary["search-placeholder"];
  }

  // Update Language selector button content
  if (langToggleBtn) {
    langToggleBtn.querySelector("span").textContent = currentLang === "en" ? "中文" : "English";
  }
}

// Render the menu items with active filters and search
function renderMenu() {
  menuGrid.innerHTML = "";
  
  const filtered = MENU_ITEMS.filter(item => {
    const name = currentLang === "en" ? item.nameEn : item.nameZh;
    const desc = currentLang === "en" ? item.descriptionEn : item.descriptionZh;
    const tag = currentLang === "en" ? item.tagEn : item.tagZh;

    // Category Filter
    if (activeFilter !== "all" && item.category !== activeFilter) {
      return false;
    }
    
    // Search Query Filter
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      const matchName = name.toLowerCase().includes(query);
      const matchChinese = item.chineseName.toLowerCase().includes(query);
      const matchDesc = desc.toLowerCase().includes(query);
      const matchTag = tag.toLowerCase().includes(query);
      return matchName || matchChinese || matchDesc || matchTag;
    }
    
    return true;
  });

  if (filtered.length === 0) {
    const isZh = currentLang === "zh";
    menuGrid.innerHTML = `
      <div class="text-center w-full" style="grid-column: 1 / -1; padding: 60px 20px;">
        <i class="fa-solid fa-cookie-bite" style="font-size: 3rem; color: var(--brand-caramel); margin-bottom: 16px; display: block;"></i>
        <h3 style="font-size: 1.5rem; margin-bottom: 8px;">${isZh ? '找不到符合条件的单品' : 'No items match your criteria'}</h3>
        <p>${isZh ? '您可以尝试搜索其他原料（例如：“牛肉”，“抹茶”）或者切换到其他类别。' : 'Try searching for ingredients like "beef", "matcha" or browse another category.'}</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";
    
    const name = currentLang === "en" ? item.nameEn : item.nameZh;
    const desc = currentLang === "en" ? item.descriptionEn : item.descriptionZh;
    const tag = currentLang === "en" ? item.tagEn : item.tagZh;

    card.innerHTML = `
      <span class="menu-card-tag">${tag}</span>
      <div class="menu-card-img-wrapper">
        <img src="${item.image}" alt="${name}" class="menu-card-img" loading="lazy">
      </div>
      <div class="menu-card-body">
        <div class="menu-card-title-row">
          <h3>${name}</h3>
          <span class="menu-card-price">$${item.price.toFixed(2)}</span>
        </div>
        <div class="menu-card-chinese">${item.chineseName}</div>
        <p class="menu-card-desc">${desc}</p>
      </div>
    `;
    
    menuGrid.appendChild(card);
  });
}

// Setup Event Listeners
function setupEventListeners() {
  // Language Switch
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "zh" : "en";
      localStorage.setItem("kelee_lang", currentLang);
      updateLanguageUI();
      renderMenu();
    });
  }

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

  // Original menu lightbox
  viewPaperMenuBtn.addEventListener("click", () => menuLightbox.classList.add("active"));
  lightboxClose.addEventListener("click", () => menuLightbox.classList.remove("active"));
  menuLightbox.addEventListener("click", (e) => {
    if (e.target === menuLightbox) menuLightbox.classList.remove("active");
  });

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

// ==========================================================================
// Leaflet.js Map Initialization (Scarborough Location)
// ==========================================================================
function initLeafletMap() {
  // Passmore & Midland location coordinates in Scarborough
  const latitude = 43.8198;
  const longitude = -79.2898;

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
