const name = "Sumit" // normal way to desclare string
const repoCount = 50

// console.log(name + " " + repoCount + " Value"); // outdated way 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // modern way 

const gameName = new String("Sumit") // second way to declare string and it return string object , when you declare wiht new keyword , you can use string methods

// ----------------------------------------------------------------
// 1. charAt(index)
// Returns the character at the specified index.
const str1 = "Hello";
console.log(str1.charAt(1)); // Output: "e"

// 2. concat(...strings)
// Combines two or more strings and returns a new string.
const str2 = "Hello";
const str3 = " World";
console.log(str2.concat(str3)); // Output: "Hello World"

// 3. includes(searchString)
// Checks if the string contains the specified substring, returning true or false.
const str4 = "Hello World";
console.log(str4.includes("World")); // Output: true

// 4. indexOf(searchValue)
// Returns the index of the first occurrence of the specified value, or -1 if not found.
const str5 = "Hello World";
console.log(str5.indexOf("o")); // Output: 4

// 5. lastIndexOf(searchValue)
// Returns the index of the last occurrence of the specified value, or -1 if not found.
const str6 = "Hello World";
console.log(str6.lastIndexOf("o")); // Output: 7

// 6. length
// Returns the number of characters in the string.
const str7 = "Hello";
console.log(str7.length); // Output: 5

// 7. slice(start, end)
// Extracts a section of the string and returns it as a new string.
const str8 = "Hello World";
console.log(str8.slice(0, 5)); // Output: "Hello"

// 8. split(separator)
// Splits the string into an array of substrings based on the specified separator.
const str9 = "Hello World";
console.log(str9.split(" ")); // Output: ["Hello", "World"]

// 9. toLowerCase()
// Converts the string to lowercase.
const str10 = "Hello World";
console.log(str10.toLowerCase()); // Output: "hello world"

// 10. toUpperCase()
// Converts the string to uppercase.
const str11 = "Hello World";
console.log(str11.toUpperCase()); // Output: "HELLO WORLD"

// 11. trim()
// Removes whitespace from both ends of the string.
const str12 = "   Hello World   ";
console.log(str12.trim()); // Output: "Hello World"

// 12. replace(searchValue, newValue)
// Replaces the first occurrence of a specified value with a new value.
const str13 = "Hello World";
console.log(str13.replace("World", "JavaScript")); // Output: "Hello JavaScript"

// 13. repeat(count)
// Returns a new string containing the specified number of copies of the original string.
const str14 = "Hello";
console.log(str14.repeat(3)); // Output: "HelloHelloHello"

// 14. startsWith(searchString)
// Checks if the string starts with the specified substring, returning true or false.
const str15 = "Hello World";
console.log(str15.startsWith("Hello")); // Output: true

// 15. endsWith(searchString)
// Checks if the string ends with the specified substring, returning true or false.
const str16 = "Hello World";
console.log(str16.endsWith("World")); // Output: true

// 16. substring(start, end)
// Returns a new string that contains the characters in the string from the start index up to (but not including) the end index.
const str17 = "Hello World";
console.log(str17.substring(0, 5)); // Output: "Hello"
console.log(str17.substring(6));    // Output: "World"

// 17. padStart(targetLength, padString)
// Pads the current string with another string (padString) until the resulting string reaches the given target length.
const str18 = "5";
console.log(str19.padStart(2, "0")); // Output: "05"

// 18. padEnd(targetLength, padString)
// Pads the current string with another string (padString) until the resulting string reaches the given target length.
const str19 = "5";
console.log(str20.padEnd(2, "0")); // Output: "50"

// 19. localeCompare(compareString)
// Compares two strings in the current locale and returns a number indicating whether the reference string comes before, after, or is the same as the given string.
const str20 = "apple";
const str21 = "banana";
console.log(str21.localeCompare(str22)); // Output: -1 (because "apple" comes before "banana")

// 20. valueOf()
// Returns the primitive value of a String object.
const str22 = new String("Hello");
console.log(str22.valueOf()); // Output: "Hello" 

// 21. toString()
// Returns a string representing the specified object.
const str23 = new String("Hello");
console.log(str23.toString()); // Output: "Hello"

// 22. normalize(form)
// Returns the Unicode Normalization Form of a given string.
const str24 = "ä";
console.log(str24.normalize("NFC")); // Output: "ä" (NFC is the Unicode Normalization Form C)

// 23. match(regexp)
// Executes a search for a match in a string against a regular expression.
const str25 = "Hello World";
const regex1 = /World/;
console.log(str25.match(regex1)); // Output: ["World", index: 6, input: "Hello World", groups: undefined]

// 24. search(regexp)
// Executes a search for a match in a string against a regular expression.
const str26 = "Hello World";
const regex2 = /World/;
console.log(str26.search(regex2)); // Output: 6

// 25. matchAll(regexp)
// Returns an iterator that yields matches of the regular expression against the string.
const str27 = "Hello World";
const regex3 = /\w+/g;
for (const match of str27.matchAll(regex3)) {
  console.log(match);
}
// Output:
// ["Hello", index: 0, input: "Hello World", groups: undefined]
// ["World", index: 6, input: "Hello World", groups: undefined]