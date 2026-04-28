// if(true){
// // let a=10
// // const b=20
// var c=30
// d=40
// }
// // console.log(a);// ReferenceError: a is not defined because let and const are block scoped
// // console.log(b);// ReferenceError: b is not defined because let and const are block scoped
// console.log(c);//30 because var is function scoped and not block scoped
// console.log(d);//40 because we have not declared d with var, let or const so it becomes a global variable and can be accessed anywhere in the code
 

// let a=1000
// let b=2000
// var c=3000
// let d=4000

// if(true){
// let a=10  // this a is different from the a declared outside the block because let is block scoped
// const b=20  // this b is different from the b declared outside the block because const is block scoped
// var c=30 // var is function scoped and not block scoped so it will override the value of c outside the block
// d=40 //
// }
// console.log(a);//1000 because the a inside the block is different from the a outside the block
// console.log(b);// 2000 because the b inside the block is different from the b outside the block
// console.log(c);// 30 because var is function scoped and not block scoped so it will override the value of c outside the block
// console.log(d);// 40 because we have not declared d with var, let or const so it becomes a global variable and can be accessed anywhere in the code and it will override the value of d outside the block
 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Scope of variables in functions ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

if(true){
    const username="Divyansh"
    if(true){
        const website="divyansh.com"
        console.log(username); //Divyansh because username is accessible inside the block and also inside the nested block
        console.log(website); //divyansh.com because website is accessible inside the block and also inside the nested block
    }
    // console.log(website); // ReferenceError: website is not defined because website is only accessible inside the nested block
}
// console.log(username); // ReferenceError: username is not defined because username is only accessible inside the block
// logic(username); // ReferenceError: username is not defined because username is only accessible inside the block



function one(){
    const username="Divyansh"
    function two(){
        const website="divyansh.com"
        console.log(username);
        console.log(website);
    }
    two();
    // console.log(website); // ReferenceError: website is not defined because website is only accessible inside the function two
}
one(); 
// // Output:
// // Divyansh
// // divyansh.com

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ interesting example of scope ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
addone(5); //6 because addone is a function declaration and it is hoisted to the top of the scope so we can call it before its declaration

function addone(num){ // this is a function declaration and it is also a first class citizen in JavaScript because we can assign it to a variable and also pass it as an argument to another function
    return num+1
}




addTwo(5); // ReferenceError: Cannot access 'addTwo' before initialization because addTwo is a function expression and it is not hoisted like function declarations

const addTwo=function(num){ // this is a function expression and it is also a first class citizen in JavaScript because we can assign it to a variable and also pass it as an argument to another function
    return num+2
}
// addTwo(5); //7



// Arrow functions are also function expressions and they are not hoisted like function declarations
addThree(5); // ReferenceError: Cannot access 'addThree' before initialization because addThree is an arrow function and it is not hoisted like function declarations

const addThree=(num)=>{ // this is an arrow function and it is also a first class citizen in JavaScript because we can assign it to a variable and also pass it as an argument to another function
    return num+3
}
addThree(5); //8