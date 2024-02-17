// let userData;

// async function getData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         if(!response.ok) {
//             throw new Error("Network is down.");
//         }
//         const data = await response.json();
//         console.log(data);
//         userData = data;
//         console.log("Aniket");
//         return data;
//     } catch (error) {
//         console.log("Error", error);
//     }
// }

// getData()

// console.log(userData);
// console.log("Aniket");
// userData = getData();
// console.log(userData);


async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if(!response.ok) {
            throw new Error("Network is down.");
        }
        const data = await response.json();
        for(const [key, value] of Object.entries(data)) {
            console.log(`${key}: ${value}`);
        }
    } catch (error) {
        console.log("Error", error);
    }
}

getData()