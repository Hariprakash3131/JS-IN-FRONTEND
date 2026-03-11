let arr=[1,2,4,5,6,7,7,7,6,8,8,10]

let ans=arr.filter((arr)=>{
    return arr%2==0
})
console.log(new Set(ans))  //with set use this is used unique values only

