// Legacy entry point: load the new site navigation script when older pages reference script.js
if (!document.querySelector('script[src="/assets/js/site.js"]')) {
  const script = document.createElement('script');
  script.src = '/assets/js/site.js';
  script.defer = true;
  document.head.appendChild(script);
}
