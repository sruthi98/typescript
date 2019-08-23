"use strict";
exports.__esModule = true;
var Theater_1 = require("./Theater");
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.viewMovies = function () {
        Theater_1.Theater.listMovies();
    };
    Customer.prototype.makeBooking = function (movieName) {
        Theater_1.Theater.confirmBooking('one');
    };
    return Customer;
}());
exports.Customer = Customer;
