// Type Conversion and Checking

let score = "33abc";  // Try different values like null, undefined, "undefined"
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
console.log("Converted to Number:", valueInNumber); // Output: NaN (Not a Number)
console.log("Type:", typeof valueInNumber);

/*
Conversion Examples:
- "33" -> 33
- "33abc" -> NaN
- true -> 1
- false -> 0
*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log("Boolean Conversion:", booleanIsLoggedIn);

/*
Boolean Conversion:
- 1 -> true; 0 -> false
- "" -> false
- "Sumit" -> true
*/

let someNumber = 33;
let stringNumber = String(someNumber);
console.log("Converted to String:", stringNumber);
console.log("Type:", typeof stringNumber);

console.log("\nLecture - 2 -------------------------");
console.log("********** Operations ****************");

// Unary and Basic Arithmetic Operators
let value = 3;
let negValue = -value;
console.log("Negative Value:", negValue);

// Basic Arithmetic
console.log("Addition (2 + 2):", 2 + 2);
console.log("Subtraction (2 - 2):", 2 - 2);
console.log("Multiplication (2 * 2):", 2 * 2);
console.log("Division (2 / 2):", 2 / 2);
console.log("Modulus (2 % 2):", 2 % 2);
console.log("Exponentiation (2 ** 2):", 2 ** 2); // 2 to the power of 2
console.log("Exponentiation (2 ** 3):", 2 ** 3); // 2 to the power of 3
console.log("Square Root (2 ** 0.5):", 2 ** 0.5); // Square root of 2

// String Concatenation
let str1 = "Sumit";
let str2 = " Jadav";
let str3 = str1 + str2;
console.log("String Concatenation:", str3);

// Mixed-Type Operations
console.log('1' + 2);       // "12"
console.log(1 + "8");        // "18"
console.log(1 + 1 + "8");    // "28"
console.log("1" + 1 + 8);    // "118"

// Order of Operations
console.log("Without Parentheses:", 3 + 4 * 5 % 3); // 3 + ((4 * 5) % 3)
console.log("With Parentheses:", (3 + 4) * 5 % 3); // Preferred way for clarity

// Unary Plus with Conversion
console.log("Unary Plus (true):", +true); // Converts true to 1
console.log("Unary Plus (empty string):", +""); // Converts empty string to 0

// Assignment Chaining
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.table([num1, num2, num3]); // All are set to 4

// Increment/Decrement Operators
let gameCounter = 100;
++gameCounter;  // Prefix increment
gameCounter++;  // Postfix increment
console.log("Final Game Counter:", gameCounter); // 102

