const company = [
    {name:"Sarath", role:'user'},
    {name:'Surya', role:'admin'},
    {name:'Subash', role:'manager'},
    {name:'Thilakar', role:"user"},
    {name:'Mannan', role:"admin"},
    {name:'Thamu', role:"admin"}
]

const groups = {
    admin: [],
    user: [],
    manager: []
}

company.forEach(com=>{

    if(com.role === 'user'){
        groups.user.push(com)
    }
    else if(com.role === 'admin'){
        groups.admin.push(com)
    }
    else if(com.role === 'manager'){
        groups.manager.push(com)
    }

})

console.log(groups)