function assignPeople(people, sendResponse) {
    // Ouvre la liste des "Assignees ⚙️"
    let assigneesButtonSelector = '.issue-content > .issue-content-right.ui.segment > div:nth-child(9) > div.ui.dropdown';
    const assigneesButton = document.querySelector(assigneesButtonSelector);
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

