/**
 * Animations Premium pour Oriental Aura
 */

// Animation des cartes produits au hover
function initProductCardAnimations() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const x = e.clientX - card.getBoundingClientRect().left;
            const y = e.clientY - card.getBoundingClientRect().top;
            
            const centerX = card.offsetWidth / 2;
            const centerY = card.offsetHeight / 2;
            
            const angleX = (y - centerY) / 10;
            const angleY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

// Parallax pour la bannière hero
function initParallaxEffect() {
    const heroBanner = document.querySelector('.hero-banner');
    
    if (heroBanner) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            heroBanner.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        });
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initProductCardAnimations();
    initParallaxEffect();
});
