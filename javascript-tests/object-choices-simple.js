const simpleObject = {
    sayName: () => {
        console.log('Simple Object');        
    }
}

function functionObject() {
    
}
functionObject.sayName = () => {
    console.log('Function Object');
}


function ConObj() {
    ConObj.prototype.sayName = () => {
        console.log('Con Obj');
    }
}

simpleObject.sayName();
functionObject.sayName();
const conObject = new ConObj();
conObject.sayName();

for (let prop in conObject) {
    console.log(prop);
}

console.log(conObject.constructor.toString());
console.log(conObject.foo);

// Key Value pairs
// Comma separated list of key value pairs.

console.log(myObject.firstName);
console.log(myObject['firstName']);
console.log(myObject.getName());
console.log(myObject.middleName);   
console.log(myObject.getFullName());
