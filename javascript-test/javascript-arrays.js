window.onload = () => {
    
    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        languageNames: ['JavaScript', 'HTML', 'CSS', 'Java', 'C#', 'Python', 'C/C+'],
        languagePopularity: [
            {
                language: 'JavaScript',
                rank: 2
            },
            {
                language: 'HTML',

                rank: 1
            },
            {
                language: 'CSS',
                rank: 3
            }
        ]
    };

    let compareTool = compareLanguage;

    const numbersAction = document.getElementById('numbers-action');
    const languageNamesAction = document.getElementById('tech-language-names-action');
    const techLanguagePopularityAction = document.getElementById('tech-language-popularity-action');

    numbersAction.onclick = () => {
        const numbersDisplay = document.getElementById('numbers-display');
        for (let number of arrays.numbers) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(number));
            numbersDisplay.appendChild(li);
        }
    };

    languageNamesAction.onclick = () => {
        const languageNamesDisplay = document.getElementById('tech-language-names-display');

        for (let language of arrays.languageNames.sort()) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(language));
            languageNamesDisplay.appendChild(li);
        }

    };


    techLanguagePopularityAction.onclick = () => {
        const techLanguagePopularityDisplay = document.getElementById('tech-language-popularity-display');

        arrays.languagePopularity.sort(compareTool);

        techLanguagePopularityDisplay.innerHTML = '';

        for (let language of arrays.languagePopularity) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(language.language + ' rank: ' + language.rank));
            techLanguagePopularityDisplay.appendChild(li);
        }
    };

    const myForm = document.getElementById('sort-type');

    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = document.querySelector('input[name="sorter"]:checked').value;
        if (value.toLowerCase() === 'language') {
            compareTool = compareLanguage;
        } else {
            compareTool = compareRank;
        }
    });
};

function compareLanguage(a, b) {
    // Use toUpperCase() to ignore character casing
    const languageA = a.language.toUpperCase();
    const languageB = b.language.toUpperCase();

    let comparison = 0;
    if (languageA > languageB) {
        comparison = 1;
    } else if (languageA < languageB) {
        comparison = -1;
    }
    return comparison;
}

function compareRank(a, b) {
    // Use toUpperCase() to ignore character casing
    const rankA = a.rank;
    const rankB = b.rank;

    let comparison = 0;
    if (rankA > rankB) {
        comparison = 1;
    } else if (rankA < rankB) {
        comparison = -1;
    }
    return comparison;
}

function goThere(event) {
    event.preventDefault();
    alert('goThere')
}
