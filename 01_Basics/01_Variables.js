// Demonstrating different ways to declare variables in JavaScript

// Constants and variables with different keywords
const accountId = 144553;  // Constant, cannot be reassigned
let accountEmail = "sumitroyaltechnosoft7@gmail.com";  // Variable declared with 'let', can be reassigned
var accountPassword = "12345";  // Variable declared with 'var', can be reassigned
accountCity = "Ahmedabad";  // Implicitly declared (not recommended), can lead to global scope issues
let accountState;  // Declared but undefined

// Attempting reassignment
// accountId = 2; // This line would cause an error, as 'const' variables cannot be reassigned

// Reassigning other variables
accountEmail = "sumitjadav07@gmail.com";
accountPassword = "678910";
accountCity = "Vadodara";

// Important Note:
// It's recommended not to use 'var' due to its function scope and potential issues with block scope.
// 'let' and 'const' are preferred as they follow block-scoping rules.

// Displaying variable values
console.log("Account ID:", accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);  // Displaying variables in tabular format

// Variable Declaration Best Practices:
// 1. Use 'const' for values that should not change.
// 2. Use 'let' for variables that may change.
// 3. Avoid using 'var' to prevent scope-related issues.
// 4. Always declare variables explicitly to avoid unintentional global scope pollution.

// Interview Questions:
// 1. What is the difference between 'var', 'let', and 'const' in JavaScript?
// 2. Why is it recommended to avoid 'var' in modern JavaScript development?
// 3. How does block scope differ between 'var' and 'let'?
// 4. What happens if you try to reassign a 'const' variable?
// 5. How can you display multiple variable values in a tabular format using console.table()?
