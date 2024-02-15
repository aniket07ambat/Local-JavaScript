// const obj = new Object({name: "Ani", age: 22})
// console.log(obj);
// delete obj.name
// console.log(obj);

// const obj1 = {name: "Ani", age: 22}
// const obj2 = {name: "Ani", age: 22}

// console.log(obj1 === obj2); // False as the are pointing to different locations in heap. 

// const obj3 = obj1
// console.log(obj3 === obj1); // True as they are pointing to same location in memory.[heap]

// // for (const key of obj) {
// //     console.log(obj1[key]);
// // }  Gives error

// Object.keys(obj1).forEach((element) => {
//     // console.log(element);
//     // console.log(obj1[element]);
// })

// for (const key in obj2) {
//     console.log(key);
// }

// for in loops on arrays travels all its propreties Inherited once included..
let arr = [10, 20, 30] ;
arr[3] = 40;
console.log(arr);
arr["four"] = 50
console.log(arr);

for(var i in arr){
    console.log(i);
}