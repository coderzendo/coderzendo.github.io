window.onload = () => {

    const simpleObjectDisplay = document.getElementById('simpleObjectDisplay');
    const simpleObjectAction = document.getElementById('simpleObjectAction');
    //simpleObjectDisplay.textContent = 'foobar';

    const simpleObject = {
        firstName: 'James',
        lastName: 'Watson',
        sayName: function () {
            console.log(this.firstName + " " + this.lastName);
        }
    };

    simpleObjectAction.onclick = simpleObject.sayName;

    simpleObject.dynamicMethod = () => {
        console.log("Dynamic Method");
    }

    function FunctionObject() {
        FunctionObject.prototype.sayName = function () {
            console.log('Function Object');
        }
    }

    class CustomClass {
        sayName() {
            console.log("CustomClass");
        }
    }

    simpleObject.sayName();
    simpleObject.dynamicMethod();

    const functionObject = new FunctionObject();
    functionObject.sayName();

    const customClass = new CustomClass();
    customClass.sayName();

}