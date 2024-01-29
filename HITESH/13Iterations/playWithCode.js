// https://chat.openai.com/share/84c050be-3b6b-4d15-a941-52b10726c56e

/*

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// console.log(shoppingCart);

// reduce 

// const totalPrice = shoppingCart.reduce( (accumulator, currentValue) => {accumulator + shoppingCart[currentValue].price}, 0)

// console.log(totalPrice);
let totalPrice2 = 0
for (let index = 0; index < shoppingCart.length; index++) {
     totalPrice2 += shoppingCart[index].price    
}
console.log(totalPrice2);

// for each 
let totalPrice3 = 0
shoppingCart.forEach(item => totalPrice3 += item.price);
console.log(totalPrice3);  // NaN

// lets try to correct above syntax: actullay I forger to declare value to let totalPrice3 so it gives NaN.

// shoppingCart.forEach( (item) => {
//     // console.log(item);
//     // totalPrice3
// })

shoppingCart.forEach(item => {
    console.log(`${item.itemName}: ${item.price}`);
});

// for of loops : recommended for arrays 
// Don't use for in loops.

for (const item of shoppingCart) {
    console.log(`${item.itemName} : ${item.price}`);
    console.log(item);
}

let totalPrice4 = 0
for (const item of shoppingCart) {
    totalPrice4 += item.price
}

console.log(totalPrice4);

 */
/*
// ///// Maps

const newMap = new Map()
newMap.set('IN', "India")
newMap.set('USA', "United States of America")
newMap.set('Fr', "France")
newMap.set('IN', "India")
newMap.set('C', "China")

console.log(newMap);

for (const key of newMap) {
    console.log(key[0]);
    console.log(key[1]);
}

for (const [key, value] of newMap) {
    console.log(`${key} :- ${value}`);
    
}

// for in for maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
} // It does'nt print anything map is not iteratable for forin loop. Used forof loop.


/////  for of loop don't work on objects

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(`${key} :- ${value}`);
// }  
// gives an error Says Object is not iterable.

// Use this 
for (const [key, value] of Object.entries(myObject)) {
    console.log(`${key} :- ${value}`);
}

 */


/*
// //// for in loops  for objects
// don't use for in loops for arrays.


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    if (Object.hasOwnProperty.call(myObject, key)) {
        console.log(`${key} : ${myObject[key]}`);        
    }
}
 */

// function printMe(item) {
//     console.log(item);
// }

// printMe(myObject)

/*
///// filter loops

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let ans = myArray.filter((item) => item > 4)
console.log(ans);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


// books.forEach(item => {
//     console.log(item.genre);
// });

const myBook = books.filter( (item) => item.genre === 'History')
console.log(myBook);

let userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'Science'
})
console.log(userBooks);

*/

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbers = myNumers.map( (num) => num + 10)
console.log(newNumbers);

// We can chain loops
const array = myNumers.map( (num) => num * 10)
                     .map( (num) => num + 1)
                     .filter( (num) => num >= 60)
console.log(array);