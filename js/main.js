/**
 * ORIENTAL AURA - Scripts Principaux
 * Fonctionnalités clés pour un site de beauté premium
 */

document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // MENU MOBILE
    // ======================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const htmlBody = document.body;

    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
        htmlBody.classList.toggle('no-scroll');
    });

    // ======================
    // DROPDOWNS DESKTOP
    // ======================
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.querySelector('.dropdown-menu').style.opacity = '1';
            dropdown.querySelector('.dropdown-menu').style.visibility = 'visible';
            dropdown.querySelector('.dropdown-menu').style.marginTop = '10px';
        });

        dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.dropdown-menu').style.opacity = '0';
            dropdown.querySelector('.dropdown-menu').style.visibility = 'hidden';
            dropdown.querySelector('.dropdown-menu').style.marginTop = '20px';
        });
    });

    // ======================
    // PANIER (Fonctionnalité simplifiée)
    // ======================
    const addToCartBtns = document.querySelectorAll('.btn-add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let cartItems = [];

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = this.getAttribute('data-product-id');
            
            // Animation feedback
            this.innerHTML = '<i class="fas fa-check"></i> Ajouté';
            this.classList.add('success');
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-shopping-bag"></i> Ajouter';
                this.classList.remove('success');
            }, 2000);

            // Mise à jour du panier
            cartItems.push(productId);
            updateCartCount();
        });
    });

    function updateCartCount() {
        cartCount.textContent = cartItems.length;
        cartCount.classList.add('pulse');
        
        setTimeout(() => {
            cartCount.classList.remove('pulse');
        }, 500);
    }

    // ======================
    // ANIMATIONS AU SCROLL
    // ======================
    const animateOnScroll = () => {
        const animatableElements = document.querySelectorAll('.product-card, .value-card, .ritual-step');
        
        animatableElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };

    // Initialisation
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // ======================
    // NEWSLETTER
    // ======================
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            // Validation basique
            if (emailInput.value.includes('@')) {
                this.innerHTML = '<p class="success-message">Merci ! Votre inscription est confirmée.</p>';
                setTimeout(() => {
                    this.reset();
                    this.querySelector('.success-message').remove();
                }, 3000);
            }
        });
    }

    // ======================
    // LIGHTBOX PRODUIT
    // ======================
    const productImages = document.querySelectorAll('.product-image img');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close-lightbox">&times;</span>
            <img src="" alt="Vue agrandie">
        </div>
    `;
    document.body.appendChild(lightbox);

    productImages.forEach(img => {
        img.addEventListener('click', () => {
            const imgSrc = img.getAttribute('src');
            lightbox.querySelector('img').setAttribute('src', imgSrc);
            lightbox.style.display = 'flex';
            htmlBody.classList.add('no-scroll');
        });
    });

    lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
        lightbox.style.display = 'none';
        htmlBody.classList.remove('no-scroll');
    });
});
