let find=[45,55,49,25,45,63,56,85,48,96]
find.sort()
console.log(find)
let removeDuplicate=[...new Set(find)]
console.log(removeDuplicate[0])
removeDuplicate.reverse()
console.log(removeDuplicate[0])