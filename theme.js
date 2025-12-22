document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para aplicar o tema salvo
    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    };

    // Adiciona o evento de clique ao botão
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    applyTheme(); // Aplica o tema ao carregar a página

    // --- Lógica para criar presentes falsos espalhados ---
    const scatteredPresentsContainer = document.querySelector('.scattered-presents');
    if (scatteredPresentsContainer) {
        const numberOfPresents = 40; 
        const colors = ['wrong-present-1', 'wrong-present-2', 'wrong-present-3'];
        const generatedPresents = [];
        const presentSize = 40; // Tamanho aproximado em pixels para detecção de colisão
        let attempts = 0;

        for (let i = 0; i < numberOfPresents; i++) {
            let position;
            let isOverlapping;

            // Tenta encontrar uma posição que não sobreponha outros presentes
            do {
                position = {
                    top: Math.random() * (window.innerHeight - presentSize),
                    left: Math.random() * (window.innerWidth - presentSize)
                };
                isOverlapping = generatedPresents.some(p => {
                    const dx = p.left - position.left;
                    const dy = p.top - position.top;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    return distance < presentSize; // Verifica se está muito perto de outro presente
                });
                attempts++;
            } while (isOverlapping && attempts < 100); // Limita as tentativas para evitar loop infinito

            if (!isOverlapping) {
                generatedPresents.push(position);

                const present = document.createElement('i');
                present.className = 'fas fa-gift wrong-place-trigger';
                
                // Adiciona uma cor aleatória
                present.classList.add(colors[Math.floor(Math.random() * colors.length)]);

                // Define a posição em pixels
                present.style.top = `${position.top}px`;
                present.style.left = `${position.left}px`;
                present.style.transform = `scale(${Math.random() * 0.5 + 0.8})`; // Tamanho variado
                present.style.opacity = Math.random() * 0.5 + 0.5; // Opacidade variada

                scatteredPresentsContainer.appendChild(present);
            }
        }
    }

    // Lógica para a mensagem do lugar errado
    const wrongPlaceTriggers = document.querySelectorAll('.wrong-place-trigger');
    const wrongPlaceMessage = document.getElementById('wrong-place-message');
    const closeWrongPlaceMessage = document.getElementById('close-wrong-place-message');

    if (wrongPlaceTriggers.length > 0 && wrongPlaceMessage && closeWrongPlaceMessage) {
        wrongPlaceTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                wrongPlaceMessage.classList.add('show');
            });
        });

        closeWrongPlaceMessage.addEventListener('click', () => {
            wrongPlaceMessage.classList.remove('show');
        });
    }
});