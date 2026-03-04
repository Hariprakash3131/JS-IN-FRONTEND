const users=[
    {id:123,name:'Kumar',isActive:true},
    {id:1234,name:'Sarath',isActive:false},
    {id:12345,name:'Sathish',isActive:true}
]

users.forEach(user=>{
    if(user.isActive){
        console.log(user)  
    }
})

let count=0
users.forEach(user=>{
    if(user.isActive===false){
        count++
    }
})

console.log('Total User Active:',count)