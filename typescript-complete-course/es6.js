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
