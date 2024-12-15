// question 01 Global Scope
// var a = 10;
// let b = 20;
// const c = 30;

// console.log(a,b,c); 
// output: 10,20,30  they all are accessible globally


// question 02 Function Scope
// function myFunction() {
//         var a = 10;
//         let b = 20;
//         const c = 30;
//     }
//     console.log(a,b,c);
    
//     myFunction();
// they are not accessible outside the function


// / Question 03: Block Scope
// if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }
// console.log(a);
// console.log(b);
// console.log(c);
// Output: 10 (var is function scoped), ReferenceError for b and c (block scoped).


// Question 04: Hoisting with var
// console.log(a);
// var a = 10;
// Output: undefined - Variable is hoisted but not initialized.


// Question 05: Hoisting with let and const
// console.log(b);
// let b = 20;
// console.log(c);
// const c = 30;
// Output: ReferenceError 


// Question 06: Re-declaration
// var x = 10;
// var x = 20; // No error.

// let y = 30;
// // let y= 40; // SyntaxError.

// const z = 50;
// const z = 60; // SyntaxError.
// Output: var allows re-declaration, let and const do not.


// Question 07: Re-assignment
// var a = 10;
// a = 20; // Allowed.

// let b = 30;
// b = 40; // Allowed.

// const c = 50;
// c = 60; // TypeError.
// Output: var and let allow re-assignment, const does not.



// Question 08: Temporal Dead Zone
// {
//     console.log(a);
//     let a = 10;
//     console.log(b);
//     const b = 20;
// }
// Output: ReferenceError - Variables are accessed before declaration.


// Question 09: When to use var, let, and const
// var: Use for global or function-scoped variables (avoid if possible).
// let: Use for block-scoped variables that may change.
// const: Use for constants or block-scoped variables that won’t change.


// Question 10: String Interpolation
// const firstName = "John";
// const lastName = "Doe";
// console.log(`Full Name: ${firstName} ${lastName}`);
// // Output: Full Name: John Doe


// // Question 11: Multi-line Strings
// const address = `123 Main Street
// Cityville, USA`;
// console.log(address);
// // Output: Multi-line string with new lines.


// // Question 12: Simple Expressions
// const num1 = 5;
// const num2 = 10;
// console.log(`Sum: ${num1 + num2}`);
// // Output: Sum: 15

// // Question 13: Function Calls
// function multiply(a, b) {
//     return a * b;
// }
// console.log(`Product: ${multiply(5, 3)}`);
// // Output: Product: 15

// // Question 14: Tagged Templates
// function tag(strings, ...values) {
//     console.log(strings, values);
// }
// tag`Hello ${"World"}!`;
// // Output: ["Hello ", "!"] ["World"]

// // Question 15: Formatting
// function uppercase(strings, ...values) {
//     return strings.reduce((result, str, i) => result + str + (values[i] || "").toUpperCase(), "");
// }
// console.log(uppercase`Hello ${"world"}!`);
// // Output: Hello WORLD!

// // Question 16: Conditional Logic
// const hour = 10;
// console.log(`Good ${hour < 12 ? "morning" : "afternoon"}!`);
// // Output: Good morning!

// // Question 17: Loops within Template Literals
// const items = ["Apple", "Banana", "Cherry"];
// console.log(`<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`);
// // Output: <ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>

// // Question 18: Escaping Backticks
// console.log(`This is a backtick: \``);
// // Output: This is a backtick: `

// // Question 19: Nested Template Literals
// const table = `<table>
//   ${[1, 2].map(row => `<tr>${["A", "B"].map(cell => `<td>${row}${cell}</td>`).join("")}</tr>`).join("")}
// </table>`;
// console.log(table);
// // Output: <table><tr><td>1A</td><td>1B</td></tr><tr><td>2A</td><td>2B</td></tr></table>

// // Question 20: Simple Condition
// const age = 20;
// const canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote);
// // Output: Yes

// // Question 21: Even or Odd
// const number = 7;
// const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
// console.log(evenOrOdd);
// // Output: Odd

// // Question 22: Grade Evaluation
// const score = 85;
// const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
// console.log(grade);
// // Output: B

