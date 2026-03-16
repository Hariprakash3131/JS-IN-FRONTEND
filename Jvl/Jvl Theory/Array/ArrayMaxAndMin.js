let find=[23,56,67,86,34,86]
find.sort()
console.log(find)
let max=[...new Set(find)]
console.log("Minimum:",max[0])
max.reverse()
console.log("Maximum:",max[0])
