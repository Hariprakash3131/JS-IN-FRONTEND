let arr=[15,37,456,5567,67464,3,4,6,8,10]

let result=arr.find((ar)=>{  // this find method first matching value only give
    return ar%2==0
})
console.log(result)  //456