// Change Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#0c111b'; // Solid dark color
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'linear-gradient(180deg, rgba(20,27,41,1) 0%, rgba(20,27,41,0) 100%)';
        navbar.style.boxShadow = 'none';
    }
});