class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute('title') || 'Product';
    const price = this.getAttribute('price') || '$00.00';
    const origin = this.getAttribute('origin') || 'Middle East';
    const artisan = this.getAttribute('artisan') || 'Local Artisan';
    const image = this.getAttribute('image') || 'http://static.photos/textiles/640x360/1';

    this.shadowRoot.innerHTML = `
      <style>
        .product-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }
        .product-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .product-info {
          padding: 1rem;
        }
        .product-title {
          font-size: 1rem;
          margin: 0 0 0.5rem 0;
          color: #333;
          font-weight: 500;
        }
        .product-origin {
          font-size: 0.75rem;
          color: #666;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .product-price {
          font-weight: 600;
          color: #333;
          margin-top: 0.5rem;
        }
        .product-artisan {
          font-size: 0.75rem;
          color: #888;
          margin-top: 0.25rem;
        }
        .origin-badge {
          display: inline-block;
          width: 16px;
          height: 16px;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23666"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>');
          background-size: contain;
        }
      </style>
      <a href="/product.html" class="product-card">
        <img src="${image}" alt="${title}" class="product-image">
        <div class="product-info">
          <h3 class="product-title">${title}</h3>
          <div class="product-origin"><span class="origin-badge"></span> ${origin}</div>
          <p class="product-artisan">By ${artisan}</p>
          <p class="product-price">${price}</p>
        </div>
      </a>
    `;
  }
}

customElements.define('product-card', ProductCard);