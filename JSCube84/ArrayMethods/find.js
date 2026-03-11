let arr=[15,37,456,5567,67464,3,4,6,8,10]

let result=arr.find((arr)=>{  // this find method first matching value only give
    return arr%2==0
})
console.log(result)  //456