function findLarge(arr){
    let large=arr[0]
    for (let i=1; i<arr.length;i++){
        if(arr[i]>large){
            large=arr[i]
        }
    }
    return large
}
let find=[1,2,4,5,68]
console.log(findLarge(find))