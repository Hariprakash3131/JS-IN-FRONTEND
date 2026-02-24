function palindrome(a){
    let crt=a
    let reverse=0
    while(a>0){
        let lastNum=a%10
        reverse=reverse*10+lastNum
        a=Math.floor(a/10)
    }
    return reverse
}
console.log(palindrome(123))