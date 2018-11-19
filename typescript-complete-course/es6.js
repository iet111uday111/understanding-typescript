"use strict";
/**
 * let & const
 */
console.log("LET & CONST");
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // Won't work
/**
 * Block Scope
 */
function reset() {
    //  console.log(variable);
    var variable = 5;
    console.log(variable);
}
reset();
console.log(variable);
/**
 * Arrow Function
 */
console.log("---------------Arrow Function--------");
var addNumber = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumber(10, 5));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 2));
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Manu");
/**
 * Default Parameters
 */
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log("started", start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();
/**
 * Rest and Spread Operator
 */
console.log("REST & SPREAD");
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max.apply(Math, numbers));
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("Max", 1, 2, 6));
/**
 * Destructing Array
 */
console.log('`````````````Destructing Array````````````````````');
var myhobbies = ['Sports', 'Coding'];
var hoobies1 = myhobbies[0], hoobies2 = myhobbies[1];
console.log(hoobies1);
console.log(hoobies2);
/**
 * Destructing Object
 */
console.log('-----------------Destructing Object----------------');
var userData1 = {
    userName: "Max",
    age: 27
};
//  const { userName , age } = userData1
var myName1 = userData1.userName, myAge1 = userData1.age;
console.log(myName1);
console.log(myAge1);
/**
 * Template Literal
 */
// Template Literals
var userName = "Max";
var greeting = "This is a heading!\nI'm " + userName + ".\nThis is cool!";
console.log(greeting);
//Iterators, Symbols, Generators
/**
 * Filtering Unique and Duplicate Value
 */
console.log('-------------Filter--------------');
//Unique Value
var arr = [1, 3, 4, 1, 2, 1, 3, 3, 4, 1];
console.log(arr.filter(function (v, i, a) {
    return a.indexOf(v) === i;
}));
//Repeated Elements
console.log(arr.filter(function (v, i, a) {
    return a.indexOf(v) !== i;
}));
