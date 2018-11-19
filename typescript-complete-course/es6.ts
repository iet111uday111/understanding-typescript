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

function reset() {
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

const addNumber = function (number1: number, number2: number): number {
    return number1 + number2;
}

console.log(addNumber(10, 5));

const multiplyNumbers = (number1: number, number2: number): number => number1 * number2;

console.log(multiplyNumbers(10, 2));

const greetFriend = (friend: string) => console.log(friend);
greetFriend("Manu");

/**
 * Default Parameters
 */

console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10): void => {
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
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numbers));

function makeArray(name: string, ...args: number[]) {
    return args;
}
console.log(makeArray("Max", 1, 2, 6));

/**
 * Destructing Array
 */

console.log('`````````````Destructing Array````````````````````');

const myhobbies: string[] = ['Sports', 'Coding'];
const [hoobies1, hoobies2] = myhobbies;
console.log(hoobies1);
console.log(hoobies2);

/**
 * Destructing Object
 */

console.log('-----------------Destructing Object----------------');
const userData1: { userName: string, age: number } = {
    userName: "Max",
    age: 27
}

//  const { userName , age } = userData1

const { userName: myName1, age: myAge1 } = userData1

console.log(myName1);
console.log(myAge1);

/**
 * Template Literal
 */

// Template Literals
const userName = "Max";
const greeting = `This is a heading!
I'm ${userName}.
This is cool!`;
console.log(greeting);

//Iterators, Symbols, Generators


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



