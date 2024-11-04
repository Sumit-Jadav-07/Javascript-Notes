
// Demonstration of various array methods and features in JavaScript.

// Creating Marvel and DC arrays
const marvel = ["Thor", "Ironman", "Spiderman"];
const dc = ["Superman", "Batman", "Flash"];

// Adding an array within an array (nested array) using push
marvel.push(dc);
console.log("Marvel with DC as nested array:", marvel);
console.log("Accessing Batman in nested array:", marvel[3][1]);

// Concatenating two arrays using concat
const allHeros = marvel.concat(dc);
console.log("Concatenated Marvel and DC Heroes:", allHeros);

// Concatenating using the spread operator
const allHerosSpread = [...marvel, ...dc];
console.log("Concatenated using spread operator:", allHerosSpread);

// Flattening a deeply nested array
const anotherArray = [1, 2, 3, 4, [5, 6, 7], 7, [6, 7, [8, 9, 10]]];
const realAnotherArray = anotherArray.flat(Infinity);  // 'Infinity' flattens any level of nesting
console.log("Flattened array:", realAnotherArray);

// Array.isArray() to check if a variable is an array
console.log("Is 'Sumit' an array?", Array.isArray("Sumit"));
console.log("Is marvel an array?", Array.isArray(marvel));

// Array.from() - creates an array from an iterable or array-like object
console.log("Array from string 'Sumit':", Array.from("Sumit"));
console.log("Array from string 'Sumit' with uppercase transformation:", Array.from("Sumit", x => x.toUpperCase()));

// Using Array.from() on an object
console.log("Array from object with name property (invalid, returns empty array):", Array.from({name: "Sumit"}));

// Creating an array with specified length and values using Array.from()
console.log("Array of numbers from 0 to 4:", Array.from({length: 5}, (_, i) => i));

// Array.of() to create an array from arguments
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log("Array created from scores using Array.of():", Array.of(score1, score2, score3));

// Additional Important Array Methods:
// 1. Array.map(): Creates a new array by applying a function to each element.
// 2. Array.filter(): Filters elements based on a condition.
// 3. Array.reduce(): Accumulates values in an array to a single result.
// 4. Array.find(): Finds the first element that satisfies a condition.
// 5. Array.findIndex(): Returns the index of the first element that satisfies a condition.

// Array Interview Questions:
// 1. What is the difference between Array.push() and Array.concat()?
// 2. How can you flatten a nested array in JavaScript?
// 3. Explain the spread operator and how it’s used with arrays.
// 4. What is the purpose of Array.from()? When would you use it?
// 5. How does Array.flat() work, and what does the parameter Infinity do?
// 6. Describe Array.isArray() and give examples of its usage.

