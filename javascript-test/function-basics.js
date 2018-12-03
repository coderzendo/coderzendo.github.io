window.onload = () => {
    
    const functionCalls = document.getElementById('function-calls');
    const callUserInput = document.getElementById('call-user-input');

    functionCalls.onclick = () => {
        // Both these functions get their display control
        simpleFunction();  
        functionParameters("Many functions take parameters.");

        // This function returns a value and we handle the display here.
        const functionReturnDisplay = document.getElementById('function-return-display');
        const returnValue = functionReturn();
        console.log(returnValue);
        functionReturnDisplay.textContent = returnValue;
    }    

    callUserInput.onclick = () => {
        const userInputParagraph = document.getElementById('show-user-input');
        const userInput = document.getElementById('user-input');
        userInputParagraph.textContent = userInput.value;
    }
      
}

function simpleFunction() {
    const displayText = "Functions should consist of statements designed to perform a single task.";
    const simpleFunctionParagraph = document.getElementById("simple-function");
    console.log(displayText);
    simpleFunctionParagraph.textContent = displayText;
}

function  functionParameters(value) {
    const functionParametersParagraph = document.getElementById("function-parameters");
    console.log(value);
    functionParametersParagraph.textContent = value;
}

function functionReturn() {
    return "Many functions return values.";
}

// simpleFunction();
//functionParameters("Many functions take parameters.");
// adder(4, 9);
