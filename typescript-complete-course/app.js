"use strict";
/**
 * Variable
 */
var myname = 'uday';
/**
 * Enum
 */
var hobbies = ['abc', 'XYZ'];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
/**
 * Function
 */
function returnName() {
    return myname;
}
function sayHello() {
    console.log('Hello');
}
/**
 * Argument Type
 */
function multiply(value1, value2) {
    return value1 * value2;
}
/**
 * Function Type
 */
var myMultiply;
// myMultiply = sayHello; //Error
// myMultiply();//Error
myMultiply = multiply;
myMultiply(5, 2);
/**
 * Objects
 */
var userData = {
    name: 'Uday',
    age: 28
};
userData = {
    age: 25,
    name: 'abc'
};
/**
 * Complex Object
 */
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
/**
 * Union Type
 * Allowing multiple Types with Union Types
 */
var myRealAge = 27;
myRealAge = "27";
/**
 * Never
 */
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
/**
 * Null
 */
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canbeAny = null;
canbeAny = 12;
console.log(canbeAny);
/**
 * Check Types
 * Checking for Types during Runtime
 */
var finalValue = "A String";
if (typeof finalValue === 'number') {
    console.log('It is a number');
}
