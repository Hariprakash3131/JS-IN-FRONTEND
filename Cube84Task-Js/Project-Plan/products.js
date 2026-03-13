let products=[]

function productsDetails(proName,proPrice,proCategory,proStock){
    let product={
        id:products.length+1,
        name:proName,
        price:proPrice,
        category:proCategory,
        stock:proStock,

    }
    products.push(product)
    console.log('Product Added:',proName)
}

function removeProducts(){
  let remove=products.find(p=>p.id===2)
   products=products.filter((p)=>{
    return p.id!==2
   })
    console.log("Product with id 1 removed",remove.name)
    
}

function listProducts(){
    console.log("Products Details:")
    console.log(products)
}

productsDetails('Laptop',50000,'Ele',12)
productsDetails('Mobile',50000,'Ele',12)
productsDetails('IonBox',50000,'Ele',12)

listProducts()

removeProducts()

listProducts()