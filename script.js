const extraMessages = document.getElementById('extra-messages');
const hiddenMessages = document.querySelectorAll('.hidden-message');
const btnText = document.getElementById('btn-text');

let messagesVisible = false;

function toggleMessages() {
    if (!messagesVisible) {
        // Mostrar mensajes con animación y corazones
        extraMessages.style.display = 'block';
        hiddenMessages.forEach((msg, i) => {
            setTimeout(() => {
                msg.classList.add('visible');
                createHearts(5);
            }, i * 600);
        });
        btnText.textContent = 'Ocultar mensajes';
    } else {
        // Ocultar mensajes
        hiddenMessages.forEach(msg => msg.classList.remove('visible'));
        setTimeout(() => {
            extraMessages.style.display = 'none';
        }, 700);
        btnText.textContent = '¡Descubre más!';
    }
    messagesVisible = !messagesVisible;
}

function showSpecialMessage() {
    alert("¡Te Quiero Mucho, Mi Magy! Eres lo más hermoso que me ha pasado ❤️");
    createHearts(50);
}

function createHearts(count = 5) {
    const container = document.getElementById('floatingHearts');
    if (!container) {
        console.error('No existe el contenedor #floatingHearts');
        return;
    }

    const colors = ['#ff0066', '#ff6699', '#ff99cc', '#ff3366'];

    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-animate');
        heart.textContent = '❤️';

        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px'; // 20-40px
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's'; // 2-5s

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Crear algunos corazones al cargar la página
window.onload = () => {
    createHearts(30);
};

// Crear corazones periódicamente
setInterval(() => {
    createHearts(10);
}, 3000);
