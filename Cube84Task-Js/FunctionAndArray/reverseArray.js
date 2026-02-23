function reverse(arr){
    let num=[]
    for(let i=1;i<arr.length-1;i--){
       let reversed=arr[i]
       num.push(reversed)
    }

}
let array=[1,2,3]
console.log(reverse(array))