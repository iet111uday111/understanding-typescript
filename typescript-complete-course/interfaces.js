function Igreet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
var Iperson = {
    firstName: "Max",
    hobbies: ["Cooking", "Sports"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
// greet({firstName: "Max", age: 27});
changeName(Iperson);
Igreet(Iperson);
Iperson.greet("Anything");
var IPerson = /** @class */ (function () {
    function IPerson() {
        this.firstName = '';
        this.lastName = '';
    }
    IPerson.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    ;
    return IPerson;
}());
var myPerson = new IPerson();
myPerson.firstName = "Maximilian";
myPerson.lastName = "Anything";
Igreet(myPerson);
myPerson.greet(myPerson.lastName);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: "Max",
    greet: function (lastName) {
        console.log("Hello!");
    }
};
console.log(oldPerson);
