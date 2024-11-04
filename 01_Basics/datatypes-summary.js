// Primitive datatypes -> call by value

// 7 types:
// 1. String: Represents a sequence of characters used for storing and manipulating text.
//    Example: 
let myString = "Hello, World!"; // String value
console.log(myString);

// 2. Number: Represents numeric values, including integers and floating-point numbers.
//    Example:
let myNumber = 42; // Integer value
let myFloat = 3.14; // Floating-point value
console.log(myNumber, myFloat);

// 3. Boolean: Represents a logical entity and can have two values: true or false.
//    Example:
let isTrue = true; // Boolean value
let isFalse = false; // Boolean value
console.log(isTrue, isFalse);

// 4. null: A special value representing the intentional absence of any object value.
//    Example:
let myNullValue = null; // Null value
console.log(myNullValue);

// 5. undefined: A type whose sole value is the primitive value undefined, indicating that a variable has been declared but has not yet been assigned a value.
//    Example:
let myUndefinedValue; // Undefined value (not initialized)
console.log(myUndefinedValue);

// 6. Symbol: A unique and immutable primitive value often used as the key for object properties, ensuring that property keys are unique.
//    Example:
let mySymbol1 = Symbol('description'); // Symbol value
let mySymbol2 = Symbol('description'); // Symbol value
console.log(mySymbol1 === mySymbol2); // false

// 7. BigInt: A numeric type that can represent integers with arbitrary precision, allowing for the representation of very large integers beyond the safe integer limit for Numbers.
//    Example:
let myBigInt = BigInt(1234567890123456789012345678901234567890); // BigInt value
let bigInt = 12345678998765432123456n;
console.log(myBigInt, bigInt);

// --------------------------------------------------------------------------------------------------------------------

// Reference types - Not Primitive

// 1. Array: A collection of elements, which can be of any type, ordered by index.
//    Example:
let myArray = [1, 2, 3, "four", true]; // Array with mixed types
console.log(myArray);

// 2. Object: A collection of key-value pairs, where values can be of any type.
//    Example:
let myObject = {
    name: "Alice",
    age: 30,
    isStudent: false
}; // Object with properties
console.log(myObject);

// 3. Function: A callable object that can be invoked to perform a task or compute a value.
//    Example:
function myFunction(param) {
    return param * 2;
}
let result = myFunction(5); // Calls the function and returns 10
console.log(result);

const myFunc = function(){
  console.log("Hello world");
}
myFunc();

// 4. Date: Represents dates and times, providing methods for date manipulation.
//    Example:
let myDate = new Date(); // Current date and time
let specificDate = new Date("2023-01-01"); // Specific date
console.log(myDate, specificDate);

// 5. RegExp: Represents regular expressions for pattern matching in strings, allowing for complex search patterns.
//    Example:
let myRegex = /hello/i; // Regular expression to match "hello" (case insensitive)
console.log(myRegex.test("Hello")); // true

// 6. Map: A collection of keyed data items, similar to an object but with keys of any type, maintaining insertion order.
//    Example:
let myMap = new Map();
myMap.set("key1", "value1");
myMap.set(2, "value2"); // Key can be of any type
console.log(myMap);

// 7. Set: A collection of unique values, where each value can only occur once.
//    Example:
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate value will not be added
console.log(mySet);

// 8. WeakMap: A collection of key-value pairs where keys are weakly referenced, allowing for garbage collection of keys.
//    Example:
let myWeakMap = new WeakMap();
let objKey = {};
myWeakMap.set(objKey, "value associated with objKey");
console.log(myWeakMap.get(objKey));

// 9. WeakSet: A collection of unique values where the values are weakly referenced, allowing for garbage collection of values.
//    Example:
let myWeakSet = new WeakSet();
let objValue = {};
myWeakSet.add(objValue); // objValue can be garbage collected if no other references exist
console.log(myWeakSet.has(objValue)); // true

// 10. Promise: Represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//    Example:
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!"); // Resolving the promise
    }, 1000);
});
myPromise.then(result => console.log(result)); // Logs "Success!" after 1 second

// 11. Error: Represents an error that occurs in a program, providing information about the error type and message.
//    Example:
let myError = new Error("Something went wrong!"); // Creating a new error
console.log(myError);

// 12. Typed Arrays: 
//    - Int8Array: An array of 8-bit signed integers.
//    - Uint8Array: An array of 8-bit unsigned integers.
//    - Uint8ClampedArray: An array of 8-bit unsigned integers clamped to 0-255.
//    - Int16Array: An array of 16-bit signed integers.
//    - Uint16Array: An array of 16-bit unsigned integers.
//    - Int32Array: An array of 32-bit signed integers.
//    - Uint32Array: An array of 32-bit unsigned integers.
//    - Float32Array: An array of 32-bit floating point numbers.
//    - Float64Array: An array of 64-bit floating point numbers.
//    - BigInt64Array: An array of 64-bit signed integers (BigInt).
//    - BigUint64Array: An array of 64-bit unsigned integers (BigInt).
//    Example:
let int8Array = new Int8Array([1, 2, -3]); // Int8Array example
console.log(int8Array);

// 13. DataView: An interface that provides a low-level way to read and write multiple number types in an ArrayBuffer.
//    Example:
let buffer = new ArrayBuffer(16);
let dataView = new DataView(buffer);
dataView.setInt8(0, 127); // Set an 8-bit signed integer at byte offset 0
console.log(dataView.getInt8(0)); // 127

// 14. ArrayBuffer: A generic, fixed-length binary data buffer that can be used to represent binary data.
//    Example:
let arrayBuffer = new ArrayBuffer(16); // Create an ArrayBuffer of 16 bytes
console.log(arrayBuffer);

// 15. TypedArray: A superclass of all the typed array types mentioned above, providing a mechanism to handle binary data in a more structured way.
//    Example:
let typedArray = new Uint8Array(arrayBuffer, buffer); // Create a TypedArray from an ArrayBuffer
console.log(typedArray);

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Two types of memory: Stack, Heap

// Stack: 
// - Memory allocation for primitive data types (e.g., String, Number, Boolean, null, undefined, Symbol, BigInt).
// - Operates in a Last In, First Out (LIFO) manner.
// - When a primitive value is assigned to a variable, a copy of that value is stored in the stack.
// - When the variable is passed to a function, a copy is passed (call by value).

// Example of Stack:
let a = 10; // 'a' holds the value 10 in stack
let b = a; // 'b' gets a copy of the value of 'a', which is 10
b = 20; // Changing 'b' does not affect 'a'
console.log(a); // Output: 10
console.log(b); // Output: 20

// Heap: 
// - Memory allocation for non-primitive data types (e.g., Objects, Arrays, Functions, etc.).
// - Stores references to the actual data in the heap memory.
// - When an object is assigned to a variable, the variable holds a reference to the original object in the heap.
// - When the variable is passed to a function, the reference is passed (call by reference).

// Example of Heap:
let obj1 = { name: "Alice" }; // 'obj1' holds a reference to the object in heap
let obj2 = obj1; // 'obj2' now references the same object as 'obj1'
obj2.name = "Bob"; // Changing the name property of 'obj2' affects 'obj1'
console.log(obj1.name); // Output: "Bob"
console.log(obj2.name); // Output: "Bob"
