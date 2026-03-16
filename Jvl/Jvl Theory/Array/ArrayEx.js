// Create a new empty array using the Array constructor
let cri = new Array();  

// Add an element to the end of the array
cri.push("James");  
console.log(cri);  // ["James"]

// Add an element to the beginning of the array
cri.unshift("Joker");  
console.log(cri);  // ["Joker", "James"]

// Print the total number of elements in the array
console.log(cri.length);  // 2

// Add multiple elements to the end of the array
cri.push("Hari", "Prakash", "sherwin", "Abi");  
console.log(cri);  
// ["Joker", "James", "Hari", "Prakash", "sherwin", "Abi"]

// Remove the last element from the array
cri.pop();  
console.log(cri);  
// ["Joker", "James", "Hari", "Prakash", "sherwin"]

// Print the current array length
console.log(cri.length);  // 5

// Access and print the element at index 2 (3rd element)
console.log(cri[2]);  // "Hari"

// Join all elements with "*" separator and return a string
console.log(cri.join("*"));  
// "Joker*James*Hari*Prakash*sherwin"

// Create an object with nested arrays inside
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name: "Ford", models: ["Fiesta", "Focus", "Mustang"]},
    {name: "BMW", models: ["320", "X3", "X5"]},
    {name: "Fiat", models: ["500", "Panda"]}
  ]
};

// Merge (concatenate) the array 'cri' with the object 'myObj'
// This will create a new array where 'myObj' is added as one element at the end
const mergeBoth = cri.concat(myObj);
console.log(mergeBoth);
// ["Joker", "James", "Hari", "Prakash", "sherwin", {name: "John", age: 30, cars: [...] }]



// let cri=new Array();
// cri.push("James")
// console.log(cri)
// cri.unshift("Joker")
// console.log(cri)
// console.log(cri.length)
// cri.push("Hari","Prakash","sherwin","Abi")
// console.log(cri)
// cri.pop()
// console.log(cri)
// console.log(cri.length)
// console.log(cri[2])
// console.log(cri.join("*"))

// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// } 
// //console.log(myObj)

// const mergeBoth=cri.concat(myObj)
// console.log(mergeBoth)   