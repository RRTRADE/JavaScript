const name="Rajiv";           // This is a string data type.
const rcount=40;                // This is a number data type.
// console.log(name+rcount+' value');

// console.log(`Hello world, my name is ${name} and I am ${rcount} years old.`); // This is a template literal, which allows for embedding expressions inside string literals.
// //  It uses backticks (`) instead of single or double quotes, and expressions are enclosed in ${}.
// // Template literals provide an easy way to create multiline strings and perform string interpolation, making it easier to read and write complex strings. 
// // They also allow for embedding expressions, which can be evaluated at runtime, making them a powerful tool for working with strings in JavaScript.

// const gameName=new String("Cricket"); // This is a string object created using the String constructor. It is not a primitive string, but an object that wraps around a primitive string value.
// console.log(gameName); // This will print the string object, which includes the primitive string value and additional properties and methods.
// console.log(typeof gameName); // This will print "object", because gameName is a string object, not a primitive string.
// console.log(gameName.toUpperCase()); // This will print "CRICKET", because toUpperCase() is a method of the String object that converts the string to uppercase.

// console.log(gameName.length); // This will print the length of the string, which is 7 in this case.
// console.log(gameName[0]); // This will print the first character of the string, which is "C" in this case.
// console.log(gameName[gameName.length - 1]); // This will print the last character of the string, which is "t" in this case.

// //chatAt() method is used to return the character at a specified index in a string. It takes an integer as an argument, which represents the index of the character to be returned. The index starts from 0, so the first character of the string is at index 0, the second character is at index 1, and so on. If the index is out of range (less than 0 or greater than or equal to the length of the string), it returns an empty string.
// console.log(gameName.charAt(3)); // This will print the fourth character of the string, which is "k" in this case.
// console.log(gameName.charAt(gameName.length - 1)); // This will print the last character of the string, which is "t" in this case.

// //indexOf() method is used to return the index of the first occurrence of a specified value in a string. It takes a string as an argument, which represents the value to be searched for. If the value is found in the string, it returns the index of the first occurrence. If the value is not found, it returns -1.
// console.log(gameName.indexOf("c")); // This will print 4, because the first occurrence of "c" is at index 4 in the string "Cricket".
// console.log(gameName.indexOf("z")); // This will print -1, because "z" is not found in the string "Cricket".

// //slice() method is used to extract a portion of a string and return it as a new string. It takes two arguments: the starting index and the ending index (optional). The starting index is inclusive, while the ending index is exclusive. If the ending index is not provided, it will extract the rest of the string from the starting index.
// console.log(gameName.slice(0, 3)); // This will print "Cri", which is the substring from index 0 to index 2 (3 is exclusive) in the string "Cricket".
// console.log(gameName.slice(3)); // This will print "cket", which is the substring from index 3 to the end of the string "Cricket".

// //substring() method is similar to slice() method, but it does not allow for negative indices. It takes two arguments: the starting index and the ending index (optional). The starting index is inclusive, while the ending index is exclusive. If the ending index is not provided, it will extract the rest of the string from the starting index.
// console.log(gameName.substring(0, 3)); // This will print "Cri", which is the substring from index 0 to index 2 (3 is exclusive) in the string "Cricket".
// console.log(gameName.substring(3)); // This will print "cket", which is the substring from index 3 to the end of the string "Cricket".

// //substr() method is used to extract a portion of a string and return it as a new string. It takes two arguments: the starting index and the length of the substring to be extracted. The starting index is inclusive, while the length is the number of characters to be extracted.
// console.log(gameName.substr(0, 3)); // This will print "Cri", which is the substring from index 0 with a length of 3 in the string "Cricket".
// console.log(gameName.substr(3, 5)); // This will print "cket", which is the substring from index 3 with a length of 5 in the string "Cricket".

// const url="http://www.example.com";
// console.log(url.replace("http", "https")); // This will print "https://www.example.com", because the replace() method replaces the first occurrence of "http" with "https" in the 
// // string "http://www.example.com".  

const sentance="Hollo-How-are-you";
console.log(sentance.split("-")); // This will print ["Hollo", "How", "are", "you"], because the split() method splits the string into an array of substrings based on the specified separator,
//  which is "-" in this case.

