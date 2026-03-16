function isPallindrome(str){
    function reversedString(s){
        let reverse="";
        for (let i=str.length-1;i>=0;i--){
    
                  reverse+=str[i];
        }
        return reverse;
          
    }
    const cleanedStr=str.toLowerCase();
    return cleanedStr===reversedString(cleanedStr);

}
console.log(isPallindrome("Madam"));

