const {createUsersId}=require('./utils')

let users=[]

let emailCheck=new Set()

function addUsers(name,email,role){
    if(emailCheck.has(email)){
        throw new error ("This email Id already exists")
    }

    const user={
        id:createUsersId(),
        name,
        email,
        role,
        isActive: true 
    }
    users.push(user)
    emailCheck.add(email)
    console.log('User Created:',name)
}

function listUsers(){
    console.log("ALL Users")
    users.forEach((u)=>{
        console.log(u)
    })
}


function findUserId(id){
    return users.find((user)=>user.id===id)
}

function getUsers(){
    return users
}

module.exports={
    addUsers,
    listUsers,
    findUserId,
    getUsers
}