// Main application script
document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on page load
    const animatedElements = document.querySelectorAll('.animate-fade-in');
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
    
    console.log('Blank Canvas Studio loaded');
});

// Theme toggle functionality
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', 
        document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}