function confetti(target) {
    const colors = ['#ff0', '#f00', '#0f0', '#00f', '#ff69b4'];
    const rect = target.getBoundingClientRect();

    const confettiCount = 60;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        let x, y, angle;

        const side = Math.floor(Math.random() * 4);

        switch (side) {
            case 0: // TOP
                x = Math.random() * rect.width;
                y = 0;
                angle = (Math.random() * Math.PI) - Math.PI; // vers le haut
                break;

            case 1: // RIGHT
                x = rect.width;
                y = Math.random() * rect.height;
                angle = (Math.random() * Math.PI) - Math.PI / 2;
                break;

            case 2: // BOTTOM
                x = Math.random() * rect.width;
                y = rect.height;
                angle = Math.random() * Math.PI;
                break;

            case 3: // LEFT
                x = 0;
                y = Math.random() * rect.height;
                angle = (Math.random() * Math.PI) + Math.PI / 2;
                break;
        }

        confetti.style.left = `${x}px`;
        confetti.style.top = `${y}px`;

        const distance = 80 + Math.random() * 120;

        confetti.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
        confetti.style.setProperty('--y', `${Math.sin(angle) * distance}px`);

        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        target.appendChild(confetti);

        setTimeout(() => confetti.remove(), 1000);
    }
}