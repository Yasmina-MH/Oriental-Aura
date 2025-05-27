document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Bloque l'envoi par défaut

        // Récupération des valeurs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validation
        if (!name || !validateEmail(email) || !message) {
            alert("Veuillez remplir tous les champs correctement !");
            return; // Arrête la fonction si invalide
        }

        // Si tout est valide
        alert("Merci pour votre message !");
        form.reset(); // Réinitialise le formulaire
    });
});

// Fonction de validation d'email (regex)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
