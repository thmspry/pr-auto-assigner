function findAssigneeButton() {
    // Cas où la PR est déjà créée
    const assigneesButtonSelector = 'div.issue-content > div.issue-content-right.ui.segment > .issue-sidebar-combo';
    let dropdownSections = document.querySelectorAll(assigneesButtonSelector);

    if(dropdownSections.length === 0) {
        // Cas où la PR est en cours de création
        const assigneesButtonSelector = 'div.issue-content-right.ui.segment > div:nth-child(9) > div.ui.dropdown.full-width';
        return document.querySelector(assigneesButtonSelector);
    }
    let dropdownAssigneeSection = [...dropdownSections].find((button) => button.innerHTML.includes('assignee'));
    return dropdownAssigneeSection.querySelector('.dropdown');
}

function assignPeople(people, sendResponse) {
    // Ouvre la liste des "Assignees ⚙️"
    const assigneesButton = findAssigneeButton();
    assigneesButton.click();

    // Coche toutes les personnes
    const allItems = assigneesButton.querySelectorAll('.scrolling .item .gt-ellipsis')
    people.forEach(p => assignPerson(p, allItems));

    // Ferme la liste des "Assignees ⚙️"
    assigneesButton.click();

    sendResponse({success: true});
}

/**
 * Assigne une personne
 * @param person le nom de la personne
 * @param allItems la liste de toutes les personnes, provenant du dropdown "Assignees"
 */
function assignPerson(person, allItems) {
    allItems.forEach(item => {
        const name = item.innerText;
        if(name.includes(person)) {
            item.click();
        }
    });
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "assignPeople") {
        assignPeople(msg.people, sendResponse);
    }
});

