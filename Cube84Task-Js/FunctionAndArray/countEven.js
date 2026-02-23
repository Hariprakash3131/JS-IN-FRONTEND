function countEven(evenNumbers){
    let output=0
    for (let i=0;i<evenNumbers.length;i++){
        if(evenNumbers[i]%2==0){
            output++
        }
       
    }
     return output
}
let even=[1,2,3,4,5,6]
console.log(countEven(even))