const user = {
    username: "Rohan",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); // here it referes the 
    }
}


// user.welcomeMessage()
// user.username = "Ron";
// user.welcomeMessage()

console.log(this); // under the node environment this referes to a empty object

// function chai(){
//     console.log(this);
//     console.log(this.username); // cant be acessed it is saturated to objects only
// }

// chai()

// const chai = () => {
//     let username = "Rohan"
//     console.log(this);
// } 

// chai()


//Basic arrow function
// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// Implicit return 
// const addTwo = (num1, num2) => num1+num2
// or
const addTwo = (num1, num2) => (num1+num2) // this technique is used in react 
// the return value are written under () 

console.log(addTwo(5, 9))