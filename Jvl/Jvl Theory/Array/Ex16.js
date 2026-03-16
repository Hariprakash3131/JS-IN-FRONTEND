// Find all elements greater than a given number.
let arr=[1,2,345,456,46,565,6768,6]
let find=420
arr.map((el)=>{
    if (el>=find){
        console.log(el)
    }
})

let num=[234,565,65,78787,6786,866]
let given=7575
let ans=num.filter(find=>find>=given)
console.log(ans)