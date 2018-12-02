function loader() {
    const objectLiteralButton = document.getElementById('objectLiteralAction');
    const functionButton = document.getElementById('functionObjectAction');
    const customClassButton = document.getElementById('customClassAction')

    objectLiteralButton.onclick = function() {       

        // Get the display controls
        const getNameDisplay = document.getElementById('olNameDisplay');
        const getFullNameDisplay = document.getElementById('olFullNameDisplay');
        
        // Call get name
        const name = myObject.getName();
        getNameDisplay.textContent = name;

        // Call the dynamic getFullName method
        const fullName = myObject.getFullName();        
        getFullNameDisplay.textContent = fullName;
    }

    functionButton.onclick = function() {
        const constructorFunctionDisplay = document.getElementById('functionObjectNameDisplay')
        const functionObjectDynamicDisplay = document.getElementById('functionObjectDynamicDisplay');
        const privateFunctionDisplay = document.getElementById('privateFunctionDisplay');

        const functionObject = new FunctionObject();

        constructorFunctionDisplay.textContent = functionObject.getFullName();        
        functionObjectDynamicDisplay.textContent = functionObject.dynamicMethod();        

        const privateText = functionObject.callPrivateFunction();
        privateFunctionDisplay.textContent = privateText;

    }

    customClassButton.onclick = function() {
        const customClassDisplay = document.getElementById('customClassNameDisplay');


        const customClass = new CustomClass();
        const name = customClass.getName();
        customClassDisplay.textContent = name;
    }
    
}

window.onload = loader;

/*
 * Object Literal object definition
 */
const myObject = {
    firstName: 'James',
    lastName: 'Watson',
    getName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

/* A dynamic property declared outside the object definition */
myObject.middleName = 'barfoo';

/* The dynamic method declared outside the object definition */
myObject.getFullName = function() {
    return this.firstName +
        ' ' + this.middleName + 
        ' ' + this.lastName;
}

/*
 * Constructor Function Object
 * You must call new on it.
 * Declared with a capital letter to signal to
 * other developers that it is constructor
 * function that must be initialized with new.
 */
function FunctionObject()  {
    const firstName = 'Rosalind';
    const lastName = 'Franklin';

    FunctionObject.prototype.getFullName = () => {
        return firstName + ' ' + lastName;
    }

    const privateFunction = () => {
        return 'I can only be called from inside FunctionObject.'
    }

    FunctionObject.prototype.callPrivateFunction = () => {
        return 'The private function says: ' + privateFunction();
    }
}

/*
 * Dynamic method of Function Object implemented 
 * outside the object declaration.
 */
FunctionObject.prototype.dynamicMethod = () => {
    const content = 'Prototype dynamic method';
    console.log(content);

    return content;
}

/*
 * Custom Class
 */
 class CustomClass {
     constructor() {
         this.firstName = 'Francis';
         this.lastName = 'Crick'
     }

     getName() {
        return this.firstName + ' ' + this.lastName;
     }
 }

 