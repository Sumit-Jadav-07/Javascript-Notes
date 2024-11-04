
// Array basics and common methods in JavaScript.

// Defining an array
const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log("Original Array:", myArr);
console.log("First element:", myArr[0]);
console.log("Second element:", myArr[1]);

// Creating another array
const myHeros = ["Shaktiman", "Hanuman"];
console.log("Array of heroes:", myHeros);

// Creating an array using Array constructor
const myArr2 = new Array(1, 2, 3, 4);
console.log("Array created using constructor:", myArr2);

// Adding and removing elements
myArr2.push("Shaktiman");  // Adds to the end
myArr2.push("Hanuman");
console.log("After pushing elements:", myArr2);

myArr2.pop();  // Removes last element
console.log("After pop:", myArr2);

myArr2.unshift(9);  // Adds to the start
console.log("After unshift (add 9 to start):", myArr2);

myArr2.shift();  // Removes the first element
console.log("After shift (remove first element):", myArr2);

// Checking if an element exists in an array
console.log("Does myArr2 include 9?", myArr2.includes(9));
console.log("Index of 9:", myArr2.indexOf(9));
console.log("Index of 3:", myArr2.indexOf(3));

// Joining array elements into a string
const newArray = myArr2.join();  // Joins elements with commas by default
console.log("Joined array (as string):", newArray);
console.log("Type of newArray:", typeof newArray);  // string

// Slice and Splice methods
console.log("Array before slice and splice:", myArr2);

// slice(start, end) - returns a new array with elements from start to end (excluding end)
const myNewArray1 = myArr2.slice(1, 3);
console.log("Result of slice(1,3):", myNewArray1);
console.log("Array after slice:", myArr2);  // Original array remains unchanged

// splice(start, deleteCount) - changes the array by removing or replacing elements
const myNewArray2 = myArr2.splice(1, 3);  // Removes 3 elements starting from index 1
console.log("Result of splice(1,3):", myNewArray2);
console.log("Array after splice:", myArr2);  // Original array is modified

// Additional Important Array Methods:
// 1. Array.forEach(): Executes a provided function once for each array element.
// 2. Array.some(): Checks if at least one element satisfies a condition.
// 3. Array.every(): Checks if all elements satisfy a condition.
// 4. Array.sort(): Sorts the elements of an array in place.
// 5. Array.reverse(): Reverses the elements of an array in place.

// Array Interview Questions:
// 1. What is the difference between push and unshift in JavaScript arrays?
// 2. How do you remove elements from an array using pop and shift?
// 3. Explain the difference between slice and splice in arrays.
// 4. How does join() work in JavaScript arrays, and what type does it return?
// 5. Describe methods to check if an element exists in an array and to find its index.

