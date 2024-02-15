// You can create objects in JavaScript using curly braces { … } syntax. But what if you need to create multiple similar objects. You can either write the same syntax for every object, or you can use the constructor to create objects.

// JavaScript provides a function constructor. The constructor provides a blueprint/structure for objects. You use this same structure to create multiple objects.

// The first letter of the function is capital.

// It is important always to use the "new" keyword when invoking the constructor.

// function Student(first , last, age) {
//     this.firstName = first
//     this.lastName = last
//     this.age = age
// }

// const student1 = new Student("Aniket", "Ambat",22)
// console.log(student1);

// // The new keyword is the one that is converting the function call into constructor call, and the following things happen -

// // A brand new empty object gets created.

// // The empty object gets bound as this keyword for the execution context of that function call.

// // If that function does not return anything, then it implicitly returns this object.

// // NOTE: this referred in the constructor bound to the new object being constructed.

// // // // CLASSES

// // These are special functions that allow one to define prototype-based classes with a clean, nice-looking syntax. 

// class Person  {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }

// const person1 = new Person("Aniket", 22)
// console.log(person1);

// // Just like the constructor function, a new keyword is required to create a new object

// // NOTE: The type of the class is a function
// console.log(typeof Person);  // function
// console.log(typeof person1);


// // Getter and Setter  I don't understand 

// class Vehicle{
//     constructor(varient) {
//         this.model = varient;
//     }
//     get() {
//         return `${this.model}Hitesh` 
//         // return this.model
//     }
//     set(value) {
//         this.model = value
//     }
// }

// const vehicle1 = new Vehicle("Bajaj")
// console.log(vehicle1);


