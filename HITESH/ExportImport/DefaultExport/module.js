/*
A default export in JavaScript allows you to export a single value (function, object, class, etc.) from a module as the "main" export. It has several key characteristics:

Single Export: A module can only have one default export. If you try to define multiple, you'll encounter a syntax error.

Conciseness: You don't need to specify a name when exporting, using the export default syntax instead.

Flexibility: While importing, you can choose any name to bind the exported value to in your module.
 */

export default function greet(name) {
    return `Hello, ${name}!`
}
