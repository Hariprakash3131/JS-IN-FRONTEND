function sumofArray(arr){
    let add=0
    for (let i=0;i< arr.length;i++){
        add+= arr[i]
    }
    return add
}
let array1=[1,2,3,4]
console.log(sumofArray(array1))