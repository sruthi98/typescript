var first = 15;
var second = 73;
// (first > second) ? console.log("true")   : console.log("false") ;  
(first > second)
    ? (function () {
        console.log("true");
        // console.log("still true");
    })()
    : (function () {
        console.log("false");
        //console.log("still false")
    })();
