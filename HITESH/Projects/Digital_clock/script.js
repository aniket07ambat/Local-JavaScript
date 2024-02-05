const displayTime = document.getElementById("clock")

// const date = new Date()
// console.log(date.toLocaleTimeString());

// Method to excute code at specified intervals
// Syntax:  setInterval(function() {}, delay)

setInterval(function () {
    const date = new Date()
    displayTime.innerHTML = date.toLocaleTimeString();
}, 1000)

