"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.type = '';
        this.age = 27;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('old guy');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('uday', 'udayaditya');
console.log(person);
person.printAge();
// person.setType('ABC');\
/**
 * Inheritance
 */
var Uday = /** @class */ (function (_super) {
    __extends(Uday, _super);
    function Uday(username) {
        var _this = _super.call(this, 'uday', username) || this;
        _this.age = 31;
        return _this;
    }
    return Uday;
}(Person));
var uday = new Uday('uday');
console.log(uday);
/**
 * Getters & Setters
 */
var plant = /** @class */ (function () {
    function plant() {
        this._species = 'Default';
    }
    Object.defineProperty(plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return plant;
}());
var plantObj = new plant();
console.log(plantObj.species);
plantObj.species = 'Geen Plant';
console.log(plantObj.species);
/**
 * Static Propeties & Methods
 */
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcuCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcuCircumference(10));
/**
 * Abstract Classes
 */
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject.changeName('change'));
console.log(newProject);
/**
 * Private Constructor
 * Single Class : Cannot create instances outside the class.
 */
var Onlyone = /** @class */ (function () {
    function Onlyone(name) {
        this.name = name;
    }
    Onlyone.getInstances = function () {
        if (!Onlyone.instance) {
            Onlyone.instance = new Onlyone('The Only One');
        }
        return Onlyone.instance;
    };
    return Onlyone;
}());
var correct = Onlyone.getInstances();
console.log(correct);
//  correct.name = 'Something';
console.log(correct);
