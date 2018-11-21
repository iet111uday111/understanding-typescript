function logged(constructorFn:Function){
    console.log(constructorFn);   
}

@logged
class PersonDecorator{
    constructor(){
        console.log('hi');
        
    }
}

/**
 * Factory
 */

 function logging(value: boolean){
     return value ? logged : null
 }

@logging(false)
class CarDecorator{

}

/**
 * Advanced
 */

 function printable(constructorFn:Function){
    constructorFn.prototype.print = function(){
        console.log(this);
    }
 }

 @logging(false)
 @printable
 class PlantDecorator{
     name = "Green Plant"
 }

 const plantDecorator = new PlantDecorator();
 (<any>plantDecorator).print();

 /**
  * Method Decorators
  */


function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor){
        descriptor.writable = value;
    }
}

/**
 * Property Decorator
 */

function overwritable(value: boolean){
    return function(target: any, propName: string): any{
        const newDescriptor: PropertyDescriptor = {
            writable : value
        }
        return newDescriptor;
    }
}


class ProjectDecorator{
    @overwritable(true)
    projectName: string;

    constructor(name: string){
        this.projectName = name;
    }

    @editable(false)
    calcBudget(){
        console.log(1000);
        
    }
}

const projectDecorator = new ProjectDecorator("Super Project");
projectDecorator.calcBudget();
projectDecorator.calcBudget = function(){
    console.log(2000);
};
projectDecorator.calcBudget();

console.log(projectDecorator);

/**
 * Parameter Decorator
 */

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, printAll: boolean) {
        if (printAll) {
            console.log(10000);
        } else {
            console.log(2000);
        }
    }
}