// // Question 23: Login Status
// const isLoggedIn = true;
// const statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
// console.log(statusMessage);
// // Output: Welcome back!

// // Question 24: Discount Eligibility
// const isMember = true;
// const purchaseAmount = 120;
// const discount = isMember && purchaseAmount > 100 ? purchaseAmount * 0.1 : 0;
// console.log(discount);
// // Output: 12

// // Question 25: Determine Max Value
// function maxValue(a, b) {
//     return a > b ? a : b;
// }
// console.log(maxValue(5, 10));
// // Output: 10

// // Question 26: Greeting Message
// function greet(name) {
//     return `Hello, ${name || "guest"}!`;
// }
// console.log(greet("Alice"));
// console.log(greet(""));
// // Output: Hello, Alice! Hello, guest!

// // Question 27: Mapping Values
// const numbers = [1, 2, 3, 4, 5];
// const mapped = numbers.map(num => (num % 2 === 0 ? num * 2 : num * 3));
// console.log(mapped);
// // Output: [3, 4, 9, 8, 15]

// // Question 28: Filtering Values
// const words = ["cat", "house", "apple", "ok"];
// const filtered = words.filter(word => word.length > 3);
// console.log(filtered);
// // Output: ["house", "apple"]

// // Question 29: Copying an Array
// const originalArray = [1, 2, 3];
// const copiedArray = [...originalArray];
// console.log(originalArray, copiedArray);
// // Output: [1, 2, 3] [1, 2, 3]

// // Question 30: Merging Arrays
// const array1 = ["a", "b"];
// const array2 = ["c", "d"];
// const mergedArray = [...array1, ...array2];
// console.log(mergedArray);
// // Output: ["a", "b", "c", "d"]

// // Question 31: Adding Elements to an Array
// const nums = [2, 3, 4];
// const updatedNums = [1, ...nums, 5];
// console.log(updatedNums);
// // Output: [1, 2, 3, 4, 5]

// // Question 32: Copying an Object
// const originalObject = { name: "John", age: 30 };
// const copiedObject = { ...originalObject };
// console.log(originalObject, copiedObject);
// // Output: { name: "John", age: 30 } { name: "John", age: 30 }


// // Question 33: Merging Objects
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const mergedObject = { ...obj1, ...obj2 };
// console.log(mergedObject);
// // Output: { a: 1, b: 3, c: 4 }

// // Question 34: Updating Object Properties
// const user = { name: "Alice", age: 25, email: "alice@example.com" };
// const updatedUser = { ...user, email: "newemail@example.com", address: "123 Main St" };
// console.log(updatedUser);
// // Output: { name: "Alice", age: 25, email: "newemail@example.com", address: "123 Main St" }

// // Question 35: Passing Array Elements as Arguments
// function sum(a, b, c) {
//     return a + b + c;
// }
// const numbers = [10, 20, 30];
// console.log(sum(...numbers));
// // Output: 60

// // Question 36: Combining Multiple Arrays
// function combineArrays(...arrays) {
//     return [].concat(...arrays);
// }
// console.log(combineArrays([1, 2], [3, 4], [5, 6]));
// // Output: [1, 2, 3, 4, 5, 6]

// // Question 37: Rest Parameter with Spread Operator
// function multiply(multiplier, ...numbers) {
//     return numbers.map(num => num * multiplier);
// }
// console.log(multiply(2, 1, 2, 3));
// // Output: [2, 4, 6]

// // Question 38: Spread Operator with Nested Structures
// const nestedArray = [[1, 2], [3, 4]];
// const shallowCopy = [...nestedArray];
// shallowCopy[0][0] = 99;
// console.log(nestedArray, shallowCopy);
// // Output: [[99, 2], [3, 4]] [[99, 2], [3, 4]]

// // Question 39: Sum Function
// function sum(...args) {
//     return args.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3, 4));
// // Output: 10

// // Question 40: Average Function
// function average(...args) {
//     return args.length ? sum(...args) / args.length : 0;
// }
// console.log(average(10, 20, 30));
// // Output: 20

// // Question 41: First and Rest
// const nums = [1, 2, 3, 4, 5];
// const [first, ...rest] = nums;
// console.log(first, rest);
// // Output: 1 [2, 3, 4, 5]

