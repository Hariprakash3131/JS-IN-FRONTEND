function countNumber(arr,num){
    count=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]===num){
            count++
        }
    }
    return count
}
let value=[1,2,4,23,5,9,9,42,2,5,4,2,5,8,9,6,58,556]
console.log(countNumber(value,2))
console.log(countNumber(value,9))
console.log(countNumber(value,4))
console.log(countNumber(value,5))