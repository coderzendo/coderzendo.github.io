window.onload = () => {
    
    // First find the elements on the page that we are going to need to access
    const simpleFunction = document.getElementById('simple-function');
    const functionCalls = document.getElementById('function-calls');

    function simple() {
        console.log('simple');
        simpleFunction.innerHTML = "simple";
    }

    functionCalls.onclick = simple;
}

