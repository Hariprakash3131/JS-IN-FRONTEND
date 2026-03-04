const products=[
    {name:'Bat',price:1200,qut:4},
    {name:"Car",price:300000,qut:2},
    {name:'Bike',price:200000,qut:5}
]
let total=0
products.forEach(pro=>{
    total=pro.price*pro.qut
    console.log(pro.name+":" +total)
})