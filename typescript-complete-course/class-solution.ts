// Exercise 1 - How was your TypeScript Class?

class Car {

    constructor(public name: string, public acceleration: number) {

    }

    honk() {
        console.log("Toooooooooot!");
    };

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}
let car = new Car("BMW", 0);
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


// Exercise 2 - Two objects, based on each other ...
class baseObject {
    width: number = 0;
    length: number = 0;
}


class Rectangle extends baseObject {
    calcSize() {
        return this.width * this.length;
    }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
rectangle.calcSize();

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class PersonSol {
    private _firstName: string = "Default";


    public get firstName(): string {
        return this._firstName;
    }


    public set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "Default";
        }
    }

}

const personSol = new PersonSol();

console.log(personSol.firstName);
personSol.firstName = "Ma";
console.log(personSol.firstName);
personSol.firstName = "Udayaditya";
console.log(personSol.firstName);
