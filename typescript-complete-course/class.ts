class Person{
    name: string;
    private type: string = '';
    protected age: number = 27;
    

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge(){
        console.log(this.age);
        this.setType('old guy');
    }

    private setType(type: string){
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person('uday', 'udayaditya');
console.log(person);
person.printAge();
// person.setType('ABC');\

/**
 * Inheritance
 */

 class Uday extends Person{
     
    constructor(username: string){
        super('uday',username);
        this.age = 31;
    }
 }

 const uday = new Uday('uday');
 console.log(uday);
 
 /**
  * Getters & Setters
  */

 class plant{
     private _species:string = 'Default';
     
     public get species() : string {
         return this._species;
     }

     public set species(value : string) {
         if(value.length > 3){
             this._species = value
         }else{
             this._species = 'Default'
         }
     }

 }

 const plantObj = new plant();
 console.log(plantObj.species);
 plantObj.species = 'Geen Plant'
 console.log(plantObj.species);
 
 /**
  * Static Propeties & Methods
  */

class Helpers{
    static PI:number = 3.14;
    
    static calcuCircumference(diameter:number): number{
        return this.PI * diameter
    }
}

console.log(2*Helpers.PI);
console.log(Helpers.calcuCircumference(10));

/**
 * Abstract Classes
 */

 abstract class Project{

    projectName: string = "Default";
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
 }

 class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();

console.log(newProject.changeName('change'));
console.log(newProject);

/**
 * Private Constructor
 * Single Class : Cannot create instances outside the class.
 */

 class Onlyone{
     private static instance: Onlyone;

     private constructor(public readonly name: string){

     }

     static getInstances(){
         if(!Onlyone.instance){
             Onlyone.instance = new Onlyone('The Only One');
         }

         return Onlyone.instance;
     }
 }

 let correct = Onlyone.getInstances();
 console.log(correct);
//  correct.name = 'Something';
 console.log(correct);

 

