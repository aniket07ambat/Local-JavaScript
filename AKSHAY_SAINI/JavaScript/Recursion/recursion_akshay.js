// Recursion video
// https://www.youtube.com/watch?v=Vi4Pr8bUMZs&list=PLlasXeu85E9eV5xUEgrWUB8NAUvNZGsK0&index=10

//

let user = {
    name: "Aniket Ambat",
    address: {
        personal: {
            city: "Parbhani",
            state: "Maharashtra"
        },
        office: {
            city: "Hydrabad",
            area: {
                landmark: "Hi Tech",
            }
        }
    }
}

console.log(user);

for (const key in user) {
    console.log(key);
}

let finalObj = {}

function magic  (obj, parent, finalObj) {
    for (const key in obj) {
        if(typeof obj[key] === 'object') {
            magic(obj[key], parent + '_' + key, finalObj)
        } else {
            finalObj[parent + '_' + key] = obj[key] 
        }
        
    }
}

magic(user, "user", finalObj)
console.log(finalObj);







