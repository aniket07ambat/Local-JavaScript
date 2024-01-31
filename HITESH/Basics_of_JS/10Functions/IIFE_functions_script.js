// Immediately invoke function expressions.

// Some times we don't want to pullute our functions by global variabels so we use iife.

// IIFE Used  when we work on databases.(example)

function chai() {
    console.log("Database connected.");
}

(function useIife() {
    console.log("Database 1 connected.");
})();
// iife don't know when to stop function excution so,
// here ; semicolon is imp.

// Here first () => we wrap whole function into parathesis. 
// Second () => excution call

( () => {
    console.log("Database 2 connected.");
})();

( (name) => {
    console.log(`${name}'s Database connected.`);
})("Aniket")



