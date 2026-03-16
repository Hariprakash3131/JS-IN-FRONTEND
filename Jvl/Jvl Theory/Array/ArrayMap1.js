let name=["james","Modi","Trump","Morgan"]
name.map((arrayValue)=>{
    console.log(arrayValue+"*")
    //return arrayValue+"*"
})

const product=[7,8,9,91,567]
const discountAmount=5
const finalAmount=product.map((el)=>
    {
    return el - discountAmount
}
)
console.log(finalAmount)