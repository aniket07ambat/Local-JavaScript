const myNums = [1, 2, 3]

// syntax
//let result = myNums.reduce( function (accumulator, currentValue) {accumulator + currentValue}, initialValue)

let total = myNums.reduce( (acc, currVal) => acc + currVal, 0)
console.log(total);

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

// reduce used to find total price in ecommerce.

let totalPrice = shoppingCart.reduce( (acc, currObj) => acc + currObj.price, 0)

console.log(totalPrice);






