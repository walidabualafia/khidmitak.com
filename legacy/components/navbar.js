class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .logo {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          font-size: 1.5rem;
          background: linear-gradient(to right, #6B8E23, #8F9779);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 0.5px;
        }
ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        a {
          color: #4B5563;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        a:hover {
          color: #3B82F6;
        }
        .nav-button {
          background: #3B82F6;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
        }
        .nav-button:hover {
          background: #2563EB;
          color: white;
        }
        @media (max-width: 768px) {
          ul {
            display: none;
          }
          .mobile-menu-button {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">Blank Canvas</a>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/features.html">Features</a></li>
          <li><a href="/about.html">About</a></li>
          <li><a href="/contact.html">Contact</a></li>
          <li><a href="/login.html" class="nav-button">Sign In</a></li>
        </ul>
        <button class="mobile-menu-button hidden">
          <i data-feather="menu"></i>
        </button>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);