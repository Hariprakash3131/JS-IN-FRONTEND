function fetchUsers(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("User Data Fetch")
        },2000)
    })
}

function fetchOrders(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Order Data Fetch')
        },2000)
    })
}

async function getData(){
    let user=await fetchUsers()
    console.log(user)

    let order=await fetchOrders()
    console.log(order)
}

getData()


