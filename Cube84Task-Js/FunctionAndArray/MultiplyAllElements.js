function multiplyElements(arr){
   let  multiply=1
    for(i=1;i< arr.length;i++){
        multiply=multiply*arr[i]
        
    }
    return multiply
}
let num=[1,2,3,4]
console.log(multiplyElements(num))