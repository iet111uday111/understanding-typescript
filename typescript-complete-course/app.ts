/**
 * Variable
 */

let myname = 'uday'

/**
 * Enum
 */

let hobbies = ['abc', 'XYZ'];
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

/**
 * Function
 */

function returnName(): string {
    return myname;
}

function sayHello(): void {
    console.log('Hello');
}

/**
 * Argument Type
 */

function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
/**
 * Function Type
 */

let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello; //Error
// myMultiply();//Error
myMultiply = multiply;
myMultiply(5, 2);

/**
 * Objects
 */

let userData: { name: string, age: number } = {
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

let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

/**
 * Type Alias
 * Creating custom types with type aliases.
 */

type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

/**
 * Union Type
 * Allowing multiple Types with Union Types
 */

 let myRealAge: number | string = 27;
 myRealAge = "27";


/**
 * Never
 */

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}

/**
 * Null
 */

 let canBeNull: number | null = 12;
 canBeNull = null;
 let canAlsoBeNull;
 canAlsoBeNull = null;
 let canbeAny = null;
 canbeAny = 12;
 

/**
 * Check Types
 * Checking for Types during Runtime
 */

 let finalValue = "A String";

 if(typeof finalValue === 'number'){
     console.log('It is a number');
 }

 /**
  * Type assertions
  * type assertion is like a type cast in other languages
  */

//  Type assertions have two forms. One is the “angle-bracket” syntax:

 let someValue: any = "uday";

 let strLength: number = (<string>someValue).length;

//  And the other is the as-syntax:
let someValue1: any = "uday";

let strLength1: number = (someValue1 as string).length; 
