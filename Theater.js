"use strict";
exports.__esModule = true;
var Theater = /** @class */ (function () {
    function Theater() {
        this.movies = [{
                'name': 'one',
                'booked': 0
            }, {
                'name': 'two',
                'booked': 0
            }];
    }
    Theater.prototype.listMovies = function () {
        return this.movies;
    };
    Theater.prototype.confirmBooking = function (name) {
        var movie = this.movies.filter(function (res) {
            if (name == res.name) {
                res.booked += 1;
            }
        });
    };
    Theater.prototype.addMovie = function (name) {
        this.movies.push({ 'name': name, 'booked': 0 });
    };
    Theater.prototype.removieMovie = function (name) {
        this.movies.filter(function (res) {
            return res.name != name;
        });
    };
    return Theater;
}());
exports.Theater = Theater;
