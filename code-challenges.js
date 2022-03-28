// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

//  const temp1 = 42
//  const temp2 = 350
//  const temp3 = 212

    // After creating a function, use if else statments to set the proper conditons to get the desired output
    // Set a condition if the number is less than or equal to 212 than log that the number is below boiling point
    // Set a condition if the number is greater than or equal to 212 than log that the number is above boiling point
    // Set a condition if the number is strictly equal to 212 than log that the number is at boiling point



// const temp = (num) => {
// if(num <= 212){
//     return(`${num} is below boiling point`)
// }else if(num >= 212){
//     return(`${num} is above boiling point`)
// }else if(num === 212){
//     return(`${num} is at boiling point`)
// }
//}

//console.log(temp(212));

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

    // I combined the two arrays using .concat
    // I then got the amount of indexes in the combined array using .length

// const myNumbers1 = [3, 7, 0, 36, -9]
// const myNumbers2 = [8, -7, 42, 9, 13]

// console.log(myNumbers1.concat(myNumbers2).length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"

    // I turned the "Bravo 2022" string into an array using .split
    // I then reversed the array using .reverse
    // Then i reverted the array back into a string but kept the characters reversed

// const currentCohort = "Bravo 2022"

// console.log(currentCohort.split('').reverse().join(""));


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// const myArray = [13, 34, 5, 10, 27, 42]

    // Initiate a forloop
    // In the forloop, set the condition that i is divisable by 2 with no remainder
    // If it is, log an output of "even"
    // If it isn't log an output of "odd"

// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] % 2) {
//     console.log("Even");
//   } else { 
// //       console.log("Odd")
//   }
// }

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// // Set one:
// const number1 = 58
// const number2 = 100

// // Set two:
// const number3 = 27
// const number4 = 24

// const subtractValues = (num1, num2) => {
//     // Take two values from the parameter and determine which value is greater than the other
//     // Once we determine which variable is greater we update the subtraction math.
//     if (num2 > num1) {
//         return num2 - num1;
//     } 
//     else {   
//         return num1 - num2;    
//     }
// }
// console.log(subtractValues(number1, number2));
// console.log(subtractValues(number3, number4));
