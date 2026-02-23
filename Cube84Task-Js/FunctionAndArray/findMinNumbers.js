function findMin(arr){
    let minium=arr[0]
    for (let i=1;i<arr.length;i++){
        if(arr[i]<minium){
            minium=arr[i]
        }
    }
    return minium
}
let min=[11,2,3,4,5,6]
console.log(findMin(min))