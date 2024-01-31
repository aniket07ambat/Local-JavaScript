// String length
let fullname = "Aniket Ambat"
console.log(fullname.length)

// Template Literals
let specialString = `This is a Template Literal ${2 + 4 + 5}`
console.log(specialString)
console.log(typeof specialString)

let obj = {
    item: "Pen",
    Price: 10,
}

console.log("Cost of", obj.item, "is", obj.Price, "rupees")
// Now modern way to write this
console.log(`Cost of ${obj.item} is ${obj.Price} rupees`)

// String interpolation
// To create strings by doing substitution of placeholders
// `string_text ${expression} string_text`

// tab and new line takes only 1 space in string.

// String methods 

let str5 = "Apna Collage"
console.log(str5.toUpperCase())
console.log(str5)

str5 = str5.toLowerCase();
console.log(str5)

let str6 = "   Aniket  Ambat    07       ";
let newstr6 = str6.trim()
console.log(newstr6)
// trim only eliminate start and end spaces.

// slice(start, end)   // Here end is non inclusive.
let str7 = "0123456789"
console.log(str7.slice(1, 7))

let str8 = "Hello "
console.log(str8.slice(0, 3))

// We can also Concat using '+'
let str9 = str8.concat(newstr6)
console.log(str9)

console.log(newstr6.concat(str8))

// replace(searchValue, newValue) 
let string1 = "Hello"
console.log(string1.replace("H", "M"))
console.log(string1.replace("lo", "p"))
console.log(string1.replaceAll("ll", "ppp"))

// charAt() and indexOf() 
let string2 = "I am Programmer"
console.log(string2.charAt(5))
console.log(string2.indexOf("P"))

// Strings are immetuble. They stored in Stack
let string3 = "Aniket"
console.log(string3[0])
string3[0] = "S"
console.log(string3) 
//OUTPUT: Aniket    //because string are immetable. does'st change.
// In stack only copy is made.

// To change use
string3 = string3.replace("A", "S")
console.log(string3) 

// Practice questions

//let name = prompt("Enter your fullname without spaces")
// let username = "@" + name + name.length;
let username = `@ ${name} ${name.length}`
console.log(`Your username is ${username}`)









