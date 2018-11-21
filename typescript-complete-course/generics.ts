/**
 * Simple Gerics
 */

function echo(data: any) {
    return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({ name: "Max", age: 27 }));

/**
 * Better Generics
 */

// Better Generic
function betterEcho<T>(data: T) {
    return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho<number>(27));
// console.log(betterEcho<number>(27).length);//Compile Error
console.log(betterEcho({ name: "Max", age: 27 }));
// console.log(betterEcho({name: "Max", age: 27}).length);//Compile Error

/**
 * Built In Generics
 */

const testResultsGen: Array<number> = [1, 2, 5, 4];
const testResultsGen2: Array<number> = [1.94, 2.33];
testResultsGen2.push(-2.99);
console.log(testResultsGen2);

/**
 * Arrays
 */

function printAll<T>(args: T[]) {
    args.forEach(element => {
        console.log(element);
    });
};

printAll<string>(["ABC", "XYZ"]);
printAll<number>([5, 11]);
printAll<Object>([{ a: 4 }, { b: 6 }]);

/**
 * Generics Types
 */

const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("Test"));

/**
 * Generics Type
 */

class SimpleMath<T extends number | string,U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());