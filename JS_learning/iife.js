// Immediately Invoked Function Expressions IIFE
// we do this to protect our fuction form poluting from global scope and to execute the function immediately


// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()
// Normal function 

(function chai(){
    // named IIFE 
    console.log(`DB CONNECTED`);
})(); // IIFE 
// always end this type of functions with ; as they dont't know where to stop

// (First paranthesis is where we define the function)(And this second one becomes the execution call)

// with arrow function we can write it as 

( () => {
    console.log(`DB CONNECTED TWO`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Rohan");


// Done