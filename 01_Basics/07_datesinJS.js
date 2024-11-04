// Creating a date object using a specific date string
let myCreatedDate = new Date("01-14-2023"); // Note: Month is 0-indexed in JS
console.log("Created Date:", myCreatedDate.toDateString()); // Outputs the date in a human-readable format

// Current date and time
let myDate = new Date();
console.log("\nCurrent Date and Time:", myDate);
console.log("String Representation:", myDate.toString());
console.log("Date String:", myDate.toDateString());
console.log("ISO String:", myDate.toISOString()); // Standardized format for date
console.log("Locale String:", myDate.toLocaleString()); // Localized format
console.log("JSON Representation:", myDate.toJSON()); // JSON format
console.log("Type of myDate:", typeof myDate); // Object type

// Getting the current timestamp
let myTimeStamp = Date.now(); // Returns the number of milliseconds since Jan 1, 1970
console.log("\nCurrent Timestamp (ms since 1970):", myTimeStamp);
console.log("Created Date Timestamp:", myCreatedDate.getTime()); // Timestamp of myCreatedDate
console.log("Current Timestamp (seconds since 1970):", Math.floor(Date.now() / 1000)); // Converts to seconds

// Getting month and year from current date
let newDate = new Date();
console.log("\nCurrent Month and Year:", (newDate.getMonth() + 1) + ' ' + newDate.getFullYear()); // Month is 0-indexed

// Getting the current weekday in a localized format
console.log("\nCurrent Day of the Week:", newDate.toLocaleString('default', {
  weekday: 'long', // Full name of the day
}));

// Additional Date Methods
console.log("\nAdditional Date Methods:");
console.log("getFullYear():", myDate.getFullYear()); // Gets the year (4 digits)
console.log("getMonth():", myDate.getMonth()); // Gets the month (0-11)
console.log("getDate():", myDate.getDate()); // Gets the day of the month (1-31)
console.log("getDay():", myDate.getDay()); // Gets the day of the week (0-6)
console.log("getHours():", myDate.getHours()); // Gets the hour (0-23)
console.log("getMinutes():", myDate.getMinutes()); // Gets the minutes (0-59)
console.log("getSeconds():", myDate.getSeconds()); // Gets the seconds (0-59)
console.log("getMilliseconds():", myDate.getMilliseconds()); // Gets the milliseconds (0-999)

// Modifying Date
myDate.setFullYear(2024);
myDate.setMonth(11); // December (11)
myDate.setDate(25); // 25th day of the month
console.log("\nModified Date:", myDate.toDateString());
