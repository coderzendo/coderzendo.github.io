window.onload = () => {
    const feetToInchesAction = document.getElementById('feet-to-inches-action');
    const milesToFeetAction = document.getElementById('miles-to-feet-action');
    const areaOfCircleAction = document.getElementById('area-of-circle-action');
    const areaOfTriangleAction = document.getElementById('area-of-triangle-action');

    feetToInchesAction.onclick = () => {
        const feetToInchesInput = document.getElementById('feet-to-inches-input');
        const feetToInchesDisplay = document.getElementById('feet-to-inches-display');

        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
    };

    milesToFeetAction.onclick = () => {
        const input = document.getElementById('miles-to-feet-input');
        const display = document.getElementById('miles-to-feet-display');

        display.textContent = milesToFeet(input.value);
    };

    areaOfCircleAction.onclick = () => {
        const input = document.getElementById('area-of-circle-input');
        const display = document.getElementById('area-of-circle-display');

        display.textContent = areaOfCircle(input.value);
    };

    areaOfTriangleAction.onclick = () => {
        const input1 = document.getElementById('area-of-triangle-input1');
        const input2 = document.getElementById('area-of-triangle-input2');
        const display = document.getElementById('area-of-triangle-display');

        display.textContent = areaOfTriangle(input1.value, input2   .value);
    };

};

const feetToInches = (feet) => {
    return feet * 12;
};

const milesToFeet = (miles) => {
    return miles * 5280;
};

const areaOfCircle = (radius) => {
    return Math.PI * radius * radius;
};

const areaOfTriangle = (base, height) => {
    return (base * height) / 2;
};