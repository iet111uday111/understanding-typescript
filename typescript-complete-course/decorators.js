var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logged(constructorFn) {
    console.log(constructorFn);
}
var PersonDecorator = /** @class */ (function () {
    function PersonDecorator() {
        console.log('hi');
    }
    PersonDecorator = __decorate([
        logged
    ], PersonDecorator);
    return PersonDecorator;
}());
/**
 * Factory
 */
function logging(value) {
    return value ? logged : null;
}
var CarDecorator = /** @class */ (function () {
    function CarDecorator() {
    }
    CarDecorator = __decorate([
        logging(false)
    ], CarDecorator);
    return CarDecorator;
}());
/**
 * Advanced
 */
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var PlantDecorator = /** @class */ (function () {
    function PlantDecorator() {
        this.name = "Green Plant";
    }
    PlantDecorator = __decorate([
        logging(false),
        printable
    ], PlantDecorator);
    return PlantDecorator;
}());
var plantDecorator = new PlantDecorator();
plantDecorator.print();
/**
 * Method Decorators
 */
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
/**
 * Property Decorator
 */
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var ProjectDecorator = /** @class */ (function () {
    function ProjectDecorator(name) {
        this.projectName = name;
    }
    ProjectDecorator.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(true)
    ], ProjectDecorator.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], ProjectDecorator.prototype, "calcBudget", null);
    return ProjectDecorator;
}());
var projectDecorator = new ProjectDecorator("Super Project");
projectDecorator.calcBudget();
projectDecorator.calcBudget = function () {
    console.log(2000);
};
projectDecorator.calcBudget();
console.log(projectDecorator);
/**
 * Parameter Decorator
 */
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    return Course;
}());
