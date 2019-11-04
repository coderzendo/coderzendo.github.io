function divider() {
    console.log('================');
}

function splitStringOnAnyInstanceOfCharacter(path, character, countFromEnd) {
    const pathParts = path.split(character);
    return pathParts.slice(Math.max(pathParts.length - countFromEnd, 1)).join(character);    
}

const path = '/usr/src/route-tester/routes';
const sliced = splitStringOnAnyInstanceOfCharacter(path, '/', 2);
console.log(sliced);

divider();

function arrayToString(array) {
    console.log(array.join(', '));
}

function stringToArray(input) {
    console.log(input.split(','));
}


arrayToString(["bundle.js", "*.js.map", ".c9"]);

stringToArray("bundle.js, *.js.map, .c9");

divider();

let height = 4;
if (height >= 5) {
    console.log('We have a big one');
} else {
    console.log('We have a little one');
}

divider();
    
height = 3;
if (height >= 5) {
    console.log('We have a big one');
} else if (height >= 0) {
    console.log('We have a little one');
} else {
    console.log('We have a negative number or invalid number')
}

divider();

height = 'little';

switch(height) {
    case 'little':
        console.log('Switch: a little one is smaller than five');
        break;

    case ('big'):
        console.log('Switch: a big one is five or greater');
        break;

    default:
        console.log('We do not know about this one.')
}

divider();

const items = [1, 'two', [3, 4], false, null];

console.log(items);

for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

for (let item of items) {
    console.log(item);
}

divider();

const numbers = [1, 2, 3, 4, 5, 8, 10];
console.log(numbers[1]);
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

divider();

const myObject = {
    five: 5,
    six: 'six'
};            

myObject.newItem = 'This is a new item in my object.'
    
console.log(myObject.five);
console.log(myObject.six);
console.log(myObject.newItem);

divider();

numbers.push(12);
console.log(numbers);
numbers.pop(); // Remove the last item
console.log(numbers);
