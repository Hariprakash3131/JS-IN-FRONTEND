//Create a new array containing only the first three elements of another array.
let one=[1,2,3,4,5]
let two=new Array()
one.filter((el)=>{
    if(el<=one[2]){
        two.push(el)
    }
})
console.log(two)
