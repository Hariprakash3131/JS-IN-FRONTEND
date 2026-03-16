function CharacterCountsNumber(str){
    const counts={};
    for(let char of str ){
        if(counts[char]){
            counts[char]++;
        }
        else{
            counts[char]=1
        }

    }
    return counts
}
const inputString="Hello World"
const CountsChar=CharacterCountsNumber(inputString)
console.log(CountsChar)