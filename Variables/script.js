console.log("Studying JavaScript");

var a = 4;
var b = 10;

console.log("a + b");
console.log(a + b);

const c = 7;
// c = c + 1 ;  Not allowed to change constant "const" variable.
console.log(c);

var _d = "Aniket";
console.log(_d);

var f = "Harry";
console.log(typeof a, typeof b, typeof c, typeof _d, typeof f, typeof e);
console.log("e is undefined.");

console.log("let is blocked scoped");
console.log("var is globally scoped");
console.log("So let is recommened in modern JS");

let ab = 20;
console.log("let is " + ab);

{
    let ab = 30;
    console.log("let is " + ab);
}
console.log("let is " + ab);

var bc = 40;
console.log("var is " + bc);

{
    var bc = 50;
    console.log("var is " + bc);
}
console.log("var is " + bc);


