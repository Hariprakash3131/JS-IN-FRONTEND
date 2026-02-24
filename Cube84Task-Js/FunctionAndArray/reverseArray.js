function reverseArray(arr){
    let reverse=0
    while(arr>0){
        let lastNumber=arr%10
        reverse=reverse*10+lastNumber
        arr=Math.floor(arr/10)
    }
    return reverse
}
console.log(reverseArray(421))