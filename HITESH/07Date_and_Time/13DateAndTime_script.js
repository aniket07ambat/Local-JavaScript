// Dates
/*
let myDate = new Date()
console.log(myDate)
console.log(typeof myDate)

console.log(myDate.toString())
console.log(myDate.toJSON())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

let myCreatedDate1 = new Date(2023, 0, 8)
console.log(myCreatedDate1.toDateString())

let myCreatedDate2 = new Date(2022, 11, 7)
console.log(myCreatedDate2.toDateString())
console.log(myCreatedDate2.toLocaleString())

*/

// Time
// Used case:When we design quizzes, when we take polls.

let myCreatedDate3 = new Date("01-14-2022")
console.log(myCreatedDate3.getTime());
let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/100)); // To get in seconds.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()); // this return months start from 0 so,
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());  // starts from Monday.

console.log(`${newDate.getDate()} and Date is `);

// if we want to customize our date and time
newDate.toLocaleString('default' , {
    weekday: "long",
    hour: "2-digit"
})
// use ctrl + space see the vsCode intellignce magic