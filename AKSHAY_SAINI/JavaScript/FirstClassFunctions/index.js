/*
test();
// test1();  // Gives an error
          // https://chat.openai.com/share/0fd655f9-82a5-4724-ac90-9a74584c7c61

// Function Statement also called as Function Declaration.
function test() {
    console.log("test is called");
}

// Function Expression
var test1 = function() {
    console.log("test1 is called");
}

// Difference between test and test1 is hoisting

////// Anonymous Function : doesn't have its own name or identity.

// function () {
      // Function statements require a function name
// }

///// Named function Expression

var test3 = function xyz() {
    console.log(`if we do "xyz()" outside of test3, it throws an error.`);
    // console.log(`if in local memory means inside: ${xyz}`);
    console.log("if in local memory means inside:");
    console.log(xyz);
}
// https://chat.openai.com/share/6dd401dc-868a-47f2-a7a2-b2e37c6446e6
test3()

////// Difference between Parameters an Arguments

function test4(parameter1, parameter2) {
    console.log("here parameters are in local memory, you can't acess it outside fuction");
}
test4( 5, 10)  // arguments.
*/
//////// First Class Functions
// The Ability to use functions as values and they can return as well, are called as first class functions.

// First class Citizens are same as First Class Functions

function test5(func) {
    console.log(func);
    func()
}
/////  We give function as arguments.
// test5(function () {
//     console.log("Print");
// })

// We can also do that 

// function test6(func) {
//     console.log(func);
//     func()
// } 
// function xyz() {
//     console.log("print xyz");
// }
// test6(xyz)

// We can return function

var test7 = function () {
    return function () {
        console.log("FUnctions are Heart of JavaScript");
    }
}
// function xyz() {
//     console.log("print xyz");
// }

// test7(xyz)
console.log(test7());
console.log(test7()());

// See this to know why undefined 
// https://chat.openai.com/share/5acf24f4-44aa-42be-aa9d-7d3645eff038





