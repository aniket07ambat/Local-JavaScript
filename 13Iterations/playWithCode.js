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
