// // Question 42: Skip and Rest
// const colors = ["red", "green", "blue", "yellow", "pink"];
// const [, , ...remainingColors] = colors;
// console.log(remainingColors);
// // Output: ["blue", "yellow", "pink"]

// // Question 43: Basic Destructuring
// const person = { name: "John", age: 30, email: "john@example.com" };
// const { name, email, ...rest } = person;
// console.log(name, email, rest);
// // Output: John john@example.com { age: 30 }

// // Question 44: Nested Destructuring
// const student = { id: 1, name: "Alice", grades: [90, 80], info: { age: 20, major: "CS" } };
// const { id, name: studentName, info: { major }, ...other } = student;
// console.log(id, studentName, major, other);
// // Output: 1 Alice CS { grades: [90, 80] }

// // Question 45: Filter Even Numbers
// function filterEven(...numbers) {
//     return numbers.filter(num => num % 2 === 0);
// }
// console.log(filterEven(1, 2, 3, 4, 5));
// // Output: [2, 4]

// // Question 46: Combine and Sort Arrays
// function combineAndSort(...arrays) {
//     return [].concat(...arrays).sort((a, b) => a - b);
// }
// console.log(combineAndSort([3, 2], [1, 5], [4]));
// // Output: [1, 2, 3, 4, 5]

// // Question 47: Destructuring Array
// const fruits = ["apple", "banana", "cherry"];
// const [firstFruit, secondFruit, thirdFruit] = fruits;
// console.log(firstFruit, secondFruit, thirdFruit);
// // Output: apple banana cherry

// // Question 48: Skipping Elements
// const colors2 = ["red", "green", "blue", "yellow"];
// const [primaryColor, , tertiaryColor] = colors2;
// console.log(primaryColor, tertiaryColor);
// // Output: red blue

// // Question 49: Default Values
// const settings = { theme: "dark" };
// const { theme, language = "English" } = settings;
// console.log(theme, language);
// // Output: dark English

// // Question 50: Nested Array Destructuring
// const nested = [[1, 2], [3, 4], [5, 6]];
// const [[a], [b], [c]] = nested;
// console.log(a, b, c);
// // Output: 1 3 5

// // Question 51: Object within an Object
// const profile = { username: "user123", details: { email: "user@example.com", address: "123 St" } };
// const { username, details: { email, address } } = profile;
// console.log(username, email, address);
// // Output: user123 user@example.com 123 St

// // Question 52: Mix of Arrays and Objects
// const data = { id: 1, info: [{ name: "Alice" }, { age: 25 }] };
// const { id, info: [{ name }, { age }] } = data;
// console.log(id, name, age);
// // Output: 1 Alice 25


// Question 53: Array Parameters
// function printCoordinates([x, y]) {
//     console.log(`x: ${x}, y: ${y}`);
// }
// printCoordinates([10, 20]);
// // Output: x: 10, y: 20

// // Question 54: Object Parameters
// function displayUser({ name, age }) {
//     console.log(`Name: ${name}, Age: ${age}`);
// }
// displayUser({ name: "Alice", age: 30 });
// // Output: Name: Alice, Age: 30

// // Question 55: List Property Names
// const book = { title: "1984", author: "George Orwell", year: 1949 };
// console.log(Object.keys(book));
// // Output: ["title", "author", "year"]

// // Question 56: Count Properties
// const student = { name: "John", age: 20, grade: "A", school: "XYZ" };
// console.log(Object.keys(student).length);
// // Output: 4

// // Question 57: Iterate Over Keys
// const product = { name: "Laptop", price: 1000, category: "Electronics" };
// Object.keys(product).forEach(key => {
//     console.log(`${key}: ${product[key]}`);
// });
// // Output: name: Laptop, price: 1000, category: Electronics

// // Question 58: List Property Values
// const movie = { title: "Inception", director: "Nolan", year: 2010, genre: "Sci-Fi" };
// console.log(Object.values(movie));
// // Output: ["Inception", "Nolan", 2010, "Sci-Fi"]

// // Question 59: Sum Values
// const scores = { math: 90, science: 80, english: 70 };
// console.log(Object.values(scores).reduce((sum, val) => sum + val, 0));
// // Output: 240

