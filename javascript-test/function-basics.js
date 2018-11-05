function simpleFunction() {
    console.log("functions should consist of statements designed to perform a single task.");
}

function add(a, b) {
    console.log(a + b);
}

function add() {
    console.log(2 + 3);
}

function  functionParameters(value) {
    console.log(value)
}

simpleFunction();
functionParameters("Many functions take parameters.");
add(6, 3);
add();
// adder(4, 9);