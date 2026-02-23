let even=0
let odd=0
let divisible=0

for(let i=1;i<=100;i++){
    if(i%2==0){
        even++
    }
    else if(i%5==0){
        divisible++
    }
    else{
        odd++
    }
}
console.log(even)
console.log(odd)
console.log(divisible)