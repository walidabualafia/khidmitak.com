/**
 * Khidmitak - Shopping Cart Management
 * Handles cart operations, storage, and UI updates
 */

class ShoppingCart {
  constructor() {
    this.items = this.loadCart();
    this.currency = APP_CONFIG.currencySymbol;
    this.init();
  }

  init() {
    this.updateCartCount();
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Cart overlay click
    const overlay = document.getElementById('cartOverlay');
    if (overlay) {
      overlay.addEventListener('click', () => this.closeCart());
    }

    // Close cart on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isCartOpen()) {
        this.closeCart();
      }
    });
  }

  // Load cart from localStorage
  loadCart() {
    try {
      const saved = localStorage.getItem('khidmitak_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error loading cart:', error);
      return [];
    }
  }

  // Save cart to localStorage
  saveCart() {
    try {
      localStorage.setItem('khidmitak_cart', JSON.stringify(this.items));
      this.updateCartCount();
      this.renderCart();
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  }

  // Add item to cart
  addItem(product, quantity = 1) {
    const existingItem = this.items.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        origin: product.origin,
        quantity: quantity,
        sku: product.sku
      });
    }

    this.saveCart();
    this.showNotification(`${product.name} added to cart!`);
    
    // Open cart sidebar
    this.openCart();
  }

  // Remove item from cart
  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.saveCart();
  }

  // Update item quantity
  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    
    if (item) {
      if (quantity <= 0) {
        this.removeItem(productId);
      } else {
        item.quantity = quantity;
        this.saveCart();
      }
    }
  }

  // Get cart total
  getTotal() {
    return this.items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  // Get item count
  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  // Clear cart
  clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
      this.items = [];
      this.saveCart();
    }
  }

  // Update cart count badge
  updateCartCount() {
    const badge = document.getElementById('cartCount');
    if (badge) {
      const count = this.getItemCount();
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  }

  // Render cart UI
  renderCart() {
    const cartBody = document.getElementById('cartBody');
    const cartFooter = document.getElementById('cartFooter');

    if (!cartBody || !cartFooter) return;

    if (this.items.length === 0) {
      cartBody.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Add some beautiful handcrafted items!</p>
          <a href="shop.html" class="btn btn-primary" style="margin-top: 20px;">Shop Now</a>
        </div>
      `;
      cartFooter.innerHTML = '';
      return;
    }

    // Render cart items
    cartBody.innerHTML = this.items.map(item => `
      <div class="cart-item" data-product-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">${this.currency}${item.price.toFixed(2)}</div>
          <div class="cart-item-quantity">
            <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})" aria-label="Decrease quantity">−</button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="cart.removeItem(${item.id})" aria-label="Remove item">×</button>
      </div>
    `).join('');

    // Render cart footer
    const subtotal = this.getTotal();
    const shipping = subtotal >= APP_CONFIG.shipping.freeThreshold ? 0 : APP_CONFIG.shipping.standardRate;
    const total = subtotal + shipping;

    cartFooter.innerHTML = `
      <div style="margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span>Subtotal:</span>
          <span>${this.currency}${subtotal.toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span>Shipping:</span>
          <span>${shipping === 0 ? 'FREE' : this.currency + shipping.toFixed(2)}</span>
        </div>
        ${subtotal < APP_CONFIG.shipping.freeThreshold ? `
          <div style="font-size: 13px; color: var(--text-muted); margin-top: 8px;">
            Add ${this.currency}${(APP_CONFIG.shipping.freeThreshold - subtotal).toFixed(2)} more for free shipping!
          </div>
        ` : ''}
      </div>
      <div class="cart-total">
        <span>Total:</span>
        <span class="cart-total-price">${this.currency}${total.toFixed(2)}</span>
      </div>
      <button class="cart-checkout-btn" onclick="cart.checkout()">
        Proceed to Checkout
      </button>
      <button class="btn btn-secondary" style="width: 100%; margin-top: 12px;" onclick="cart.closeCart()">
        Continue Shopping
      </button>
    `;
  }

  // Open cart sidebar
  openCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    
    if (sidebar && overlay) {
      sidebar.classList.add('open');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      this.renderCart();
    }
  }

  // Close cart sidebar
  closeCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    
    if (sidebar && overlay) {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Check if cart is open
  isCartOpen() {
    const sidebar = document.getElementById('cartSidebar');
    return sidebar && sidebar.classList.contains('open');
  }

  // Toggle cart
  toggleCart() {
    if (this.isCartOpen()) {
      this.closeCart();
    } else {
      this.openCart();
    }
  }

  // Proceed to checkout
  checkout() {
    if (this.items.length === 0) {
      this.showNotification('Your cart is empty!', 'error');
      return;
    }

    // If Shopify integration is enabled
    if (APP_CONFIG.features.shopifyIntegration) {
      this.shopifyCheckout();
    } else {
      // Fallback: Show checkout page or form
      window.location.href = 'checkout.html';
    }
  }

  // Shopify checkout integration
  async shopifyCheckout() {
    try {
      const checkoutData = {
        lineItems: this.items.map(item => ({
          variantId: item.variantId || `gid://shopify/ProductVariant/${item.id}`,
          quantity: item.quantity
        }))
      };

      // Call Shopify Storefront API to create checkout
      const response = await fetch(API_ENDPOINTS.shopify.graphql, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': SHOPIFY_CONFIG.storefrontAccessToken
        },
        body: JSON.stringify({
          query: `
            mutation checkoutCreate($input: CheckoutCreateInput!) {
              checkoutCreate(input: $input) {
                checkout {
                  id
                  webUrl
                }
                checkoutUserErrors {
                  message
                }
              }
            }
          `,
          variables: {
            input: checkoutData
          }
        })
      });

      const result = await response.json();

      if (result.data.checkoutCreate.checkout) {
        // Redirect to Shopify checkout
        window.location.href = result.data.checkoutCreate.checkout.webUrl;
      } else {
        throw new Error('Failed to create checkout');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      this.showNotification('Checkout failed. Please try again.', 'error');
    }
  }

  // Show notification
  showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: ${type === 'success' ? 'var(--accent-primary)' : '#DC2626'};
      color: white;
      padding: 16px 24px;
      border-radius: 12px;
      box-shadow: var(--shadow-lg);
      z-index: 9999;
      animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s;
      font-weight: 500;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
}

// Initialize cart
const cart = new ShoppingCart();

// Global functions for inline onclick handlers
function toggleCart() {
  cart.toggleCart();
}

function addToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (product) {
    cart.addItem(product);
  }
}

// Add keyframe animations for notifications
if (!document.getElementById('notification-styles')) {
  const style = document.createElement('style');
  style.id = 'notification-styles';
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}