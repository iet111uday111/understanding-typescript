"use strict";
/**
 * Simple Gerics
 */
function echo(data) {
    return data;
}
console.log(echo("Max"));
console.log(echo(27));
console.log(echo({ name: "Max", age: 27 }));
/**
 * Better Generics
 */
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho(27));
// console.log(betterEcho<number>(27).length);//Compile Error
console.log(betterEcho({ name: "Max", age: 27 }));
// console.log(betterEcho({name: "Max", age: 27}).length);//Compile Error
/**
 * Built In Generics
 */
var testResultsGen = [1, 2, 5, 4];
var testResultsGen2 = [1.94, 2.33];
testResultsGen2.push(-2.99);
console.log(testResultsGen2);
/**
 * Arrays
 */
function printAll(args) {
    args.forEach(function (element) {
        console.log(element);
    });
}
;
printAll(["ABC", "XYZ"]);
printAll([5, 11]);
printAll([{ a: 4 }, { b: 6 }]);
/**
 * Generics Types
 */
var echo2 = betterEcho;
console.log(echo2("Test"));
/**
 * Generics Type
 */
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