// // Question 60: Iterate Over Values
// const user = { username: "user123", email: "user@example.com", location: "Earth" };
// Object.values(user).forEach(value => console.log(value));
// // Output: user123, user@example.com, Earth

// // Question 61: List Entries
// const car = { make: "Toyota", model: "Corolla", year: 2020 };
// console.log(Object.entries(car));
// // Output: [["make", "Toyota"], ["model", "Corolla"], ["year", 2020]]

// // Question 62: Convert Object to Array
// const person = { firstName: "Jane", lastName: "Doe", age: 25 };
// console.log(Object.entries(person));
// // Output: [["firstName", "Jane"], ["lastName", "Doe"], ["age", 25]]

// // Question 63: Iterate Over Entries
// const settings = { theme: "dark", notifications: true, privacy: "high" };
// Object.entries(settings).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });
// // Output: theme: dark, notifications: true, privacy: high

// // Question 64: Filter Keys
// const inventory = { apples: 5, bananas: 15, oranges: 8, grapes: 12 };
// console.log(Object.keys(inventory).filter(key => inventory[key] > 10));
// // Output: ["bananas", "grapes"]

// // Question 65: Transform Values
// const temperatures = { morning: 20, afternoon: 25, evening: 18 };
// const fahrenheitTemps = Object.fromEntries(
//     Object.entries(temperatures).map(([key, value]) => [key, value * 9 / 5 + 32])
// );
// console.log(fahrenheitTemps);
// // Output: { morning: 68, afternoon: 77, evening: 64.4 }

// // Question 66: Key-Value Swap
// const roles = { admin: "Alice", editor: "Bob", viewer: "Charlie" };
// const swapped = Object.fromEntries(
//     Object.entries(roles).map(([key, value]) => [value, key])
// );
// console.log(swapped);
// // Output: { Alice: "admin", Bob: "editor", Charlie: "viewer" }

// // Question 67: Filter and Map
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.filter(num => num % 2 !== 0).map(num => num ** 2));
// // Output: [1, 9, 25, 49, 81]

// // Question 68: Sort and Reduce
// const words = ["apple", "banana", "cherry", "date"];
// console.log(words.sort().reduce((str, word) => str + word, ""));
// // Output: applebananacherrydate

// // Question 69: Simple Callback
// function greet(name, callback) {
//     callback(`Hello, ${name}!`);
// }
// greet("Alice", message => console.log(message));
// // Output: Hello, Alice!

// // Question 70: Asynchronous Callback
// function fetchData(callback) {
//     setTimeout(() => {
//         callback("Data fetched!");
//     }, 1000);
// }
// fetchData(data => console.log(data));
// // Output: Data fetched! (after 1 second)

// // Question 71: Simple Arrow Function
// const add = (a, b) => a + b;
// console.log(add(3, 5));
// // Output: 8

// // Question 72: Arrow Function with Array Methods
// console.log([1, 2, 3, 4, 5].map(num => num ** 2));
// // Output: [1, 4, 9, 16, 25]

// // Question 73: Variable Scope
// function outer() {
//     const x = 10;
//     function inner() {
//         console.log(x);
//     }
//     inner();
// }
// outer();
// // Output: 10

// // Question 74: Closure
// function createCounter() {
//     let count = 0;
//     return () => ++count;
// }
// const counter1 = createCounter();
// const counter2 = createCounter();
// console.log(counter1()); // Output: 1
// console.log(counter2()); // Output: 1
// console.log(counter1()); // Output: 2

// // Question 75: Default Parameters
// function greet(name, message = "Hello") {
//     console.log(`${message}, ${name}!`);
// }
// greet("Alice");
// greet("Alice", "Hi");
// // Output: Hello, Alice! Hi, Alice!

// // Question 76: Calculate Area
// function calculateArea(width = 10, height = 5) {
//     return width * height;
// }
// console.log(calculateArea());
// console.log(calculateArea(4, 5));
// // Output: 50, 20


// // Question 76: Calculate Area
// function calculateArea(width = 10, height = 5) {
//     return width * height;
// }
// console.log(calculateArea());
// console.log(calculateArea(4, 5));
// // Output: 50, 20

