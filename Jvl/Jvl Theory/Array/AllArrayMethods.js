// 🌟 ALL ARRAY METHODS IN ONE PROGRAM 🌟

console.log("=== ARRAY METHODS EXAMPLES ===");

// 1️⃣ CREATE ARRAY
let numbers = [10, 20, 30, 40, 50];
console.log("Original Array:", numbers);

// 2️⃣ PUSH - Add element to END
numbers.push(60);
console.log("After push(60):", numbers);

// 3️⃣ POP - Remove element from END
numbers.pop();
console.log("After pop():", numbers);

// 4️⃣ UNSHIFT - Add element to BEGINNING
numbers.unshift(5);
console.log("After unshift(5):", numbers);

// 5️⃣ SHIFT - Remove element from BEGINNING
numbers.shift();
console.log("After shift():", numbers);

// 6️⃣ CONCAT - Combine two arrays
let moreNumbers = [60, 70, 80];
let combined = numbers.concat(moreNumbers);
console.log("After concat:", combined);

// 7️⃣ SLICE - Copy a portion
let sliced = combined.slice(2, 5);
console.log("Sliced (2,5):", sliced);

// 8️⃣ SPLICE - Add/Remove elements
combined.splice(2, 2, 55);
console.log("After splice(2,1,999):", combined);

// 9️⃣ INDEXOF & LASTINDEXOF
console.log("Index of 40:", combined.indexOf(40));
combined.push(40);
console.log("Last Index of 40:", combined.lastIndexOf(40));

// 🔟 INCLUDES - Check if exists
console.log("Includes 70?", combined.includes(70));

// 1️⃣1️⃣ FIND - Returns first element matching condition
let found = combined.find(num => num > 50);
console.log("Find > 50:", found);

// 1️⃣2️⃣ FINDINDEX - Returns index of first matching element
let findIndex = combined.findIndex(num => num > 50);
console.log("FindIndex > 50:", findIndex);

// 1️⃣3️⃣ FILTER - Filter elements
let filtered = combined.filter(num => num > 30);
console.log("Filter > 30:", filtered);

// 1️⃣4️⃣ MAP - Transform array
let mapped = combined.map(num => num * 2);
console.log("Map (*2):", mapped);

// 1️⃣5️⃣ REDUCE - Sum all numbers
let sum = combined.reduce((acc, curr) => acc + curr, 0);
console.log("Reduce (sum):", sum);

// 1️⃣6️⃣ SOME - Check if any element meets condition
console.log("Some > 70:", combined.some(num => num > 70));

// 1️⃣7️⃣ EVERY - Check if all elements meet condition
console.log("Every > 0:", combined.every(num => num > 0));

// 1️⃣8️⃣ SORT - Sort elements
let sorted = [...combined].sort((a, b) => a - b);
console.log("Sorted (ascending):", sorted);

// 1️⃣9️⃣ REVERSE - Reverse array
let reversed = [...sorted].reverse();
console.log("Reversed:", reversed);

// 2️⃣0️⃣ FLAT - Flatten nested arrays
let nested = [1, [2, [3, 4]]];
console.log("Flat(2):", nested.flat(2));

// 2️⃣1️⃣ JOIN - Join array into string
console.log("Join with '-':", combined.join("-"));

// 2️⃣2️⃣ TOSTRING - Convert to string
console.log("ToString():", combined.toString());

// 2️⃣3️⃣ FOREACH - Loop through array
console.log("ForEach:");
combined.forEach((num, index) => console.log(`Index ${index}: ${num}`));

// 2️⃣4️⃣ FILL - Fill all with same value
let fillArray = new Array(5).fill(0);
console.log("Fill(0):", fillArray);

// 2️⃣5️⃣ FROM - Create array from iterable
let fromExample = Array.from("Hello");
console.log("Array.from('Hello'):", fromExample);

// 2️⃣6️⃣ ISARRAY - Check if variable is an array
console.log("IsArray:", Array.isArray(combined));

// 2️⃣7️⃣ KEYS / VALUES / ENTRIES
console.log("Keys:", [...combined.keys()]);
console.log("Values:", [...combined.values()]);
console.log("Entries:", [...combined.entries()]);

// 2️⃣8️⃣ COPYWITHIN
let copyWithinExample = [1, 2, 3, 4, 5];
copyWithinExample.copyWithin(0, 3, 5);
console.log("CopyWithin(0,3,5):", copyWithinExample);

// 2️⃣9️⃣ AT - Access element by position (supports negatives)
console.log("At(-1):", combined.at(-1));

console.log("=== END OF ARRAY METHODS ===");
