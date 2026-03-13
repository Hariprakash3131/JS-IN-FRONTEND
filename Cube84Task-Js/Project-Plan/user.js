let person=[]

function personDetailsAdd(pname,page,pnumber){
    let personDetails={
         id:person.length+1,
         name:pname,
         age:page,
         number:pnumber

}

person.push(personDetails)
console.log('Created User',pname)
}

function listUsers(){
    console.log("All Users")
    console.log(person)
}
personDetailsAdd("John","john@gmail.com","Developer")
personDetailsAdd("Sarah","sarah@gmail.com","Designer")

listUsers()