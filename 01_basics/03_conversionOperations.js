//***************************************************************Conversions************************************************* */

let score=85; // This is a number data type.

// // console.log(typeof score); // This will print "number"
// // console.log(typeof(score)); // This will also print "number"
// console.log(typeof score+"\n"+ typeof(score) + "\nscore: " + score); // This will print "score: 85"

// let strScore=String(score); // This will convert the number score to a string data type.
let strScore=score.toString()+"abcd" // This will also convert the number score to a string data type and concatenate "abcd" to it, resulting in "85abcd".
// console.log(typeof strScore + "\nstrScore: " + strScore); // This will print "strScore: 85abcd"

let numScore=Number(strScore); // This will convert the string strScore back to a number data type.
// console.log(typeof numScore + "\nnumScore: " + numScore); // This will print "numScore: NaN" because "85abcd" cannot be converted to a valid number, resulting in NaN (Not a Number).

let scoreNull=null; // This is a null data type.

// console.log(typeof scoreNull + "\nscoreNull: " + scoreNull); // This will print "scoreNull: null" (null is considered an object in JavaScript)
let scoreInNumber=Number(scoreNull); // This will convert the null value to a number data type.
// console.log(typeof scoreInNumber + "\nscoreInNumber: " + scoreInNumber); // This will print "scoreInNumber: 0" because null is converted to 0 when using the Number() function.


let scoreUndefined; // This is an undefined data type because it has not been assigned a value yet.

// console.log(typeof scoreUndefined + "\nscoreUndefined: " + scoreUndefined); // This will print "scoreUndefined: undefined"

//"33" => 33
//"33abc" => NaN
//true => 1
//false => 0

let isLoggedInNumber=1; // This is a boolean data type.
// console.log(typeof isLoggedIn + "\nisLoggedIn: " + isLoggedIn); // This will print "isLoggedIn: 1"
let isLoggedInNumberBoolean=Boolean(isLoggedInNumber); // This will convert the number isLoggedIn to a boolean data type.
// console.log(typeof isLoggedInNumberBoolean + "\nisLoggedInNumberBoolean: " + isLoggedInNumberBoolean); // This will print "isLoggedInNumberBoolean: true" because any non-zero number is considered true when using the Boolean() function.

let isLoggedInEmptyString=""; // This is a string data type, but it is an empty string, which is considered falsy in JavaScript.
// console.log(typeof isLoggedInEmptyString + "\nisLoggedInEmptyString: " + isLoggedInEmptyString); // This will print "isLoggedInEmptyString: "
let isLoggedInEmptyStringBoolean=Boolean(isLoggedInEmptyString); // This will convert the string isLoggedInEmptyString to a boolean data type.
// console.log(typeof isLoggedInEmptyStringBoolean + "\nisLoggedInEmptyStringBoolean: " + isLoggedInEmptyStringBoolean); // This will print "isLoggedInEmptyStringBoolean: false" because an empty string is considered falsy in JavaScript.


let isLoggedInString="Rajiv"; // This is a string data type, and it is a non-empty string, which is considered truthy in JavaScript.
// console.log(typeof isLoggedInString + "\nisLoggedInString: " + isLoggedInString); // This will print "isLoggedInString: Rajiv"
let isLoggedInStringBoolean=Boolean(isLoggedInString); // This will convert the string isLoggedInString to a boolean data type.
// console.log(typeof isLoggedInStringBoolean + "\nisLoggedInStringBoolean: " + isLoggedInStringBoolean); // This will print "isLoggedInStringBoolean: true" because any non-empty string is considered truthy in JavaScript.

let isLoggedInNull=null; // This is a null data type, which is considered falsy in JavaScript.
// console.log(typeof isLoggedInNull + "\nisLoggedInNull: " + isLoggedInNull); // This will print "isLoggedInNull: null"
let isLoggedInNullBoolean=Boolean(isLoggedInNull); // This will convert the null value to a boolean data type.
// console.log(typeof isLoggedInNullBoolean + "\nisLoggedInNullBoolean: " + isLoggedInNullBoolean); // This will print "isLoggedInNullBoolean: false" because null is considered falsy in JavaScript.

let isLoggedIn=NaN; // This is a NaN data type, which is considered falsy in JavaScript.
// console.log(typeof isLoggedIn + "\nisLoggedIn: " + isLoggedIn); // This will print "isLoggedIn: NaN"
let isLoggedInNBoolean=Boolean(isLoggedIn); // This will convert the NaN value to a boolean data type.
// console.log(typeof isLoggedInNBoolean + "\nisLoggedInNBoolean: " + isLoggedInNBoolean); // This will print "isLoggedInNBoolean: false" because NaN is considered falsy in JavaScript.


//1 => true
//0 => false
//null => false
//undefined => false
//NaN => false
//"" (empty string) => false
//" " (string with space) => true
//"Rajiv" (non-empty string) => true


//***************************************************************Operations************************************************* */
let a=10;
let negvalue=-a; // This will negate the value of a, resulting in -10.
// console.log("negvalue: " + negvalue); // This will print "negvalue: -10"

