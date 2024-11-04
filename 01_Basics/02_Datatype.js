"use strict"; // Treat all JS code as newer version

// console.log("Hello, world!"); // Uncomment in a browser, not for Node.js

console.log("         Hello, world!          ");
console.log("================================");

let name = "Hello, world!";
let age = 21;
let isLoggenIn = false;

console.log("\nNumber datatype : ");
console.log(12345);          // integer
console.log(123.45);         // float
console.log(123e-5);         // scientific notation (123 * 10^-5)
console.log(123e+5);         // scientific notation (123 * 10^5)
console.log(0b101);          // binary (5 in decimal)
console.log(0o123);          // octal (83 in decimal)
console.log(0x7f);           // hexadecimal (127 in decimal)

console.log("\nBig Integer : ");
console.log(BigInt(12345678901234567890));  // Large integer for very high values

console.log("\nString datatype : ");
console.log('Hello, world!');             // single quotes
console.log("Hello, world!");             // double quotes
console.log(`Hello, world!`);             // template literals

console.log("\nBoolean datatype : ");
console.log(true);                       // boolean true
console.log(false);                      // boolean false

console.log("\nNull datatype : ");
console.log(null);                       // null as a standalone value

console.log("\nUndefined datatype : ");
console.log(undefined);                  // undefined variable or not yet assigned

console.log("\nSymbol datatype : ");
console.log(Symbol('Hello, world!'));    // symbol as a unique identifier

console.log("\nObject datatype : ");
console.log({ name: 'John Doe', age: 30 }); // object literal

// Type Checking
console.log();
console.log(typeof "Sumit");             // string
console.log(typeof null);                // object (historical JavaScript quirk)
console.log(typeof undefined);           // undefined

// Important Concepts:
// - "use strict"; enforces stricter parsing and error handling for cleaner code.
// - `typeof` provides the data type of a variable or literal.
// - `BigInt` handles large integers that exceed `Number` limits.
// - `Symbol` creates unique identifiers, often used as object keys.
// - `null` is a standalone value, but `typeof null` shows 'object' due to a legacy bug.

// Interview Questions:
// 1. What does "use strict" do in JavaScript?
// 2. What is the purpose of BigInt in JavaScript?
// 3. Why does `typeof null` return 'object'?
// 4. What is the use of `Symbol` in JavaScript?
// 5. Explain the difference between `null` and `undefined`.
