// A function in JavaScript is a reusable block of code 
// that performs a specific task.

// It helps make code modular, organized, and easier to maintain.

// Functions can take inputs (parameters), process them, 
// and return outputs.
function Hi(){

    console.log("Hi James")

}
Hi();  //Hi James

function personName(name){
    console.log("Hello",name)
}
personName("Potter");  //Hello Potter

function plus(a,b){
    console.log(a+b)
}
plus(12,13);//25

function sub(b,c){
    return b-c
}
console.log(sub(5,6));// -1


function add1(q,w){
    if(q&&w){
        return q+w
    }
    return 0;
}
console.log(add1(10,20)); //30
console.log(add1());      //0