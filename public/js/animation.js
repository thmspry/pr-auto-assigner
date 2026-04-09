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

function fire(target) {
    const rect = target.getBoundingClientRect();

    for (let i = 0; i < 40; i++) {
        const fire = document.createElement('div');
        fire.classList.add('fire-particle');

        // position aléatoire sur le bas
        const x = Math.random() * rect.width;
        fire.style.left = `${x}px`;

        // mouvement horizontal léger
        const drift = (Math.random() - 0.5) * 40;
        fire.style.setProperty('--x', `${drift}px`);

        fire.style.animationDuration = `${0.8 + Math.random()}s`;

        target.appendChild(fire);

        setTimeout(() => fire.remove(), 1200);
    }
}

function magicWand(target) {
    const rect = target.getBoundingClientRect();

    for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        // autour de la div (bord + extérieur)
        const side = Math.floor(Math.random() * 4);

        let x, y;

        switch (side) {
            case 0: // top
                x = Math.random() * rect.width;
                y = -5;
                break;
            case 1: // right
                x = rect.width + 5;
                y = Math.random() * rect.height;
                break;
            case 2: // bottom
                x = Math.random() * rect.width;
                y = rect.height + 5;
                break;
            case 3: // left
                x = -5;
                y = Math.random() * rect.height;
                break;
        }

        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;

        sparkle.style.animationDelay = `${Math.random() * 0.3}s`;

        target.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 800);
    }
}