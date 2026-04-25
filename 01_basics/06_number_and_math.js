const score=400
// console.log(score); // 400

const balance=new Number(150.256); // This creates a Number object with the value 150.256. The Number constructor can be used to create a number object, 
// but it's generally recommended to use primitive number literals instead for better performance and simplicity.

// console.log(balance); // [Number: 150.256], because balance is a Number object, and when you log it to the console, it shows the object representation of the number.
// console.log(typeof balance); // "object", because balance is a Number object, not a primitive number.

// console.log(balance.toFixed(2)); // "150.26", because toFixed() is a method of the Number object that formats the number to a specified number of decimal places, and it rounds the number accordingly. In this case, it rounds 150.256 to 150.26 with 2 decimal places.

// console.log(balance.toPrecision(4)); // "150.3", because toPrecision() is a method of the Number object that formats the number to a specified length, 
// // including both the integer and decimal parts. In this case, it rounds 150.256 to 150.3 with a total of 4 significant digits.

// console.log(balance.toString().length); // 7, because toString() is a method of the Number object that converts the number to a string, and the string "150.256" has a length of 7  .


const hundreds=1000000000
// console.log(hundreds.toLocaleString()); // "1,000,000,000", because toLocaleString() is a method of the Number object that formats the number according to the locale settings of the environment.

// console.log(hundreds.toExponential(2)); // "1.00e+9", because toExponential() is a method of the Number object that formats the number in exponential notation with a specified number of decimal places. In this case, it formats 1000000000 as 1.00e+9 with 2 decimal places.


// =================================================== Math object in JavaScript ===================================================

// The Math object in JavaScript is a built-in object that provides properties and methods for performing mathematical operations.
//  It is not a constructor, so you cannot create instances of it. Instead, you can use its properties and methods directly.

// console.log(Math)
// console.log(Math.PI); // 3.141592653589793, because Math.PI is a property of the Math object that represents the ratio of the circumference of a circle to its diameter.

// console.log(Math.abs(-52)); // 52, because Math.abs() is a method of the Math object that returns the absolute value of a number. In this case, it returns 52 for the input -52.

// console.log(Math.round(4.7)); // 5, because Math.round() is a method of the Math object that rounds a number to the nearest integer. In this case, it rounds 4.7 to 5.

// console.log(Math.floor(4.7)); // 4, because Math.floor() is a method of the Math object that rounds a number down to the nearest integer. In this case, it rounds 4.7 down to 4.

// console.log(Math.ceil(4.2)); // 5, because Math.ceil() is a method of the Math object that rounds a number up to the nearest integer. In this case, it rounds 4.2 up to 5.

// console.log(Math.max(10, 20, 5)); // 20, because Math.max() is a method of the Math object that returns the largest of zero or more numbers. In this case, it returns 20 as the largest number among 10, 20, and 5.

// console.log(Math.min(10, 20, 5)); // 5, because Math.min() is a method of the Math object that returns the smallest of zero or more numbers. In this case, it returns 5 as the smallest number among 10, 20, and 5.
const min =10
const max =20

console.log(Math.random()*min) // This will print a random number between 0 (inclusive) and 10 (exclusive), because Math.random() is a method of the Math object that returns a pseudo-random floating-point number in the range from 0 (inclusive) to 1 (exclusive). When you multiply it by min, it scales the random number to the desired range.
console.log(Math.floor(Math.random()*min +1))// This will print a random integer between 1 (inclusive) and 10 (inclusive), because Math.random() generates a random number between 0 and 1, and when you multiply it by min and add 1, it scales the random number to the range of 1 to 10. Then, Math.floor() rounds it down to the nearest integer, ensuring that the result is an integer within the specified range.
console.log(Math.random()*(max-min+1));// This will print a random number between 0 (inclusive) and 11 (exclusive), because Math.random() generates a random number between 0 and 1, and when you multiply it by (max - min + 1), it scales the random number to the range of 0 to 11. The +1 is added to include the max value in the range.
console.log(Math.floor(Math.random()*(max-min+1)));// This will print a random integer between 0 (inclusive) and 10 (inclusive), because Math.random() generates a random number between 0 and 1, and when you multiply it by (max - min + 1), it scales the random number to the range of 0 to 11. Then, Math.floor() rounds it down to the nearest integer, ensuring that the result is an integer within the specified range of 0 to 10.
console.log(Math.floor(Math.random()*(max-min+1)) + min); // This will print a random number between 10 (inclusive) and 20 (exclusive), because Math.random() is a method of the Math object that returns a pseudo-random floating-point number in the range from 0 (inclusive) to 1 (exclusive). Each time you call Math.random(), it generates a new random number.   


