// Create a new array that excludes the first two elements of another array.
let oldArray=[3,4,5,8,9]
let newArray=new Array()
oldArray.map((firstTwo)=>{
    if(firstTwo<=oldArray[1]){
        newArray.push(firstTwo)
    }
})
console.log(newArray)