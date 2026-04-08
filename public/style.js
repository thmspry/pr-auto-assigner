const css = `
body {
    overflow: hidden;
}

#pr-auto-assigner-snackbar {
    position: absolute;
    background: rgb(33, 186, 69);
    padding: 16px;
    border-radius: 8px;
    right: 32px;
    bottom: 228px;
    color: white;
    animation: forwards snackbar-reveal 6s;
    font-weight: bold;
    display: flex;
    align-items: center;
    width: 300px;
}

#pr-auto-assigner-snackbar.error {
    background: #cb6465;
}

#pr-auto-assigner-snackbar p {
    margin: 0;
}

@keyframes snackbar-reveal {
  0% {
    transform: translateX(100%) translateY(0);
  }
  
  2% {
    transform: translateX(0) translateY(0);
  }
  
  95% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
  
  100% {
    transform: translateX(0) translateY(100%);
    opacity: 0;
  }
}

.confetti-container {
  position: relative;
  overflow: visible;
}

.confetti {
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: red;
  opacity: 0.9;
  pointer-events: none;
  animation: confetti-fall 1s ease-out forwards;
}

@keyframes confetti-fall {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  100% {
    transform: translate(var(--x), var(--y)) rotate(720deg);
    opacity: 0;
  }
}

.fire-particle {
  position: absolute;
  bottom: 0;
  width: 6px;
  height: 12px;
  background: radial-gradient(circle, yellow 0%, orange 60%, red 100%);
  border-radius: 50%;
  pointer-events: none;
  opacity: 0.8;
  animation: fire-rise 1.2s ease-out forwards;
}

@keyframes fire-rise {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0.9;
  }
  100% {
    transform: translate(var(--x), -120px) scale(0.5);
    opacity: 0;
  }
}

.sparkle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: pink;
  border-radius: 50%;
  pointer-events: none;
  box-shadow: 0 0 8px 2px pink;
  animation: sparkle-pop 0.8s ease-out forwards;
}

@keyframes sparkle-pop {
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: scale(1.5) rotate(180deg);
  }
  100% {
    transform: scale(0) rotate(360deg);
    opacity: 0;
  }
}
`;
