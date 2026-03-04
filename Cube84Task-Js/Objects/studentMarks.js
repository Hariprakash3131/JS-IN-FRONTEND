const student={
    name:'Sarath',
    age:'26',
    marks:{tamil:30,eng:30,maths:30,}
}
const total=student.marks.tamil+student.marks.eng+student.marks.maths
console.log(total)

const avg=total/3
console.log(avg)

if(avg>=40){
    console.log('Pass')
}
else{
    console.log('Fail')
}