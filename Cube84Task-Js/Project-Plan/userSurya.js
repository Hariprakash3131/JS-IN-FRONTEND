let details=[]

function usersDetails(userName,userAge,userNumber,userGender){
       let user={
        id:details.length+1,
        name:userName,
        age:userAge,
        number:userNumber,
        user:userGender
       }

       details.push(user)
       console.log("User Details Completed",userName)
}

function listUsers(){
    console.log("All Users")
    console.log(details)
}

usersDetails('Sarath',40,6382947727,'Male')
usersDetails('Subash',22,8122763956,'Male')


listUsers()         