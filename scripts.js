// 1. Validation du formulaire de contact
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Vérification des champs requis
        if (!name || !email || !message) {
            event.preventDefault(); // Empêche l'envoi du formulaire
            alert("Tous les champs doivent être remplis !");
        } else {
            alert("Merci de nous avoir contacté !");
        }
    });
});

// 2. Effet de défilement fluide pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop - 50, // Décalage pour le header
            behavior: 'smooth'
        });
    });
});

// 3. Affichage dynamique des images dans la galerie
document.addEventListener('DOMContentLoaded', function () {
    const loadMoreButton = document.getElementById('load-more');
    const gallery = document.querySelector('.gallery .image-grid');
    
    loadMoreButton.addEventListener('click', function () {
        // Ici on ajoute des images supplémentaires à la galerie
        for (let i = 1; i <= 3; i++) {
            const newImage = document.createElement('img');
            newImage.src = `https://via.placeholder.com/400x300?text=Image+${i}`;
            newImage.alt = `Image ${i}`;
            gallery.appendChild(newImage);
        }
    });
});
