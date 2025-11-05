/**
 * Khidmitak - Search Functionality
 * Handles product search with real-time results
 */

class ProductSearch {
  constructor() {
    this.searchInput = document.getElementById('searchInput');
    this.searchBtn = document.getElementById('searchBtn');
    this.searchResults = document.getElementById('searchResults');
    this.debounceTimer = null;
    this.minChars = 2;
    
    if (this.searchInput) {
      this.init();
    }
  }

  init() {
    // Input event for real-time search
    this.searchInput.addEventListener('input', (e) => {
      this.handleSearch(e.target.value);
    });

    // Focus and blur events
    this.searchInput.addEventListener('focus', () => {
      if (this.searchInput.value.length >= this.minChars) {
        this.showResults();
      }
    });

    this.searchInput.addEventListener('blur', () => {
      // Delay to allow clicking on results
      setTimeout(() => this.hideResults(), 200);
    });

    // Search button click
    if (this.searchBtn) {
      this.searchBtn.addEventListener('click', () => {
        this.performSearch(this.searchInput.value);
      });
    }

    // Enter key
    this.searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.performSearch(this.searchInput.value);
      }
    });

    // Click outside to close
    document.addEventListener('click', (e) => {
      if (!this.searchInput.contains(e.target) && !this.searchResults.contains(e.target)) {
        this.hideResults();
      }
    });
  }

  handleSearch(query) {
    // Clear previous timer
    clearTimeout(this.debounceTimer);

    // Hide results if query is too short
    if (query.length < this.minChars) {
      this.hideResults();
      return;
    }

    // Debounce search
    this.debounceTimer = setTimeout(() => {
      this.search(query);
    }, 300);
  }

  search(query) {
    const results = this.searchProducts(query);
    this.displayResults(results, query);
  }

  searchProducts(query) {
    const lowerQuery = query.toLowerCase().trim();
    
    return PRODUCTS_DATA.filter(product => {
      // Search in multiple fields
      const searchableText = [
        product.name,
        product.category,
        product.origin,
        product.artisan,
        product.description,
        ...product.tags
      ].join(' ').toLowerCase();

      return searchableText.includes(lowerQuery);
    }).slice(0, 6); // Limit to 6 results
  }

  displayResults(results, query) {
    if (results.length === 0) {
      this.searchResults.innerHTML = `
        <div class="search-result-item" style="text-align: center; color: var(--text-muted);">
          <p>No products found for "${query}"</p>
          <a href="shop.html" style="color: var(--accent-primary); margin-top: 8px; display: inline-block;">Browse all products</a>
        </div>
      `;
    } else {
      this.searchResults.innerHTML = results.map(product => `
        <a href="product.html?id=${product.id}" class="search-result-item">
          <img src="${product.image}" alt="${product.name}" class="search-result-image" />
          <div class="search-result-info" style="flex: 1;">
            <h4>${this.highlightQuery(product.name, query)}</h4>
            <p>${product.origin} • ${product.artisan}</p>
            <div class="search-result-price">${APP_CONFIG.currencySymbol}${product.price.toFixed(2)}</div>
          </div>
        </a>
      `).join('');
    }

    this.showResults();
  }

  highlightQuery(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<strong style="color: var(--accent-primary);">$1</strong>');
  }

  showResults() {
    if (this.searchResults) {
      this.searchResults.classList.add('active');
    }
  }

  hideResults() {
    if (this.searchResults) {
      this.searchResults.classList.remove('active');
    }
  }

  performSearch(query) {
    if (query.trim()) {
      // Redirect to shop page with search query
      window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
    }
  }

  clearSearch() {
    if (this.searchInput) {
      this.searchInput.value = '';
      this.hideResults();
    }
  }
}

// Initialize search when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ProductSearch();
});