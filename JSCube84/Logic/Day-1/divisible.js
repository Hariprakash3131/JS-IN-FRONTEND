let divisibleBy3=0
let divisibleBy5=0
let both=0

for(let i=1;i<=30;i++){
    if(i%3===0 && i%5===0){
        console.log(i+'FizzBuzz')
    }
    else if(i%3===0){
       console.log(i+'fizz')
    }
    else if(i%5===0){
        console.log(i+'Buzz')
    }
    else{
        console.log(i)
    }
   
}

console.log(divisibleBy3)
console.log(divisibleBy5)
console.log(both)