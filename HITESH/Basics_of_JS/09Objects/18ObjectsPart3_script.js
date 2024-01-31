// destructuring of Objects

const course = {
    courseName: "Js in Hindi",
    price: 999,
    courseInstructor: "Hitesh",
}

const {courseInstructor} = course
console.log(courseInstructor) 

const {courseName: cName} = course
console.log(cName)

/* 
// Below is react concept Just remember,
const navbar = (props.company) => {

}
navbar(company = "hitesh")

// We can also use braces and eliminate props
const navbar = ({company}) => {

}
navbar(company = "hitesh")

*/

// Short about API and JSON
// API : Apna kaam dusreke sar par marna.
// We fetch data from API. 

// In previout time we get value in eml structure. Now we get value in JSON.
// JSON: 
/*
{
    "name": "Aniket",
    "Course": "JS in Hindi",
    "price" : "free",
}
*/
// This is JSON syntax. All in format of string

// Sometimes we can also get an array format
/*
[

]
 */