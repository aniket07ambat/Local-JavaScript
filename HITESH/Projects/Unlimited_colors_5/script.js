// Get a random hex color

const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
// console.log(randomColor());

const start = document.querySelector("#start")
const stop = document.querySelector("#stop")

let intervalId

const startChangingColor = function () {
    // setInterval(function () {
    //     document.body.style.backgroundColor = randomColor()
    // }, 2000)

    // // We can also do below
    // setInterval(changeBgColor, 2000)

    // function changeBgColor() {
    //     document.body.style.backgroundColor = randomColor()
    // }

    // Now we want to stop changing color but we don't have refrence to setInterval in above SO MODIFIED CODE

    // let intervalId = setInterval(changeBgColor, 2000) // problem too here. it is in blocked function

    //intervalId = setInterval(changeBgColor, 2000) 

    // Let's add some more professionalism
    if(!intervalId) {
        intervalId = setInterval(changeBgColor, 2000) 
    }
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
}

start.addEventListener("click", startChangingColor)

const stopChangingColor = function () {
    clearInterval(intervalId)
    // Now add Some professionalism to your code here We are constantly overriding the value of internal id 
    // So
    intervalId = null
}

stop.addEventListener("click", stopChangingColor)



