// They can be creates as literals and constructors

// Singleton?
//Literals wala decleration ma no singleton
//Constructor ma singleton banta hai

// Object.create //constructor method 

//objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Rohan",
    "full name": "Rohan Tiwari",
    // mySym: "myKey1", in this it will be used as string not as symbol
    [mySym]: "myKey1",
    age: 19,
    location: "Haldwani",
    email: "rohan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 

// console.log(JsUser.email); // not a good practice

/*
using [] is a good practice becasue if the key is 
initialized as a string in object it cann't be accessed using dot
*/ 
console.log(JsUser["email"]);

console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "rohan@chatgpt.com"
// console.log(JsUser);
// Object.freeze(JsUser)
JsUser.email = "rohan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
} 

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
} 

console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());