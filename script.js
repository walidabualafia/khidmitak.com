// Khidmitak — small interactions & i18n toggles

const qs = sel => document.querySelector(sel);
const qsa = sel => Array.from(document.querySelectorAll(sel));

document.addEventListener('DOMContentLoaded', () => {
  // Staggered reveal
  qsa('[data-animate]').forEach((el, i) => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = 'opacity .5s ease, transform .5s ease';
      el.style.transform = 'translateY(0)';
      el.style.opacity = 1;
    }, 120 + i * 60);
  });

  // Restore theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') document.documentElement.classList.add('dark');

  // Restore language/dir
  const savedLang = localStorage.getItem('lang');
  if (savedLang) setLang(savedLang);
});

// Mobile drawer
function toggleDrawer() {
  qs('.mobile-drawer').classList.toggle('open');
}

// Theme toggle
function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

// Language + RTL toggle
function setLang(lang) {
  const html = document.documentElement;
  const isAR = lang === 'ar';
  html.setAttribute('lang', lang);
  html.setAttribute('dir', isAR ? 'rtl' : 'ltr');
  document.body.style.fontFamily = isAR ? '"Noto Naskh Arabic", serif' : 'Inter, sans-serif';
  localStorage.setItem('lang', lang);
}

// Filter chip removal (demo only)
function removeChip(el) {
  const chip = el.closest('.chip');
  if (chip) chip.remove();
}

// Expose for inline handlers
window.toggleDrawer = toggleDrawer;
window.toggleTheme = toggleTheme;
window.setLang = setLang;
window.removeChip = removeChip;
