// const addToList =
window.onload = () => {
    /*
     * listButton: variable
     *
     */

    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    };

    const listButton = document.getElementById('runForLoop');

    listButton.onclick = function () {
        const myList = document.getElementById('listDisplay');

        for (let i = 0; i < 5; i++) {
           elfCode.appendToList(myList, i);
        }
    };

    const addToListAction = document.getElementById('addToListAction');
    const listDisplay = document.getElementById('listDisplay');
    const nameDisplay = document.getElementById('nameDisplay');

    addToListAction.onclick = function() {
        const data = nameDisplay.value;
        elfCode.appendToList(listDisplay, data);
    }
};
