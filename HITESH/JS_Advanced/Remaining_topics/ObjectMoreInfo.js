// Can you change value of PI? Explain reason?

console.log(Math.PI);  // 3.141592653589793

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// Here Math is module and PI is its property.

console.log(descripter);  
// OUTPUT 
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

const chai = {
    name: "chai",
    price: 2445,
    isAvailable: true,

    orderChai: function () {
        console.log("Code phat gaya.");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

/*
{ value: 'chai', writable: true, enumerable: true, configurable: true }
*/

// Now lets change name property such that it is not iterable

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for(let [key, value] of Object.entries(chai)) {
    if(typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
}



















