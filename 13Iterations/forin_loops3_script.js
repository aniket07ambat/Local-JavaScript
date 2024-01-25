// for in loops 

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(key);
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);
} // print index of array.

for (const key in programming) {
    console.log(programming[key]);
}

// remember above the syntax

// for in for maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
} // It does'nt print anything map is not iteratable for forin loop. Used forof loop.






