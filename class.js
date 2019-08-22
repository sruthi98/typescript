"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person() {
        this.name = "sruthi";
        this.id = 123;
        this.salary = "21k";
    }
    Person.age = "21";
    return Person;
}());
exports["default"] = Person;
function Sample() {
}
exports.Sample = Sample;
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super.call(this) || this;
    }
    Employee.prototype.getname = function () {
        return this.name;
    };
    Employee.prototype.getid = function () {
        return this.getid;
    };
    Employee.prototype.worked = function () {
        return "worked a lot";
    };
    return Employee;
}(Person));
exports.Employee = Employee;
var person = new Person();
var employee = new Employee();
console.log(employee.getname());
console.log(Person.age);
console.log(employee.worked());
