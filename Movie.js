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
var Movie = /** @class */ (function () {
    function Movie() {
        this.name = "abc";
        this.budget = 25;
    }
    return Movie;
}());
var Movie1 = /** @class */ (function (_super) {
    __extends(Movie1, _super);
    function Movie1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hero = "mahesh";
        _this.heroine = "xyz";
        return _this;
    }
    return Movie1;
}(Movie));
var m = new Movie();
console.log(m.name);
console.log(m.budget);
var m1 = new Movie1();
console.log(m1.hero);
console.log(m1.heroine);
