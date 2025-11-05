/**
 * Khidmitak - Main JavaScript
 * Core functionality and utilities
 */

// ===== THEME MANAGEMENT =====
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  // Update theme button icon
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.innerHTML = isDark ? 
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>' :
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
  }
}

// ===== LANGUAGE MANAGEMENT =====
function setLang(lang) {
  const html = document.documentElement;
  const isArabic = lang === 'ar';
  
  html.setAttribute('lang', lang);
  html.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
  
  localStorage.setItem('lang', lang);
  
  // Update content if translations exist
  updateLanguageContent(lang);
}

function updateLanguageContent(lang) {
  // Placeholder for translation system
  // In production, you would load translations from JSON files
  console.log(`Language set to: ${lang}`);
}

// ===== MOBILE MENU =====
function toggleDrawer() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) {
    drawer.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
  }
}

// ===== PRODUCT LOADING =====
async function loadFeaturedProducts() {
  const grid = document.getElementById('featuredProducts');
  if (!grid) return;

  try {
    // Show loading state
    grid.innerHTML = '<div class="loading-spinner"><div class="spinner"></div></div>';

    // Simulate API delay (remove in production with real API)
    await new Promise(resolve => setTimeout(resolve, 500));

    // Get featured products
    const featured = PRODUCTS_DATA.filter(p => p.featured).slice(0, 6);

    if (featured.length === 0) {
      grid.innerHTML = '<p style="text-align: center; color: var(--text-muted);">No featured products available.</p>';
      return;
    }

    // Render products
    grid.innerHTML = featured.map(product => createProductCard(product)).join('');

    // Add staggered animation
    const cards = grid.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.transition = 'all 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });

  } catch (error) {
    console.error('Error loading products:', error);
    grid.innerHTML = '<p style="text-align: center; color: var(--text-muted);">Failed to load products. Please refresh the page.</p>';
  }
}

// ===== CREATE PRODUCT CARD =====
function createProductCard(product) {
  const hasDiscount = product.comparePrice && product.comparePrice > product.price;
  
  return `
    <article class="product-card" onclick="window.location.href='product.html?id=${product.id}'">
      <div style="position: relative;">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        ${hasDiscount ? `
          <div style="position: absolute; top: 12px; right: 12px; background: var(--accent-primary); color: white; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 700;">
            SALE
          </div>
        ` : ''}
        ${!product.inStock ? `
          <div style="position: absolute; top: 12px; left: 12px; background: var(--charcoal); color: white; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 700;">
            OUT OF STOCK
          </div>
        ` : ''}
      </div>
      <div class="product-info">
        <div class="badge">${product.origin}</div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-meta">${product.artisan}</p>
        <div class="product-price">
          ${hasDiscount ? `<span style="text-decoration: line-through; color: var(--text-muted); font-size: 16px; margin-right: 8px;">${APP_CONFIG.currencySymbol}${product.comparePrice.toFixed(2)}</span>` : ''}
          ${APP_CONFIG.currencySymbol}${product.price.toFixed(2)}
        </div>
        <div class="product-actions">
          <button 
            class="btn-add-cart" 
            onclick="event.stopPropagation(); addToCart(${product.id})"
            ${!product.inStock ? 'disabled' : ''}
          >
            ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </article>
  `;
}

// ===== NEWSLETTER SUBSCRIPTION =====
function setupNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('newsletterEmail');
    if (!email || !email.value) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    try {
      // Disable button
      submitBtn.disabled = true;
      submitBtn.textContent = 'Subscribing...';

      // Simulate API call (replace with actual API in production)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // In production, send to your email service (Mailchimp, Klaviyo, etc.)
      console.log('Newsletter subscription:', email.value);

      // Show success message
      form.innerHTML = `
        <div style="text-align: center; color: white; padding: 20px;">
          <div style="font-size: 48px; margin-bottom: 12px;">✓</div>
          <h3 style="color: white; margin-bottom: 8px;">Thank you for subscribing!</h3>
          <p>You'll receive our first email soon.</p>
        </div>
      `;

    } catch (error) {
      console.error('Newsletter error:', error);
      alert('Subscription failed. Please try again.');
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
  const header = document.getElementById('header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
function initObservers() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
}

// ===== LAZY LOADING IMAGES =====
function initLazyLoading() {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    return;
  }

  // Fallback for browsers that don't support lazy loading
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// ===== URL PARAMETERS =====
function getUrlParameter(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function setUrlParameter(name, value) {
  const params = new URLSearchParams(window.location.search);
  params.set(name, value);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({}, '', newUrl);
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Ignore if just "#" or "#!"
      if (href === '#' || href === '#!') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===== INITIALIZE ON DOM LOAD =====
document.addEventListener('DOMContentLoaded', () => {
  // Restore saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }

  // Restore saved language
  const savedLang = localStorage.getItem('lang');
  if (savedLang) {
    setLang(savedLang);
  }

  // Initialize features
  loadFeaturedProducts();
  setupNewsletter();
  initScrollEffects();
  initObservers();
  initLazyLoading();
  initSmoothScroll();

  // Close mobile menu when clicking links
  document.querySelectorAll('.mobile-drawer a').forEach(link => {
    link.addEventListener('click', () => {
      toggleDrawer();
    });
  });

  // Add active class to current page link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a, .mobile-drawer a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});

// ===== PAGE VISIBILITY =====
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Page is hidden
    console.log('Page hidden');
  } else {
    // Page is visible
    console.log('Page visible');
  }
});

// ===== ANALYTICS HELPER =====
function trackEvent(category, action, label, value) {
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      'event_category': category,
      'event_label': label,
      'value': value
    });
  }
  
  // Facebook Pixel
  if (typeof fbq !== 'undefined') {
    fbq('track', action, {
      category: category,
      label: label,
      value: value
    });
  }
  
  console.log('Event tracked:', { category, action, label, value });
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error);
  // In production, send to error tracking service (Sentry, etc.)
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
  // In production, send to error tracking service
});

// ===== EXPORT FUNCTIONS FOR GLOBAL USE =====
window.khidmitak = {
  toggleTheme,
  setLang,
  toggleDrawer,
  trackEvent,
  getUrlParameter,
  setUrlParameter
};