// // Question 77: Square Numbers
// const numbers = [1, 2, 3, 4, 5];
// const squared = numbers.map(num => num ** 2);
// console.log(squared);
// // Output: [1, 4, 9, 16, 25]

// // Question 78: Convert to Uppercase
// const words = ["apple", "banana", "cherry"];
// const uppercased = words.map(word => word.toUpperCase());
// console.log(uppercased);
// // Output: ["APPLE", "BANANA", "CHERRY"]

// // Question 79: Filter Even Numbers
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);
// // Output: [2, 4]

// // Question 80: Filter Long Words
// const longWords = words.filter(word => word.length > 5);
// console.log(longWords);
// // Output: ["banana", "cherry"]

// // Question 81: Log Numbers
// numbers.forEach(num => console.log(num));
// // Output: 1 2 3 4 5

// // Question 82: Log Word Lengths
// words.forEach(word => console.log(word.length));
// // Output: 5 6 6

// // Question 83: Sum of Numbers
// const sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum);
// // Output: 15

// // Question 84: Concatenate Strings
// const concatenated = words.reduce((result, word) => result + " " + word, "").trim();
// console.log(concatenated);
// // Output: apple banana cherry

// // Question 85: Check for Even Number
// const hasEven = numbers.some(num => num % 2 === 0);
// console.log(hasEven);
// // Output: true

// // Question 86: Check for Long Word
// const hasLongWord = words.some(word => word.length > 5);
// console.log(hasLongWord);
// // Output: true

// // Question 87: Check All Even Numbers
// const allEven = [2, 4, 6, 8].every(num => num % 2 === 0);
// console.log(allEven);
// // Output: true

// // Question 88: Check All Long Words
// const allLong = words.every(word => word.length > 3);
// console.log(allLong);
// // Output: true

// // Question 89: Find First Even Number
// const firstEven = numbers.find(num => num % 2 === 0);
// console.log(firstEven);
// // Output: 2

// // Question 90: Find Long Word
// const firstLongWord = words.find(word => word.length > 5);
// console.log(firstLongWord);
// // Output: banana

// // Question 91: Find Index of First Even Number
// const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
// console.log(firstEvenIndex);
// // Output: 1

// // Question 92: Find Index of Long Word
// const longWordIndex = words.findIndex(word => word.length > 5);
// console.log(longWordIndex);
// // Output: 1

// // Question 93: Simple Promise
// function delay(ms) {
//     return new Promise(resolve => setTimeout(() => resolve("Done!"), ms));
// }
// delay(2000).then(console.log);
// // Output: Done! (after 2 seconds)

// // Question 94: Promise Chain
// function fetchData() {
//     return Promise.resolve({ data: "Sample Data" });
// }
// fetchData().then(data => console.log(data));
// // Output: { data: "Sample Data" }

// // Question 95: Error Handling
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         const user = { name: "Alice", age: null };
//         user.age ? resolve(user) : reject("Age is missing");
//     });
// }
// fetchUserData().catch(console.error);
// // Output: Age is missing

// // Question 96: Simulate Network Request
// function getWeather() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Sunny"), 1000);
//     });
// }
// getWeather().then(console.log).catch(console.error);
// // Output: Sunny (after 1 second)

// // Question 97: Simple async Function
// async function sayHello() {
//     const result = await delay(2000);
//     console.log(result);
// }
// sayHello();
// // Output: Done! (after 2 seconds)

// // Question 98: Fetch Data with async/await
// async function getUserData() {
//     try {
//         const user = await fetchUserData();
//         console.log(user);
//     } catch (error) {
//         console.error(error);
//     }
// }
// getUserData();
// // Output: Error message or user data

// // Question 99: Fetch and Process Data
// async function getUserAndPosts() {
//     const user = await fetchUserData();
//     const posts = await fetchData();
//     console.log(user, posts);
// }
// getUserAndPosts();
// // Output: User data and posts

// // Question 100: Error Handling in async/await
    // async function getUserInfo() {
    //     try {
    //         const user = await fetchUserData();
    //         console.log(user);
    //     } catch (error) {
    //         console.error("Failed to fetch user data", error.message);
    //     }
    // }
    // getUserInfo();
// // Output: User data or error message
