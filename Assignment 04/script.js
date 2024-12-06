

const arrays = [
    42,
    true,
    "Hello, World!",
    {
      name: "John",
      age: 25,
      isStudent: false,
    },
    false,
    3.14,
    "JavaScript is fun!",
  ];

//   Question 1 
// const stringArray = arrays.map(element => String(element));
// console.log(stringArray);   //   output: ['42', 'true', 'Hello, World!', '[object Object]', 'false', '3.14', 'JavaScript is fun!']




//   Question 2  
// let filterElement = arrays.filter(element => typeof element === "number");
// console.log(filterElement);    // output: [42, 3.14]




// Question 3 
// arrays.forEach(element => {
//     console.log(typeof element);
//   });   //   output: number boolean string object boolean number string




// Question 4: 
// let sumOfNumbers = arrays.reduce((total, element) => {
//   if (typeof element === "number") {
//     return total + element;
//   }
//   return total;
// }, 0);

// console.log(sumOfNumbers);    // Output: 45.14



// Question 5:
// let firstBoolean = arrays.find((element) => typeof element === "boolean");

// console.log(firstBoolean); // Output: true




// Question 6:
// let firstObjectIndex = arrays.findIndex((element) => typeof element === "object");

// console.log(firstObjectIndex); // Output: 3




// Question 7:
// let hasNumber = arrays.some((element) => typeof element === "number");

// console.log(hasNumber); // Output: true




// Question 8:
// let allStrings = arrays.every((element) => typeof element === "string");

// console.log(allStrings); // Output: false







// newsapi.org

// const newsapi = '4836aa141e8b4d848c0d0351bcd971f8'

// const email = 'kacip48511@pokeline.com'
// const password = 'kacip48511'

