/**
 * Khidmitak - Configuration File
 * Contains all app settings and Shopify integration
 */

// Shopify Configuration
const SHOPIFY_CONFIG = {
  // Replace these with your actual Shopify credentials
  storeName: 'your-store-name', // e.g., 'khidmitak'
  storefrontAccessToken: 'YOUR_STOREFRONT_ACCESS_TOKEN',
  apiVersion: '2024-01',
  domain: 'your-store-name.myshopify.com'
};

// API Endpoints
const API_ENDPOINTS = {
  shopify: {
    graphql: `https://${SHOPIFY_CONFIG.domain}/api/${SHOPIFY_CONFIG.apiVersion}/graphql.json`,
    products: `/api/products`,
    checkout: `/api/checkout`
  }
};

// Product Data (Fallback for development)
const PRODUCTS_DATA = [
  {
    id: 1,
    name: 'Nabulsi Olive Soap',
    price: 12.00,
    comparePrice: null,
    image: 'https://images.unsplash.com/photo-1611152763598-6c6b0ccc0107?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1611152763598-6c6b0ccc0107?q=80&w=800',
      'https://images.unsplash.com/photo-1600857544200-242c8d50f32d?q=80&w=800'
    ],
    category: 'Body & Health',
    origin: 'Palestine',
    artisan: 'Fatima · Nablus',
    description: 'Traditional Nabulsi soap made with 100% virgin olive oil. Hand-crafted using ancient methods passed down through eight generations. Gentle on skin, naturally antibacterial, and completely biodegradable.',
    ingredients: ['Virgin Olive Oil', 'Water', 'Natural Lye'],
    weight: '200g',
    inStock: true,
    featured: true,
    tags: ['soap', 'olive oil', 'natural', 'palestine', 'nablus'],
    sku: 'KH-SOAP-NAB-001'
  },
  {
    id: 2,
    name: 'Hebron Ceramic Bowl',
    price: 28.00,
    comparePrice: 35.00,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=800',
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800'
    ],
    category: 'Home',
    origin: 'Palestine',
    artisan: 'Youssef · Hebron',
    description: 'Hand-painted ceramic bowl featuring traditional Hebron motifs. Each piece is wheel-thrown and decorated with natural mineral glazes. Microwave and dishwasher safe.',
    ingredients: ['Local Clay', 'Natural Mineral Glazes', 'Hand-painted'],
    dimensions: '20cm diameter x 8cm height',
    inStock: true,
    featured: true,
    tags: ['ceramics', 'bowl', 'hebron', 'palestine', 'hand-painted'],
    sku: 'KH-CER-HEB-001'
  },
  {
    id: 3,
    name: 'Damascus Silk Scarf',
    price: 45.00,
    comparePrice: null,
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800',
      'https://images.unsplash.com/photo-1604335399108-97a87b98d1f8?q=80&w=800'
    ],
    category: 'Textiles',
    origin: 'Syria',
    artisan: 'Layla · Damascus',
    description: 'Luxurious silk scarf featuring traditional Tatreez embroidery. Hand-stitched patterns tell stories of Syrian heritage. Perfect as a fashion accessory or decorative piece.',
    materials: ['100% Silk', 'Cotton Thread', 'Natural Dyes'],
    dimensions: '180cm x 70cm',
    inStock: true,
    featured: true,
    tags: ['textiles', 'scarf', 'silk', 'embroidery', 'damascus', 'syria'],
    sku: 'KH-TEX-DAM-001'
  },
  {
    id: 4,
    name: 'Olive Wood Prayer Beads',
    price: 22.00,
    comparePrice: null,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800'
    ],
    category: 'Faith',
    origin: 'Jordan',
    artisan: 'Ahmad · Bethlehem',
    description: 'Hand-carved prayer beads (Tasbih) made from sustainable olive wood. Each bead is individually shaped and polished. Includes 33 beads for traditional dhikr practice.',
    materials: ['Olive Wood', 'Natural Finish'],
    beadCount: 33,
    inStock: true,
    featured: true,
    tags: ['prayer beads', 'tasbih', 'olive wood', 'faith', 'jordan'],
    sku: 'KH-FAI-BET-001'
  },
  {
    id: 5,
    name: 'Moroccan Tagine Pot',
    price: 65.00,
    comparePrice: 80.00,
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800'
    ],
    category: 'Home',
    origin: 'Morocco',
    artisan: 'Fatima · Fez',
    description: 'Authentic Moroccan tagine pot, hand-crafted in Fez. The conical lid creates a unique steam circulation for tender, flavorful dishes. Suitable for stovetop and oven use.',
    materials: ['Terracotta Clay', 'Lead-Free Glaze'],
    dimensions: '30cm diameter',
    capacity: '3 liters',
    inStock: true,
    featured: false,
    tags: ['tagine', 'cookware', 'morocco', 'fez', 'ceramic'],
    sku: 'KH-HOM-FEZ-001'
  },
  {
    id: 6,
    name: 'Aleppo Laurel Soap',
    price: 15.00,
    comparePrice: null,
    image: 'https://images.unsplash.com/photo-1600857544200-242c8d50f32d?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1600857544200-242c8d50f32d?q=80&w=800'
    ],
    category: 'Body & Health',
    origin: 'Syria',
    artisan: 'Khalil · Aleppo',
    description: 'Traditional Aleppo soap with 40% laurel berry oil. Aged for 9 months for optimal quality. Excellent for sensitive skin, with natural antibacterial properties.',
    ingredients: ['Olive Oil', 'Laurel Berry Oil 40%', 'Water', 'Natural Lye'],
    weight: '200g',
    inStock: true,
    featured: true,
    tags: ['soap', 'aleppo', 'laurel', 'syria', 'natural'],
    sku: 'KH-SOAP-ALE-001'
  },
  {
    id: 7,
    name: 'Bethlehem Olive Wood Cross',
    price: 18.00,
    comparePrice: null,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800'
    ],
    category: 'Faith',
    origin: 'Palestine',
    artisan: 'Youssef · Bethlehem',
    description: 'Hand-carved olive wood cross from Bethlehem. Each piece features unique wood grain patterns. Perfect for personal devotion or as a meaningful gift.',
    materials: ['Olive Wood', 'Natural Oil Finish'],
    height: '15cm',
    inStock: true,
    featured: false,
    tags: ['cross', 'olive wood', 'bethlehem', 'faith', 'christian'],
    sku: 'KH-FAI-BET-002'
  },
  {
    id: 8,
    name: 'Syrian Cotton Tablecloth',
    price: 38.00,
    comparePrice: null,
    image: 'https://images.unsplash.com/photo-1604335399108-97a87b98d1f8?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1604335399108-97a87b98d1f8?q=80&w=800'
    ],
    category: 'Textiles',
    origin: 'Syria',
    artisan: 'Layla · Damascus',
    description: 'Hand-woven cotton tablecloth with traditional Damascus patterns. Pre-washed for softness. Machine washable.',
    materials: ['100% Cotton', 'Natural Dyes'],
    dimensions: '150cm x 200cm',
    inStock: true,
    featured: false,
    tags: ['tablecloth', 'cotton', 'damascus', 'syria', 'textiles'],
    sku: 'KH-TEX-DAM-002'
  },
  {
    id: 9,
    name: 'Moroccan Mint Tea Set',
    price: 52.00,
    comparePrice: null,
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800'
    ],
    category: 'Home',
    origin: 'Morocco',
    artisan: 'Ahmed · Marrakech',
    description: 'Traditional Moroccan tea set including silver-plated teapot and six decorated glasses. Hand-engraved with traditional motifs.',
    materials: ['Silver-Plated Brass', 'Hand-Painted Glass'],
    includes: '1 teapot, 6 glasses, serving tray',
    inStock: true,
    featured: false,
    tags: ['tea set', 'morocco', 'marrakech', 'home', 'entertaining'],
    sku: 'KH-HOM-MAR-001'
  },
  {
    id: 10,
    name: 'Egyptian Cotton Prayer Mat',
    price: 48.00,
    comparePrice: null,
    image: 'https://images.unsplash.com/photo-1604335399108-97a87b98d1f8?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1604335399108-97a87b98d1f8?q=80&w=800'
    ],
    category: 'Faith',
    origin: 'Egypt',
    artisan: 'Sara · Cairo',
    description: 'Luxurious prayer mat woven from premium Egyptian cotton. Features traditional Islamic geometric patterns. Includes carrying case.',
    materials: ['Extra-Long Staple Egyptian Cotton', 'Natural Dyes'],
    dimensions: '110cm x 70cm',
    inStock: true,
    featured: false,
    tags: ['prayer mat', 'egypt', 'cotton', 'faith', 'islamic'],
    sku: 'KH-FAI-CAI-001'
  },
  {
    id: 11,
    name: 'Dead Sea Salt Scrub',
    price: 24.00,
    comparePrice: null,
    image: 'https://images.unsplash.com/photo-1600857544200-242c8d50f32d?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1600857544200-242c8d50f32d?q=80&w=800'
    ],
    category: 'Body & Health',
    origin: 'Jordan',
    artisan: 'Fatima · Amman',
    description: 'Exfoliating body scrub made with authentic Dead Sea salt and olive oil. Rich in minerals for healthy, glowing skin.',
    ingredients: ['Dead Sea Salt', 'Olive Oil', 'Essential Oils'],
    volume: '250ml',
    inStock: true,
    featured: false,
    tags: ['scrub', 'dead sea', 'jordan', 'skincare', 'natural'],
    sku: 'KH-BOD-AMM-001'
  },
  {
    id: 12,
    name: 'Hebron Glass Vase',
    price: 42.00,
    comparePrice: null,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=800'
    ],
    category: 'Home',
    origin: 'Palestine',
    artisan: 'Youssef · Hebron',
    description: 'Hand-blown glass vase with traditional Hebron blue coloring. Each piece is unique. Perfect for fresh or dried flowers.',
    materials: ['Recycled Glass', 'Traditional Cobalt Blue'],
    height: '25cm',
    inStock: true,
    featured: false,
    tags: ['vase', 'glass', 'hebron', 'palestine', 'home decor'],
    sku: 'KH-HOM-HEB-001'
  },
  {
    id: 13,
    name: 'Berber Wool Cushion',
    price: 55.00,
    comparePrice: null,
    image: 'https://images.unsplash.com/photo-1581783661528-8de0a2bb8b3d?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1581783661528-8de0a2bb8b3d?q=80&w=800'
    ],
    category: 'Textiles',
    origin: 'Morocco',
    artisan: 'Aisha · Fez',
    description: 'Hand-woven Berber cushion with traditional geometric patterns. Made from Atlas Mountain sheep wool with natural plant dyes.',
    materials: ['100% Sheep Wool', 'Natural Plant Dyes', 'Cotton Backing'],
    dimensions: '50cm x 50cm',
    inStock: true,
    featured: false,
    tags: ['cushion', 'berber', 'wool', 'morocco', 'textiles'],
    sku: 'KH-TEX-FEZ-001'
  },
  {
    id: 14,
    name: 'Olive Oil Soap Gift Set',
    price: 35.00,
    comparePrice: 42.00,
    image: 'https://images.unsplash.com/photo-1611152763598-6c6b0ccc0107?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1611152763598-6c6b0ccc0107?q=80&w=800'
    ],
    category: 'Body & Health',
    origin: 'Palestine',
    artisan: 'Fatima · Nablus',
    description: 'Curated gift set featuring three premium olive oil soaps: Nabulsi, Aleppo Laurel, and Rose-scented. Beautifully packaged in eco-friendly box.',
    includes: '3 soaps (200g each)',
    inStock: true,
    featured: true,
    tags: ['gift set', 'soap', 'olive oil', 'palestine', 'natural'],
    sku: 'KH-GIF-NAB-001'
  },
  {
    id: 15,
    name: 'Damascus Steel Incense Burner',
    price: 72.00,
    comparePrice: null,
    image: 'https://images.unsplash.com/photo-1581783661528-8de0a2bb8b3d?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1581783661528-8de0a2bb8b3d?q=80&w=800'
    ],
    category: 'Faith',
    origin: 'Syria',
    artisan: 'Khalil · Damascus',
    description: 'Traditional mabkhara (incense burner) crafted from Damascus steel with intricate engravings. Perfect for burning bakhoor and oud.',
    materials: ['Damascus Steel', 'Hand-Engraved'],
    height: '12cm',
    inStock: true,
    featured: false,
    tags: ['incense burner', 'mabkhara', 'damascus', 'syria', 'faith'],
    sku: 'KH-FAI-DAM-001'
  }
];

// App Settings
const APP_CONFIG = {
  siteName: 'Khidmitak',
  currency: 'GBP',
  currencySymbol: '£',
  locale: 'en-GB',
  defaultLanguage: 'en',
  freeShippingThreshold: 50,
  
  // Feature Flags
  features: {
    shopifyIntegration: false, // Set to true when Shopify is configured
    newsletter: true,
    wishlist: true,
    reviews: false,
    giftWrap: true
  },
  
  // Shipping
  shipping: {
    freeThreshold: 50,
    standardRate: 4.99,
    expressRate: 9.99,
    countries: ['GB', 'IE', 'FR', 'DE', 'NL', 'BE', 'ES', 'IT']
  },
  
  // Tax
  tax: {
    rate: 0.20, // 20% VAT
    included: true
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SHOPIFY_CONFIG,
    API_ENDPOINTS,
    PRODUCTS_DATA,
    APP_CONFIG
  };
}