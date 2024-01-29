// for of  Recommended for Arrrays
// ["", "", ""]
// [{}, {}, {}]

const myArray = [1,3,5, 54, 34,3]
for (const num of myArray) {
    console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if(greet == " ") continue
    // console.log(`Each character of greetings is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map)

for (const key of map) {
    console.log(key)
}

for (const [key, value] of map) {
    // console.log(key)
    // console.log("Now printing both");
    console.log(`${key} :- ${value}`);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(`${key} :- ${value}`);
}
// gives an error Says Object is not iterable.