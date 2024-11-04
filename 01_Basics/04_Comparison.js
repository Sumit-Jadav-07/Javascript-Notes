// Basic Comparisons
console.log("Basic Comparisons:");
console.log(2 > 1);    // true
console.log(2 >= 1);   // true
console.log(2 < 1);    // false
console.log(2 == 1);   // false
console.log(2 != 1);   // true

// Comparisons with Different Types
console.log("\nComparisons with Different Types:");
console.log("2" > 1);      // true, string "2" is converted to number 2
console.log("02" > 1);     // true, string "02" is converted to number 2

// Null and Undefined Comparisons
console.log("\nNull and Undefined Comparisons:");
console.log(null > 0);     // false, null is not greater than 0
console.log(null == 0);    // false, null is only loosely equal to undefined, not 0
console.log(null >= 0);    // true, null is treated as 0 in comparisons

/*
Explanation:
- Equality checks (`==`) and comparisons (`>`, `<`, `>=`, `<=`) handle null and undefined differently.
- Comparisons convert `null` to 0, which is why `null >= 0` is true but `null > 0` is false.
*/

console.log(undefined > 0);    // false, undefined is incomparable with numbers
console.log(undefined == 0);   // false, undefined is only equal to null, not 0
console.log(undefined >= 0);   // false, undefined is incomparable with numbers
console.log(undefined < 0);    // false, undefined is incomparable with numbers
console.log(undefined <= 0);   // false, undefined is incomparable with numbers

// Strict Equality (===)
console.log("\nStrict Equality (===):");
console.log("2" === 1);    // false, different types
console.log(1 === 2);      // false, different values
console.log(1 === 1);      // true, same type and value

/*
Triple Equal (===):
- `===` checks for both type and value equality.
- Unlike `==`, it does not perform type coercion.
*/

console.log("\nComparison Summary:");
console.log("Using `==` checks for loose equality (type conversion allowed), while `===` checks for strict equality (no type conversion).");

