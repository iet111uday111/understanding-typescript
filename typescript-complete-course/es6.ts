/**
 * let & const
 */

console.log("LET & CONST");
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // Won't work

/**
 * Block Scope
 */

 function reset(){
    //  console.log(variable);
     
     let variable = 5;
     console.log(variable);
 }

 reset();
 console.log(variable);
 
 /**
  * Arrow Function
  */

console.log("---------------Arrow Function--------");

const addNumber = function(number1:number, number2:number): number{
    return number1 + number2;
}

console.log(addNumber(10,5));

const multiplyNumbers = (number1: number, number2: number): number => number1* number2;

console.log(multiplyNumbers(10,2));

const greetFriend = (friend:string) => console.log(friend);
greetFriend("Manu");

/**
 * Default Parameters
 */

console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10): void => {
    console.log("started",start);
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
let arr = [1, 3, 4, 1, 2, 1, 3, 3, 4, 1];
console.log(arr.filter((v, i, a) => {
    return a.indexOf(v) === i
}));

//Repeated Elements
console.log(arr.filter((v, i, a) => {
    return a.indexOf(v) !== i
}));



