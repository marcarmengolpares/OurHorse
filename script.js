document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example of a simple alert when a button is clicked
    const registerBtn = document.querySelector('.register-btn');
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            alert('¡Registrarse aún no está implementado! Este es un sitio de ejemplo.');
        });
    }

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert(`Mensaje enviado por ${name} (${email}). Contenido: "${message}"`);
                contactForm.reset(); // Clear the form
            } else {
                alert('Por favor, rellena todos los campos del formulario de contacto.');
            }
        });
    }

    // You can add more JavaScript here for:
    // - Mobile navigation toggle
    // - Interactive elements (if any)
    // - Dynamic content loading (more advanced)
});