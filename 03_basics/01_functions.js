function sayMyName(){
    console.log("My name is Divyansh");
    console.log("My name is Reyansh");
    console.log("My name is Rajiv Ranjan");
    console.log("My name is Maria Ranjan");
}

sayMyName//Function reference
// sayMyName()//Function invocation or function call or function execution

//function just printing the sum but not returning anything
function addTwoNum(num1,num2){
    console.log(num1+num2); 
}

// addTwoNum(5,10) //15

const result=addTwoNum(100,200) //300
// console.log(result); //undefined => because we are not returning anything from the function
  

function addTwoNum1(num1,num2){
    return num1+num2; 
    console.log("This will never execute"); //unreachable code
}

const result1=addTwoNum1(100,200) //300
// console.log(result1); //300


function loginUserMessage(username){
    // if (username===undefined)  //Or if (!username) because if username is empty string then also it will be treated as falsy value
    if (!username)
        {
        console.log("Please provide a username")
        return 100; //to stop the execution of the function

    }
return `Welcome back ${username}` 
}

// loginUserMessage("Divyansh")// will not print anything because we are not printing the return value of the function
// console.log(loginUserMessage("Divyansh")) //Welcome back Divyansh

// console.log(loginUserMessage()) 


function loginUserMessage1(username="DefaultUser"){
    // if (username===undefined)  //Or if (!username) because if username is empty string then also it will be treated as falsy value
    if (!username)// Not reached because we have provided default value to the parameter
        {
        console.log("Please provide a username")
        return 100; //to stop the execution of the function

    }
return `Welcome back ${username}` 
}
// console.log(loginUserMessage1()); //Welcome back DefaultUser
// console.log(loginUserMessage1("Divyansh")); //Welcome back Divyansh

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++ REST OPERATOR IN FUNCTION PARAMETER ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//rest operator in function parameter
function sumAllNums(...nums){
    console.log(nums); // will return an array of all the arguments passed to the function [ 1, 2, 3, 4, 5 ]
    let total=0;
    for (const num of nums){
        total+=num
    }
    return total;
}

// console.log(sumAllNums(1,2,3,4,5)); //15

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Passing Object as an argument to a function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const myUser={
    username:"Divyansh",
    email:"divyansh@example.com",
    score:100
}

function userDetails(anyObject){
    console.log(`Username is ${anyObject.username} and email is ${anyObject.email} and score is ${anyObject.score}`);
}

userDetails(myUser); //Username is Divyansh and email is divyansh@example.com and score is 100
//We can also pass object directly without storing it in a variable
userDetails({username:"Rohit", email:"rohit@example.com", score:200}); //Username is Rohit and email is rohit@example.com and score is 200


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Passing Array as an argument to a function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const myArr=[1,2,3,4,5]

function print2ndvalueArray(getArray){
    return getArray[1]
}   

console.log(print2ndvalueArray(myArr)); //2
//We can also pass array directly without storing it in a variable
console.log(print2ndvalueArray([10,20,30,40,50])); //20