function loader() {
    const objectLiteralButton = document.getElementById('objectLiteralAction');
    const functionButton = document.getElementById('functionObjectAction');
    const customClassButton = document.getElementById('customClassAction')

    objectLiteralButton.onclick = function() {
        const name = myObject.getName();
        const getNameDisplay = document.getElementById('olNameDisplay');
        getNameDisplay.textContent = name;

        const fullName = myObject.getFullName();
        const getFullNameDisplay = document.getElementById('olFullNameDisplay');
        getFullNameDisplay.textContent = fullName;
    }

    functionButton.onclick = function() {
        const constructorFunctionDisplay = document.getElementById('functionObjectNameDisplay')
        const functionObject = new FunctionObject();
        constructorFunctionDisplay.textContent = functionObject.getFullName();    
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
 * Object Literal
 */
const myObject = {
    firstName: 'James',
    lastName: 'Watson',
    getName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

myObject.middleName = 'barfoo';

myObject.getFullName = function() {
    return this.firstName +
        ' ' + this.middleName + 
        ' ' + this.lastName;
}

/*
 * Function Object
 */
function FunctionObject()  {
    const firstName = 'Rosalind';
    const lastName = 'Franklin';

    FunctionObject.prototype.getFullName = () => {
        return firstName + ' ' + lastName;
    }

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
