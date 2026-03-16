const person=['james','Siva',"Ram",'Joker'];
person.map((el)=>
    { 
        console.log(el +" *")
    })

// let arr=[1,2,3,4,5]
// let sum=0
// for (let i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// console.log(sum)

let num=[4,5,3,5]
num.sort()
console.log(num)
let num1=new Set([...num])
console.log(num1)
num.reverse()
console.log(num[0])