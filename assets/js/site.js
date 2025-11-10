document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.header-tools .menu');
  const nav = document.querySelector('.main-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const open = nav.style.display === 'flex';
      nav.style.display = open ? 'none' : 'flex';
    });
  }
});
