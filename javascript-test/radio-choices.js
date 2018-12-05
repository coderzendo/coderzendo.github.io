window.onload = () => {
    const myForm = document.getElementById('sort-type');

    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = document.querySelector('input[name="sorter"]:checked').value;
        //const checkedSorterRadio = document.querySelector('input[name="sorter"]:checked');
        //const value = checkedSorterRadio.value;
        if (value.toLowerCase() === 'language') {
            showChoice(value);
        } else {
            showChoice(value);
        }
    });

    const openButton = document.getElementById('openNav');

    openButton.onclick = () => {
        openNav();
    }

    const closeButton = document.getElementById('closeNav');

    closeButton.onclick = () => {
        closeNav();
    }
    /* Set the width of the side navigation to 250px */
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
}

function showChoice(value) {
    console.log(value);
    const userDisplay = document.getElementById('user-choice');
    userDisplay.textContent = value;
}