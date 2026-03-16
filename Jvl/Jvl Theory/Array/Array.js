// An array to store 
// multiple values in a single variable,
// accessed by index.

let arrayName=['red','green',1,2,3,true,false,{Name:"James"}]
console.log(arrayName);//[ 'red', 'green', 1, 2, 3, true, false, { Name: 'James' } ]
console.log(arrayName.length);//8
//If you create a Array that time use () bracket
let arr1=new Array("James","Potter"); 
console.log(arr1); 
console.log(arr1[1]);  //Potter
console.log(arr1[0]);  //James
arr1[2]="Modi ji"
console.log(arr1);    //  [ 'James', 'Potter', 'Modi ji' ]