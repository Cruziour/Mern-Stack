// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.

// const arrNum = [1,2,3,4,5,6,7,8,9,10]
// const square = arrNum.map((num)=>(num*num))
// console.log(square);


// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

// function getGrade(score) {
//     return score >= 90 ? 'A' :
//            score >= 80 ? 'B' :
//            score >= 70 ? 'C' :
//            score >= 60 ? 'D' : 'F';
// }

// console.log(getGrade(85)); // Output: B
// console.log(getGrade(92)); // Output: A
// console.log(getGrade(58)); // Output: F
// console.log(getGrade(68)); // Output: D

// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

// Creating the car object
// let car = {
//     companyName: "Toyota",
//     model: "Camry",
//     year: 2020,
// };

// // Function to change the car's year property
// function changeCarYear(carObject, newYear) {
//     carObject.year = newYear;
// }

// // Using object destructuring to extract and print model and year
// function printCarModelAndYear(carObject) {
//     const { model, year } = carObject;
//     console.log(`Model: ${model}, Year: ${year}`);
// }

// // Example usage:
// printCarModelAndYear(car);  // Output: Model: Camry, Year: 2020

// changeCarYear(car, 2023);
// printCarModelAndYear(car);  // Output: Model: Camry, Year: 2023


// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.
// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 16, 17];

// const isPrimeNumber = numbers.filter((num) => {
//     if (num <= 1) return false;  // Handle non-prime numbers 0 and 1
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;  // Not a prime number
//         }
//     }
//     return true;  // Prime number
// });

// console.log(isPrimeNumber);  // Output: [2, 3, 5, 7, 11, 13, 17]



// Q5 -  State different use cases of map, filter and reduce functions.
// map
// const numbers = [1, 2, 3, 4, 5];
// const squared = numbers.map(num => num * num); // [1, 4, 9, 16, 25]

// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
// ];
// const names = users.map(user => user.name); // ['Alice', 'Bob']

//filter
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4, 6]

// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 17 },
// ];
// const adults = users.filter(user => user.age >= 18); // [{name: 'Alice', age: 25}]

// reduce
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 15


// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.
// async function fetchData() {
//     try {
//         // Fetch data from JSONPlaceholder API (example: posts endpoint)
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//         // Check if the response is successful
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         // Parse the JSON data
//         const data = await response.json();

//         // Log the data to the console
//         console.log(data);
//     } catch (error) {
//         // Handle any errors that occurred during the fetch
//         console.error('Error fetching data:', error);
//     }
// }

// // Call the async function
// fetchData();


// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

// Define a nested object representing a person
// const person = {
//     name: 'John Doe',
//     address: {
//         street: '123 Main St',
//         city: 'New York',
//         zip: '10001'
//     },
//     contact: {
//         email: 'john.doe@example.com',
//         phone: '123-456-7890'
//     }
// };

// // Access the phone number using optional chaining
// const phoneNumber = person?.contact?.phone;

// // Log the result
// console.log(phoneNumber); // Output: '123-456-7890'


// Person object without contact property
const personWithoutContact = {
    name: 'Jane Doe',
    address: {
        street: '456 Elm St',
        city: 'Los Angeles',
        zip: '90001'
    }
};

// Access the phone number using optional chaining
const phoneNumberWithoutContact = personWithoutContact?.contact?.phone;

// Log the result
console.log(phoneNumberWithoutContact); // Output: undefined

