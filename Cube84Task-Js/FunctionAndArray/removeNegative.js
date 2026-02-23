function removeNegative(arr){
    let remove=[]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>=0){
           remove.push(arr[i])
        }

    }
    return remove
    
}
let num=[-1,4,5,-7,7,-5]
console.log(removeNegative(num))