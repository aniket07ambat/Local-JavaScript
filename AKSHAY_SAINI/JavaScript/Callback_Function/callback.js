// What is callback function?
// The function which you pass to another function is called callback function

// ///////  Question: What will be order of print statements.  

/*
setTimeout(function () {
    console.log("timer: will print after 5000 milisecond: 5seconds.");
}, 5000)

// Javascript waits for none. It will continue to excute programs, then after 5 seconds timer will get printed. This will give JS asynchronous properties. 
function text(para){
    console.log("printing text function.");
    para()
}
text(function x(){
    console.log("Function x is callback_function.");
})

*/



// Javascript is synchronous and single threaded language. 
// means: It can do one thing at a time in a sequential order.

// With callback_function, we can do  asynchronous.

// Javascript has only one callstack. called Main Thread.

// if any programme blocks callstack then it is called blocking main thread.

// That's why we use callback functions to achieve asynchronous operations like setTimeout(). 
// So that's why functions  Are heart of javascript as, They allow callback operations. They are also called first class citizens. Functions are 1st class citizens.

const result = document.getElementById("clickMe")
console.log(result);

// Code 1
// result.addEventListener("click", function xyz() {
//     console.log("Button is Clicked.");
// })

// Modification 1.1

// If we want to see how many times button is clicked.

// let count = 0
// result.addEventListener("click", function xyz() {
//     console.log(`Button is Clicked and its count: ${count++}`);   
//     // printing count 0 and then directly 2
// })

// Modification 1.2

// let count = 0
// result.addEventListener("click", function xyz() {
//     console.log(`Button is Clicked and its count: ${++count}`);
// })

// But we know global let is not good choice.

// Modification 1.3

// Lets add closures into it. Makes sure out count remains uneffected by outside varibles.

// Doing data enculaption with closures.

function attachEventListeners() {
    let count = 0
    result.addEventListener("click", function xyz() {
        console.log(`Button is Clicked and its count: ${++count}`);
    })
}

attachEventListeners()

// Garbage collection and  remove eventlisteners
// As in event listeners form closures, they take memory like example here, Count is stored in the memory even if it's not used. So we use garbage collection and remove to free of the memory and remove event listeners

// 

