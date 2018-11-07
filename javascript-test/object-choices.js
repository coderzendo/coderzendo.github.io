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

