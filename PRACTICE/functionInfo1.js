
// Function expression
// They are assigned to variables

const square = function (num) {
    return num * num
}

console.log(square(2));

// Anonymous Function: 
// a function that is defined without a name. 
let num1 = 4
let num2 = 8

console.log((function (num1, num2) {
    // console.log(`${num1 * num2}`);
   return num1 * num2
})(num1, num2));


// Callback function 
function fetchData(callback) {
    // Simulating asynchronous operation (e.g., fetching data from a server)
    setTimeout(function() {
        // Assume data is fetched successfully
        var data = { name: "John", age: 30 };
        // Calling the callback function with the fetched data
        callback(data);
    }, 2000); // Simulating a delay of 2 seconds
}

// Callback function
function displayData(data) {
    console.log("Received data:", data);
}

// Calling fetchData function and passing displayData as a callback
fetchData(displayData);
