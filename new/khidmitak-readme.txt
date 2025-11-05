# Khidmitak - Production-Ready E-commerce Platform

> Authentic handcrafted goods from the Middle East. Crafted in the Levant, Gulf & North Africa. Loved Worldwide.

## 📋 Table of Contents

- [Features](#features)
- [File Structure](#file-structure)
- [Quick Start](#quick-start)
- [Deployment](#deployment)
- [Shopify Integration](#shopify-integration)
- [Configuration](#configuration)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [SEO](#seo)
- [Accessibility](#accessibility)

## ✨ Features

### Core Features
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Dark Mode** - Automatic theme switching with localStorage persistence
- ✅ **Bilingual Support** - English/Arabic with full RTL support
- ✅ **Shopping Cart** - Full cart management with localStorage
- ✅ **Product Search** - Real-time search with autocomplete
- ✅ **Product Filtering** - Category, origin, price range filters
- ✅ **Dynamic Product Loading** - Lazy loading and pagination ready
- ✅ **Newsletter Signup** - Email capture with validation
- ✅ **Shopify Ready** - Integration code included

### Design Features
- 🎨 **Authentic Middle Eastern Color Palette** - Clay, sand, olive, blue
- 🎨 **Islamic Geometric Patterns** - Background decorative elements
- 🎨 **Modern Minimalist UI** - Clean, professional design
- 🎨 **Smooth Animations** - CSS transitions and keyframes
- 🎨 **Custom Typography** - Google Fonts (Inter, Cormorant Garamond, Noto Naskh Arabic)

### Technical Features
- ⚡ **Vanilla JavaScript** - No framework dependencies
- ⚡ **Modern CSS** - CSS Variables, Grid, Flexbox
- ⚡ **SEO Optimized** - Meta tags, semantic HTML, structured data
- ⚡ **Accessible** - WCAG 2.1 AA compliant, keyboard navigation
- ⚡ **Performance** - Lazy loading, optimized assets
- ⚡ **PWA Ready** - Add manifest.json for installable app

## 📁 File Structure

```
khidmitak/
├── index.html              # Homepage
├── shop.html               # Product listing with filters
├── artisans.html           # Artisan profiles
├── journal.html            # Heritage stories (clickable profiles)
├── about.html              # Company story
├── product.html            # Single product page (create this)
├── checkout.html           # Checkout page (create this)
├── css/
│   └── styles.css          # Main stylesheet (all CSS in one file)
├── js/
│   ├── config.js           # Configuration & product data
│   ├── cart.js             # Shopping cart logic
│   ├── search.js           # Search functionality
│   └── main.js             # Core JavaScript
├── images/                 # Your product images
│   ├── products/
│   ├── artisans/
│   └── og-image.jpg        # Social media preview (1200x630px)
├── favicon.png             # Site favicon (32x32px minimum)
└── README.md               # This file
```

## 🚀 Quick Start

### 1. Download/Clone Files

Place all files in your project folder with the structure shown above.

### 2. Test Locally

#### Option A: Using Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Option B: Using Node.js
```bash
npx serve
```

#### Option C: Using VS Code
Install "Live Server" extension and click "Go Live"

### 3. Open in Browser

Visit `http://localhost:8000` (or appropriate port)

## 🌐 Deployment

### Deploy to Netlify (Recommended - Free)

1. **Create account** at [netlify.com](https://netlify.com)

2. **Drag & drop your folder** to Netlify dashboard

3. **Configure settings:**
   - Build command: (leave empty)
   - Publish directory: `/`
   - Site name: your-site-name

4. **Done!** Your site is live at `your-site-name.netlify.app`

#### Custom Domain on Netlify
- Go to Domain settings
- Add custom domain
- Update DNS records at your registrar

### Deploy to Vercel (Alternative - Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd your-project-folder
vercel
```

### Deploy to GitHub Pages (Free)

1. Create GitHub repository
2. Push your code
3. Go to Settings → Pages
4. Select branch → Save
5. Site live at `username.github.io/repo-name`

### Deploy to Traditional Hosting (cPanel, FTP)

1. Connect via FTP (FileZilla, Cyberduck)
2. Upload all files to `public_html` or `www` folder
3. Ensure file permissions are correct (644 for files, 755 for folders)
4. Visit your domain

## 🛒 Shopify Integration

### Setup Shopify Store

1. **Create Shopify account** at [shopify.com](https://shopify.com)
   - Start with Basic plan ($29/month)

2. **Add products** in Shopify Admin
   - Upload product images
   - Set prices, SKUs, inventory
   - Write descriptions

3. **Get Storefront API credentials:**
   - Shopify Admin → Apps → Develop apps
   - Create custom app
   - Enable Storefront API
   - Copy Storefront Access Token

### Configure Integration

Open `js/config.js`:

```javascript
const SHOPIFY_CONFIG = {
  storeName: 'your-store-name',  // e.g., 'khidmitak'
  storefrontAccessToken: 'YOUR_TOKEN_HERE',
  apiVersion: '2024-01',
  domain: 'your-store-name.myshopify.com'
};

const APP_CONFIG = {
  features: {
    shopifyIntegration: true,  // Change to true
    // ... other settings
  }
};
```

### Enable Checkout

When `shopifyIntegration` is `true`, clicking "Proceed to Checkout" will:
1. Create Shopify checkout via Storefront API
2. Redirect to Shopify hosted checkout
3. Handle payment and order confirmation

### Sync Products (Optional)

Replace `PRODUCTS_DATA` in `config.js` with Shopify products:

```javascript
// Fetch products from Shopify
async function loadShopifyProducts() {
  const response = await fetch(API_ENDPOINTS.shopify.graphql, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_CONFIG.storefrontAccessToken
    },
    body: JSON.stringify({
      query: `
        {
          products(first: 50) {
            edges {
              node {
                id
                title
                description
                priceRange {
                  minVariantPrice {
                    amount
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `
    })
  });
  
  const data = await response.json();
  return data.data.products.edges.map(edge => edge.node);
}
```

## ⚙️ Configuration

### Site Settings (`js/config.js`)

```javascript
const APP_CONFIG = {
  siteName: 'Khidmitak',
  currency: 'GBP',
  currencySymbol: '£',
  locale: 'en-GB',
  freeShippingThreshold: 50,  // Free shipping over £50
  
  shipping: {
    standardRate: 4.99,
    expressRate: 9.99,
    countries: ['GB', 'IE', 'FR', 'DE', ...]  // Add/remove countries
  },
  
  tax: {
    rate: 0.20,  // 20% VAT
    included: true
  }
};
```

### Product Data

Edit products in `js/config.js`:

```javascript
const PRODUCTS_DATA = [
  {
    id: 1,
    name: 'Product Name',
    price: 12.00,
    comparePrice: null,  // Or set discount price
    image: 'https://...',
    category: 'Body & Health',
    origin: 'Palestine',
    artisan: 'Artisan Name',
    description: 'Full description...',
    inStock: true,
    featured: true,
    tags: ['tag1', 'tag2'],
    sku: 'PRODUCT-SKU'
  },
  // Add more products...
];
```

### Colors & Branding

Edit CSS variables in `css/styles.css`:

```css
:root {
  --clay-terracotta: #C1440E;   /* Primary accent */
  --blue-aegean: #2E6F95;       /* Secondary accent */
  --olive-deep: #556B2F;        /* Tertiary accent */
  /* Customize all colors here */
}
```

## 🎨 Customization

### Add Logo

Replace brand text with logo in `index.html`:

```html
<a class="brand" href="index.html">
  <img src="images/logo.svg" alt="Khidmitak" width="180" height="40" />
</a>
```

### Add Product Pages

Create `product.html` for single product view:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Same head as other pages -->
</head>
<body>
  <!-- Same header as other pages -->
  
  <main class="product-page">
    <!-- Product details will be loaded via JavaScript -->
    <div id="productDetails"></div>
  </main>
  
  <!-- Same footer as other pages -->
  
  <script>
    // Load product by ID from URL
    const productId = new URLSearchParams(window.location.search).get('id');
    const product = PRODUCTS_DATA.find(p => p.id == productId);
    // Render product details
  </script>
</body>
</html>
```

### Add More Pages

Follow the same structure as existing pages:
- Copy `index.html` structure
- Update content
- Add navigation links
- Include same scripts

### Analytics

Add Google Analytics in `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Add Facebook Pixel:

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🌍 Browser Support

- ✅ Chrome/Edge (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ iOS Safari (last 2 versions)
- ✅ Samsung Internet
- ⚠️ IE 11 (basic support, no CSS Grid)

## ⚡ Performance

### Current Optimization
- Lazy loading images
- CSS minification ready
- JavaScript code splitting ready
- No unnecessary dependencies

### Further Optimization

1. **Minify CSS:**
```bash
npm install -g clean-css-cli
cleancss -o styles.min.css styles.css
```

2. **Minify JavaScript:**
```bash
npm install -g terser
terser main.js -o main.min.js
```

3. **Optimize Images:**
   - Use WebP format
   - Compress with TinyPNG or Squoosh
   - Resize to appropriate dimensions

4. **Enable CDN:**
   - Use Cloudflare (free)
   - Or Netlify built-in CDN

## 🔍 SEO

### Included
- ✅ Semantic HTML5
- ✅ Meta descriptions
- ✅ Open Graph tags
- ✅ Alt text on images
- ✅ Descriptive URLs

### Add Sitemap

Create `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/shop.html</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Add all pages -->
</urlset>
```

### Add robots.txt

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### Submit to Search Engines
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

## ♿ Accessibility

### Included Features
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Color contrast WCAG AA
- ✅ Screen reader friendly
- ✅ Reduced motion support

### Test Accessibility
- [WAVE Tool](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- Screen reader testing (NVDA, VoiceOver)

## 📧 Support & Contact

For questions or issues:
- Email: hello@khidmitak.com
- Documentation: [Your URL]
- GitHub Issues: [Your repo]

## 📄 License

Copyright © 2024 Khidmitak. All rights reserved.

---

**Ready to launch!** 🚀

Follow the deployment steps above and your site will be live in minutes.