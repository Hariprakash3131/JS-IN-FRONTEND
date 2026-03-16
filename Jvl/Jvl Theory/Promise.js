function getUsers(){
    return new Promise((resolve,reject)=>{
        let users=[];
        setTimeout(()=>{
            users=[
                {username:"Hari",email:"harip162931@gamil.com"},
                {username:'James',email:"JamesSoker@gmail.com"},
            ];
            resolve(users);
        },1000)
        return users;

    })
}
function findUser(username){
    getUsers().then((users)=>{
        const user=users.find((user)=>user.username===username);
        console.log(user)
    })
}

console.log(findUser("James"))