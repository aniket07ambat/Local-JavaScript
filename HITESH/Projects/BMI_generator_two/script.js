// const form = document.querySelector("form")

// // // In these use case we don't need to write here.
// // // If we define height here it gets empty value
// // const height = document.querySelector("#height").value
// // console.log(height);  // output: NaN 


// form.addEventListener("submit", function(event) {
//     event.preventDefault() // here we want to stop default action[sending information to server]

//     const height = parseInt(document.querySelector("#height").value)
//     const weight = parseInt(document.querySelector("#weight").value)
//     const result = document.querySelector("#results")

//     // Now to check if values are correct
//     if( height < 0 || isNaN(height)) {
//         result.innerHTML = `Please give valid height`
//     } else if(  weight < 0 || isNaN(weight)) {
//         result.innerHTML = `Please give valid weight`
//     } else {
//         const BMI =( (weight /  (height * height) / 10000)).toFixed(2)
//         // show the result
//         result.innerHTML = `<span>${BMI}</span>`
//     }
    
    


// })


// const form = document.querySelector("form")

// form.addEventListener("submit", function(event) {
//     event.preventDefault(); // Stop the default form submission

//     const height = parseInt(document.querySelector("#height").value);
//     const weight = parseInt(document.querySelector("#weight").value);
//     const result = document.querySelector("#results");

//     // Check if values are correct
//     if (isNaN(height) || height < 0) {
//         result.innerHTML = `Please give a valid height`;
//     } else if (isNaN(weight) || weight < 0) {
//         result.innerHTML = `Please give a valid weight`;
//     } else {
//         const BMI = ((weight / (height * height) / 10000)).toFixed(2);
//         // Show the result
//         result.innerHTML = `<span>${BMI}</span>`;
//     }
// });


const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});