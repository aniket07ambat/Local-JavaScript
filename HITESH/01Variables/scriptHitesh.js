console.log("Study with Chai and Code");

const accountId = 34534;
let accountEmail = "Aniket@gmail.com";
var accountPassward = "2345";
accountCity = "Parbhani"; // bad practice.
let accountState;

console.log(accountCity);
// accountId = 32453; Not allowed to change const variable.
console.log(accountId); 

accountEmail = "ani@gmail.com";
accountPassward = "3423";
accountCity = "Jaipur";

console.table([accountId, accountEmail, accountPassward, accountCity, accountState]);

console.log("Prefer not to use var because issue in block scope and functional scope.");