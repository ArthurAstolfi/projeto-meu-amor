document.addEventListener("DOMContentLoaded", function () {
    // Configuração do carrossel
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    const totalImages = images.length;
    let index = 0;

    function updateCarousel() {
        carousel.style.transition = "transform 0.5s ease-in-out";
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    document.getElementById("next").addEventListener("click", function () {
        nextImage();
    });

    document.getElementById("prev").addEventListener("click", function () {
        prevImage();
    });

    function nextImage() {
        if (index >= totalImages - 1) {
            index = 0;
            carousel.style.transition = "none";
            carousel.style.transform = "translateX(0)";
            setTimeout(() => {
                carousel.style.transition = "transform 0.5s ease-in-out";
            }, 50);
        } else {
            index++;
        }
        updateCarousel();
    }

    function prevImage() {
        if (index <= 0) {
            index = totalImages - 1;
            carousel.style.transition = "none";
            carousel.style.transform = `translateX(-${index * 100}%)`;
            setTimeout(() => {
                carousel.style.transition = "transform 0.5s ease-in-out";
            }, 50);
        } else {
            index--;
        }
        updateCarousel();
    }

    // Troca automática de imagens com loop instantâneo
    setInterval(function () {
        nextImage();
    }, 3000);

    function createEmojiRain() {
        const emojiRainContainer = document.getElementById('emoji-rain');
        const emojis = ['❤️', '🥰', '💖', '🌹', '💘', '💕', '😍']; // Lista de emojis apaixonados
    
        setInterval(() => {
            const emoji = document.createElement('div');
            emoji.classList.add('emoji');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)]; // Escolhe um emoji aleatório
            emoji.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
            emoji.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duração aleatória da queda
            emoji.style.fontSize = Math.random() * 20 + 20 + 'px'; // Tamanho aleatório
    
            emojiRainContainer.appendChild(emoji);
    
            // Remove o emoji após a animação para evitar sobrecarga
            setTimeout(() => {
                emoji.remove();
            }, 5000);
        }, 300); // Cria um novo emoji a cada 300ms
    }
    
    // Inicia a chuva de emojis
    createEmojiRain();

    // Configuração do contador de tempo
    const startDate = new Date("2024-04-20T00:00:00"); // Ajuste a data conforme necessário

    function updateCounter() {
        const now = new Date();
        const diff = now - startDate;

        const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("contador").textContent = `${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
    }

    setInterval(updateCounter, 1000);
    updateCounter();
});