const assignedList = [];

function findAssigneeButton() {
    // Cas où la PR est déjà créée
    const assigneesButtonSelector = 'div.issue-content > div.issue-content-right.ui.segment > .issue-sidebar-combo';
    let dropdownSections = document.querySelectorAll(assigneesButtonSelector);

    if (dropdownSections.length === 0) {
        // Cas où la PR est en cours de création
        const assigneesButtonSelector = 'div.issue-content-right.ui.segment > div:nth-child(9) > div.ui.dropdown.full-width';
        return document.querySelector(assigneesButtonSelector);
    }
    let dropdownAssigneeSection = [...dropdownSections].find((button) => button.innerHTML.includes('assignee'));
    return dropdownAssigneeSection.querySelector('.dropdown');
}

/**
 * Assigne une personne
 * @param person le nom de la personne
 * @param allItems la liste de toutes les personnes, provenant du dropdown "Assignees"
 */
function assignPerson(person, allItems) {
    allItems.forEach(item => {
        const name = item.innerText;
        if (name.includes(person)) {
            item.click();
        }
    });
}

function notifyAssignation(listName) {
    if (assignedList.includes(listName)) {
        snackbar(`La liste ${listName} a été désassignée`);
        const index = assignedList.indexOf(listName);
        if (index > -1) {
            assignedList.splice(index, 1);
        }
    } else {
        snackbar(`La liste ${listName} a été assignée`);
        assignedList.push(listName);
    }
}

function switchAnimation(animation, assigneesButton) {
    switch (animation) {
        case 'none':
            break;
        case 'confetti':
            confetti(assigneesButton);
            break;
        case 'fire':
            fire(assigneesButton);
            break;
        case 'magic':
            magicWand(assigneesButton);
            break;
    }
}

function assignPeople({people, listName, animation}, sendResponse) {
    // Ouvre la liste des "Assignees ⚙️"
    const assigneesButton = findAssigneeButton();
    if (!assigneesButton) {
        snackbar("J'ai pas trouvé la section Assignees, dsl", true);
    }
    switchAnimation(animation, assigneesButton);
    assigneesButton.click();

    // Coche toutes les personnes
    const allItems = assigneesButton.querySelectorAll('.scrolling .item .gt-ellipsis')
    people.forEach(p => assignPerson(p, allItems));
    notifyAssignation(listName);

    // Ferme la liste des "Assignees ⚙️"
    assigneesButton.click();

    sendResponse({success: true});
}

function isGitea() {
    const metadataKeywords = document.querySelector('meta[name="keywords"]').content;
    return metadataKeywords.includes('gitea');
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "assignPeople") {
        if (!isGitea()) {
            snackbar("C'est pas Gitea ça, connait pas", true);
        }
        const style = document.createElement('style');
        style.innerHTML = css;
        document.head.appendChild(style);

        assignPeople(msg, sendResponse);
    }
});

