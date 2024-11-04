// Primitive Number
const score = 400;
console.log("Score:", score); // Output: 400

// =================================================================

// Creating a Number object
const balance = new Number(400);
console.log("Balance Object:", balance); // Output: [Number: 400]
console.log("Primitive Value of Balance:", balance.valueOf()); // Output: 400

// Checking the type
console.log("Type of Balance:", typeof balance); // Output: "object"
console.log("Type of Score:", typeof score);    // Output: "number"

// =================================================================

// Number Formatting
console.log("Balance to Fixed (1 decimal):", balance.toFixed(1)); // Output: "400.0"
console.log("Length of Balance String:", balance.toString().length); // Output: 4

const otherNum = 123.8966;
console.log("Other Number to Precision (4 digits):", otherNum.toPrecision(4)); // Output: "123.9"

const hundreds = 1000000;
console.log("Hundreds in Locale String (IN):", hundreds.toLocaleString('en-IN')); // Output: "10,00,000"

// =================================================================

// Number Properties
console.log("Number.EPSILON:", Number.EPSILON); // Output: 2.220446049250313e-16
console.log("Number.MAX_VALUE:", Number.MAX_VALUE); // Output: 1.7976931348623157e+308
console.log("Number.MIN_VALUE:", Number.MIN_VALUE); // Output: 5e-324
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // Output: -9007199254740991
console.log("Number.NaN:", Number.NaN); // Output: NaN
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY); // Output: -Infinity
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY); // Output: Infinity

// =================================================================

// Number Methods
console.log("Is Finite (400):", Number.isFinite(400)); // Output: true
console.log("Is Finite (Infinity):", Number.isFinite(Infinity)); // Output: false
console.log("Is Integer (400):", Number.isInteger(400)); // Output: true
console.log("Is Integer (400.5):", Number.isInteger(400.5)); // Output: false
console.log("Is NaN (NaN):", Number.isNaN(NaN)); // Output: true
console.log("Is Safe Integer (400):", Number.isSafeInteger(400)); // Output: true
console.log("Is Safe Integer (9007199254740992):", Number.isSafeInteger(9007199254740992)); // Output: false

// Parsing Numbers
console.log("Parse Float from String (\"400.5\"):", Number.parseFloat("400.5")); // Output: 400.5
console.log("Parse Int from String (\"400\", radix 10):", Number.parseInt("400", 10)); // Output: 400
console.log("Parse Int from String (\"400.5\", radix 10):", Number.parseInt("400.5", 10)); // Output: 400
console.log("Parse Int from Binary String (\"101\", radix 2):", Number.parseInt("101", 2)); // Output: 5

// =================================================================

// Trimming and Parsing
const numString = "  123.45  ";
const parsedNum = Number.parseFloat(numString.trim());
console.log("Parsed Number from Trimmed String:", parsedNum); // Output: 123.45

const isSafe = Number.isSafeInteger(parsedNum);
console.log("Is Parsed Number Safe Integer?:", isSafe); // Output: true

const largeNum = 9007199254740992; // 2^53
console.log("Is Large Number Safe Integer?:", Number.isSafeInteger(largeNum)); // Output: false

// +++++ Math +++++
console.log("\nMath Object:", Math);
console.log("Math.PI:", Math.PI);
console.log("Absolute Value of -4:", Math.abs(-4)); // Output: 4
console.log("Round 4.3:", Math.round(4.3)); // Output: 4
console.log("Round 4.6:", Math.round(4.6)); // Output: 5
console.log("Ceil 4.2:", Math.ceil(4.2)); // Output: 5
console.log("Floor 4.9:", Math.floor(4.9)); // Output: 4
console.log("Square Root of 25:", Math.sqrt(25)); // Output: 5
console.log("Minimum of (4, 5, 6, 7, 8, 10):", Math.min(4, 5, 6, 7, 8, 10)); // Output: 4
console.log("Maximum of (4, 5, 6, 7, 8, 10):", Math.max(4, 5, 6, 7, 8, 10)); // Output: 10

// Generating Random Numbers
console.log("Random Number (0 to 1):", Math.random()); // value within 0 to 1
console.log("Random Number (0 to 10):", Math.random() * 10);
console.log("Random Number (1 to 10):", (Math.random() * 10) + 1);

// Random Number within a Range
const min = 10;
const max = 20;
console.log("Random Number between 10 and 20:", Math.floor(Math.random() * (max - min + 1)) + min);
