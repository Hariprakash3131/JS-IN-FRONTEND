function multiplyElements(arr){
    multiply=[0]
    for(i=1;i<=arr.length;i++){
        arr[i]*arr[i]
        multiply.push(arr[i])
        
    }
    return multiply
}
let num=[1,2,3,4]
console.log(multiplyElements(num))