//const is used to declare a constant variable, which means its value cannot be changed once assigned.
const const_accountid=12345;
// const_accountid=54321; // This will throw an error because const_accountid is a constant variable.
console.log("const_accountid: " + const_accountid); // This will not be executed due to the error above.

//let is used to declare a block-scoped variable, which means its value can be changed within the block it is defined.
let let_accountnumber=54321;
console.log("let_accountnumber: " + let_accountnumber); // This will print 54321
let_accountnumber=12345; // This is allowed because let_accountnumber is declared with let.
console.log("let_accountnumber changed: " + let_accountnumber); // This will print 12345

//var is used to declare a function-scoped variable, which means its value can be changed and it is accessible throughout the function it is defined in.
var var_accountname="Rajiv";
console.log("var_accountname: " + var_accountname); // This will print "Rajiv"
var_accountname="Rahul"; // This is allowed because var_accountname is declared with var.
console.log("var_accountname changed: " + var_accountname); // This will print "Rahul"

//prefer to use let and const over var to avoid issues with variable hoisting and to ensure better code readability and maintainability.

mobile=9876543210;  // This will create a global variable named mobile, which is not recommended. It is better to declare variables with var, let, or const to avoid unintended consequences.
console.log("without var/let/const: " +  mobile);  
mobile=1234567890; // This will change the value of the global variable mobile.
console.log("without var/let/const changed: " +  mobile);

let accountstate; // This will declare a variable named accountstate without initializing it, so its value will be undefined.
console.log("accountstate: " + accountstate); // This will print "accountstate: undefined"  
console.table({const_accountid, let_accountnumber, var_accountname, mobile, accountstate}); // This will print the variables in a table format for better visualization.