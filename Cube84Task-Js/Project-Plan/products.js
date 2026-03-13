let products=[]

function productsDetails(proName,proPrice,proCategory,proStock){
    let product={
        id:products.length+1,
        name:proName,
        price:proPrice,
        category:proCategory,
        stock:proStock,

    }
    products.push(productsDetails)
    console.log('Product Added:',proName)
}