let b=5;
let sum=a+b; // This will add the values of a and b, resulting in 15.
// console.log("sum: " + sum); // This will print "sum: 15"

let difference=a-b; // This will subtract the value of b from a, resulting in 5.
// console.log("difference: " + difference); // This will print "difference: 5"

let product=a*b; // This will multiply the values of a and b, resulting in 50.
// console.log("product: " + product); // This will print "product: 50"

let quotient=a/b; // This will divide the value of a by b, resulting in 2.
// console.log("quotient: " + quotient); // This will print "quotient: 2"

let remainder=a%b; // This will calculate the remainder of a divided by b, resulting in 0.
// console.log("remainder: " + remainder); // This will print "remainder: 0"

let exponentiation=a**b; // This will calculate a raised to the power of b, resulting in 100000.
// console.log("exponentiation: " + exponentiation); // This will print "exponentiation: 100000"    

let increment=a++; // This will assign the value of a to increment and then increment a by 1, resulting in increment being 10 and a being 11.
// console.log("increment: " + increment); // This will print "increment: 10"
// console.log("a after increment: " + a); // This will print "a after increment: 11"

let decrement=b--; // This will assign the value of b to decrement and then decrement b by 1, resulting in decrement being 5 and b being 4.
// console.log("decrement: " + decrement); // This will print "decrement: 5"
// console.log("b after decrement: " + b); // This will print "b after decrement: 4"

let str1="Hello";
let str2="World";
let concatenation=str1 + " " + str2; // This will concatenate the strings str1 and str2 with a space in between, resulting in "Hello World".
// console.log("concatenation: " + concatenation); // This will print "concatenation: Hello World"

let num1=10;
let str1num=str1 + num1; // This will concatenate the string str1 and the number num1, resulting in "Hello10" because the number is converted to a string during concatenation.
// console.log("str1num: " + str1num); // This will print "str1num: Hello10"
// console.log("1"+2+3); // This will concatenate the string "1" with the numbers 2 and 3, resulting in "123" because the number is converted to a string during concatenation.
// console.log(1+2+"3"); // This will add the numbers 1 and 2 first, resulting in 3, and then concatenate the result with the string "3", resulting in "33" because the number is converted to a string during concatenation.


let num2=20;
let sumStrNum=num1 + num2 + str1; // This will add the numbers num1 and num2 first, resulting in 30, and then concatenate the result with the string str1, resulting in "30Hello" because the number is converted to a string during concatenation.
// console.log("sumStrNum: " + sumStrNum); // This will print "sumStrNum: 30Hello"

let strNum1="10";
let strNum2="20";
let sumStrNum1=strNum1 + strNum2; // This will concatenate the strings strNum1 and strNum2, resulting in "1020" because both are strings.
// console.log("sumStrNum1: " + sumStrNum1); // This will print "sumStrNum1: 1020"

let numStr1=Number(strNum1); // This will convert the string strNum1 to a number data type, resulting in 10.
// console.log("numStr1: " + numStr1); // This will print "numStr1: 10"

let numStr2=Number(strNum2); // This will convert the string strNum2 to a number data type, resulting in 20.
// console.log("numStr2: " + numStr2); // This will print "numStr2: 20"

let sumNumStr=numStr1 + numStr2; // This will add the numbers numStr1 and numStr2, resulting in 30.
// console.log("sumNumStr: " + sumNumStr); // This will print "sumNumStr: 30"

// console.log(+true);// This will convert the boolean value true to a number data type, resulting in 1 because true is considered 1 when using the unary plus operator.
// console.log(+false);// This will convert the boolean value false to a number data type, resulting in 0 because false is considered 0 when using the unary plus operator.
// console.log(+""); // This will convert an empty string to a number data type, resulting in 0 because an empty string is considered 0 when using the unary plus operator.
// console.log(+" "); // This will convert a string with a space to a number data type, resulting in 0 because a string with only whitespace is considered 0 when using the unary plus operator.
// console.log(+"Rajiv"); // This will attempt to convert the string "Rajiv" to a number data type, resulting in NaN (Not a Number) because "Rajiv" cannot be converted to a valid number. 

// console.log(num2++);// This will print the current value of num2, which is 20, and then increment num2 by 1, resulting in num2 being 21 after this line is executed.
// console.log(num2); // This will print the updated value of num2, which is now 21.
// console.log(++num2); // This will increment num2 by 1 first, resulting in num2 being 22, and then print the updated value of num2, which is 22.
// console.log(num2); // This will print the current value of num2, which is 22.

a=10;
b=++a; // This will increment a by 1 first, resulting in a being 11, and then assign the updated value of a to b, resulting in b being 11.
console.log("a: " + a); // This will print "a: 11"
console.log("b: " + b); // This will print "b: 11"

a=10;
b=a++; // This will assign the current value of a to b, resulting in b being 10, and then increment a by 1, resulting in a being 11.
console.log("a: " + a); // This will print "a: 11"
console.log("b: " + b); // This will print "b: 10"