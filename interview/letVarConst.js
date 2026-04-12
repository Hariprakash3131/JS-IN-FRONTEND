if(true){
    var x=10
    let y=20
    const z=30
}

console.log(x)  //10
//console.log(y)  //Reference Error
//console.log(z)   //Reference Error


for(var i=0;i<3;i++){
    setTimeout(()=>{
        console.log("var:",i)
    },0)
}

// var: 3
// var: 3
// var: 3


for(let j=0;j<4;j++){
    setTimeout(()=>{
        console.log('Let:',j)
    },2000)
}


// Let: 0
// Let: 1
// Let: 2
// Let: 3


const user={name:"Sarath"}

user.name="Surya"
console.log(user.name)  //surya
