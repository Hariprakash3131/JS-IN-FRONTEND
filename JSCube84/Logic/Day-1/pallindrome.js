let num=124
let original=num
let lastDigit=0


while(num>0){
    let reversed=num%10
    lastDigit=lastDigit*10+reversed
    num=Math.floor(num/10)
}

if(original===lastDigit){
    console.log("Its Palindrome")

}
else{
    console.log('Not Palindrome')
}