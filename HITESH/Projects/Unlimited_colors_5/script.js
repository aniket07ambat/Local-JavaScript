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






