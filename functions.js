//functions with different types of parameters
function UsingParam(pRequired, pDefault, pOptional) {
    if (pDefault === void 0) { pDefault = "DBS"; }
    var pRest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        pRest[_i - 3] = arguments[_i];
    }
    console.log(pRequired);
    console.log(pDefault);
    console.log(pOptional);
    console.log(pRest);
}
UsingParam(true);
UsingParam(false, "DBS-5555", 100, "rest1", "rest2");
function arrayParam(pArr) {
    console.log(pArr);
}
function restParam() {
    var pRest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        pRest[_i] = arguments[_i];
    }
    console.log(pRest);
}
var arr = ['1', '2', '3'];
arrayParam(arr);
restParam('1', '2', '3');
restParam('4', '5');
//function that returns another function
function complicated() {
    console.log("Inside complicated");
    return function () {
        console.log("I will dispaly if invoked only!");
        return function (pName) {
            return "Hello " + pName;
        };
    };
}
/** var result=complicated();
result();*/
//invoking the above 2 lines is below 
//complicated()();//currying of functions
console.log(complicated()()("sruthi"));
//console.log(result);
//self invokable functions
/** var output=(function(){
    console.log("A function");
    return "a value";
})();
console.log(output);*/
var output = (function complicated() {
    console.log("Inside complicated");
    return function () {
        console.log("I will dispaly if invoked only!");
        return function (pName) {
            return "Hello " + pName;
        };
    };
})()()("sruthi");
//console.log(output);
//lamda functions
(function () {
    console.log("A function");
    return "a value";
});
// Instead of above lines follow below
(function () { return "a value"; });
var out = function (a) { return function (a, x, y) { return x + y + 7; }; };
console.log(out(10)(10, 20, 30));
/** var out=(a)=>(x,y)=>x+y+7;
console.log(out(10)(20,30));*/
//reverse engineering
/**console.log((function(a)
{
    return function(x,y)
    {
        return x+y+a;
    }
})(10)(20,30));*/
var str = '2+3*5';
var exp1 = str.split('+');
console.log(exp1);
