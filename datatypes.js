"use strict"
console.log("datatypes");
var a;
var name = "sirisha";
var dyn = "hi" + name + 'are u der';
dyn = `hi
sirisha`;
a = `area of 2 is ${2 * 2}`;
function person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(`hi ${this.name}`);
    }
}
var p1 = new person("sirisha", 21);

class Building {
    constructor(name, purpose) {
        this.name = name;
        this.purpose = purpose;

    }
    sayLocation() {
        console.log(`Hi ${this.name} is going to be a ${this.purpose}`);
    }
}
var buildingOne = new Building("Alava", "hotel");
var buildingTwo = new Building("Anso", "Apartments");
Object.freeze(buildingOne);
buildingOne.name="ashok nagar";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
