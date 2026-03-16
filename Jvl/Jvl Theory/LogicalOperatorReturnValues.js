const a=35
const b=null
const c="James"
const d=56

console.log(a&&b); //null
console.log(b&&c); //null
console.log(d&&a); //35

console.log(a||b); //35
console.log(b||d); //null
console.log(c||d); //james