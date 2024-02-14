// let array = [1,2,"3",4,5]
// let arr1 = []
// let total1 = 0
// array.forEach( (element) => {
//     // console.log(element);
//     // arr1.push("Hello World")
//     // arr1.push(element)
//     if(typeof element === "number") {
//         total1 += element
//     }
// })
// console.log(total1);
// let num = 3
// console.log(typeof num);
// // const arr2 = array.filter( (element) => element > 2 )

// const total = array
//                 .filter( (element) => element > 2)
//                 .reduce( (acc, currVal) => acc + currVal, 0)
// // const total = array
// //                 .filter( (element) => typeof element !== "number")
// //                 .reduce( (acc, currVal) => acc + currVal, 0)

// console.log(total);

var arr = []

for(let index = 0; index < 10; index++) {
    arr.push( function () {
        setTimeout( () => {
            console.log(index);
        }, 1000)
    })
}

for (let index = 0; index < 10; index++) {
    arr[index] ()  
}


