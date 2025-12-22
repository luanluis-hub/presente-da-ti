document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    for (let i = 0; i < 50; i++) {
        let floco = document.createElement('i');
        floco.className = 'fas fa-snowflake';
        floco.style.left = Math.random() * window.innerWidth + 'px';
        floco.style.animationDuration = Math.random() * 5 + 5 + 's'; // Duração entre 5 e 10 segundos
        floco.style.animationDelay = Math.random() * 5 + 's';
        body.appendChild(floco);
    }
});