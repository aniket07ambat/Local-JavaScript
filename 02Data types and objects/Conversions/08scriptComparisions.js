// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

// In javascript equility operator "==" and comparisons work differently Comparisons convert null to a number treating it as zero.

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strict equality operator 
// It is used to compare two values for equality, both in terms of value and type.
let num1 = 5;
let num2 = "5";

console.log(num1 == num2); // true (loose equality, values are equal)
console.log(num1 === num2); // false (strict equality, values are equal but types are different)


console.log("2" === 2);