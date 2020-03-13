var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Employee.prototype.getFirstName = function () {
        console.log("first name is " + this.firstName);
    };
    Employee.prototype.getLastName = function () {
        console.log("last name is " + this.lastName);
    };
    Employee.prototype.getFullName = function () {
        console.log("full name is " + this.firstName + this.lastName);
    };
    return Employee;
}());
window.onload = function () {
    var emp = new Employee('Sirisha', 'Jinka');
    emp.getFirstName();
    emp.getLastName();
    emp.getFullName();
};
//# sourceMappingURL=emp.js.map