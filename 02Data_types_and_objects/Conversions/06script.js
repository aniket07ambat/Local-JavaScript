let score = undefined;


// console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

console.log("Now doing conversion of 33abc")
let score1 = "33abc";


console.log(typeof score1)
// console.log(typeof(score1))

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)

let score2 = "33"
console.log(typeof score2)
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

// "33" => 33
// "33abc" => NaN   -- Not a Number  --Type of NaN is number.
// true => 1; false => 0;
// undefined => NaN   -- undefined typeof is undefined.
// null => 0  -- null is object.
// string "Aniket" => NaN

console.log("Now doing conversions for booleans")

let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false;
// true => true
// "Aniket" => true
// "" => false

console.log("Now doing conversions for Strings")

let someNumber = 22
// console.log(someNumber);
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
