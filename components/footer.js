class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1F2937;
          color: white;
          padding: 4rem 2rem;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          font-weight: 700;
          font-size: 1.5rem;
          background: linear-gradient(to right, #3B82F6, #10B981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
          display: inline-block;
        }
        .footer-links h3 {
          font-weight: 600;
          margin-bottom: 1rem;
          color: #E5E7EB;
        }
        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        .footer-links a {
          color: #9CA3AF;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: #3B82F6;
        }
        .copyright {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #374151;
          text-align: center;
          color: #9CA3AF;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          color: #9CA3AF;
          transition: color 0.2s;
        }
        .social-links a:hover {
          color: #3B82F6;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div>
            <div class="footer-logo">Blank Canvas</div>
            <p class="text-gray-400">Beautiful websites start with a blank canvas.</p>
            <div class="social-links">
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="github"></i></a>
            </div>
          </div>
          <div class="footer-links">
            <h3>Product</h3>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Guides</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; 2024 Blank Canvas Studio. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);