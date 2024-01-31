// For each loops

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item) {
    console.log(item);
})

coding.forEach( (item) => {
    console.log(item);
})

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

function printMe(item) {
    console.log(item);
}

coding.forEach( (printMe)) // here we give only refrence don't excute it.

// coding.forEach( (printMe())) // will give an error

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    console.log(item.languageName);
})

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNumbers = []

myArray.forEach( (item) => {
    if(item > 4) newNumbers.push(item)
})

console.log(newNumbers);










