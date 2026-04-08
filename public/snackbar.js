function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

function snackbar(text, isError = false) {
    const previousSnackbar = document.querySelector('#pr-auto-assigner-snackbar');
    if(previousSnackbar) {
        previousSnackbar.remove();
    }

    const body = document.querySelector('body');
    const snackbar = `
        <div id="pr-auto-assigner-snackbar" class="${isError ? 'error' : ''}">
            <p>${text}</p>
        </div>`;

    body.appendChild(createElementFromHTML(snackbar));
}
