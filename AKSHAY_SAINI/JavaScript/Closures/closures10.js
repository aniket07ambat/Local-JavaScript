// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

/*
// Closures learning

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z()

// same code as above
function x() {
    var a = 7;
    return function y() {
        console.log(a);  // here a's reference. Not its value 7.
    }
    
}
var z = x();
console.log(z);
z()

// Why it is printing 7 See notebook .

 */

// Corner cases

function x() {
    var a = 7;
    function y() {
        console.log(a);  // here a's reference. Not its value 7.
    }
    a = 100 
    return y;
}
var z = x();
console.log(z);
z();  // What will it print 
    // 100

function m() {
    var n = 4
    function o() {
        var c = 7
        function p() {
            console.log(n, c);
        }
        p()
    }
    o()
}
m() // we can access both values see image.




