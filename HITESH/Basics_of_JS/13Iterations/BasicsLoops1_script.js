/*
// for loops

for (let i = 0; i <= 10; i++) {
    const element = i
    if (element == 5) console.log("5 is the best");
    console.log(element);

}

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
  
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        // break
        continue
    }
   console.log(`Value of i is ${index}`);
}
*/

// while loops

let index = 0 
while (index <= 5) {
    console.log(index);
    index++
}

let num = 11
do {
    console.log(num);
    num = num + 1
} while (num <= 10)

// Remember to focus on code readablity and understandibility. 





