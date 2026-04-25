//singleton
// Object.create

const mySymbol = Symbol("mySymbol");

//object literals
const JsUser={
    name: "Rajiv",
    "Full Name": "Rajiv Ranjan",
    address: "Raipur",
    // mySymbol: "This is a symbol property",
    [mySymbol]: "This is a symbol property",
    age: 12,
    isLogged: true,
    score: [1,2,3,4,5],
    login: function(){
        console.log("User logged in");
    },
    logout: function(){
        console.log("User logged out");
    }
} 

// console.log(JsUser.address);
// JsUser.login();
// JsUser.logout();
// console.log(JsUser["Full Name"]);
// console.log(typeof JsUser[mySymbol]); //symbol
// console.log(JsUser[mySymbol]);// This is a symbol property

// console.log(JsUser);
// JsUser.name="Divansh Ranjan"
console.log(JsUser);

// Object.freeze(JsUser) //freeze the object - no changes allowed
// JsUser.name="Divansh Ranjan"
// console.log(JsUser); // no change in name

Object.seal(JsUser) //seal the object - changes allowed but no new properties can be added
// JsUser.name="Divansh Ranjan"
// JsUser.newProp="New Property"
// console.log(JsUser); // name changed but newProp not added

