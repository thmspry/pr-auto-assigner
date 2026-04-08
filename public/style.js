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
    top: 228px;
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
`;
