
// Simple demonstration of JavaScript objects and key object methods.

// Defining a unique Symbol as a key
const mySymbol = Symbol("Key1");

// Creating an object with different properties and methods
const JsUser = {
  name: 'Sumit',
  fullName: 'Sumit Jadav',
  [mySymbol]: 'MyKey1',
  age: 25,
  email: 'sumitroyaltechnosoft7@gmail.com',
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
};

// Accessing object properties
console.log("Using dot notation:", JsUser.name);
console.log("Using bracket notation:", JsUser['fullName']);
console.log("Using symbol key:", JsUser[mySymbol]);

// Adding a new property
JsUser.city = 'Ahmedabad';
console.log("After adding city property:", JsUser.city);

// Using Object.freeze to make the object immutable
Object.freeze(JsUser);
JsUser.email = "sumitjadav680@gmail.com";  // This change will not reflect
console.log("After trying to change frozen email property:", JsUser.email);

// Important Object Methods
console.log("Keys of JsUser:", Object.keys(JsUser));
console.log("Values of JsUser:", Object.values(JsUser));
console.log("Entries of JsUser:", Object.entries(JsUser));
console.log("Does JsUser have 'age' property?", JsUser.hasOwnProperty('age'));

// Calling the greet method
console.log(JsUser.greet); // will print reference of greet function
JsUser.greet();

JsUser.hello = function(){
  console.log(`Hello! ${JsUser.fullName}`);
}

JsUser.hello() // Note that you cant declare function after using freeze function

// Interview Questions related to JavaScript Objects:
// 1. What are JavaScript objects, and how do they differ from primitive data types?
// 2. How do you create and access properties in a JavaScript object?
// 3. Explain the difference between dot notation and bracket notation.
// 4. What is the purpose of Object.freeze()? What is its effect on an object?
// 5. How do Symbols work in JavaScript, and how are they used in objects?
// 6. How can you iterate over the properties of a JavaScript object?

