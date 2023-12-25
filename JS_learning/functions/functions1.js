// console.log("R");
// console.log("o");
// console.log("h");
// console.log("a");
// console.log("n");

 function sayMyName(){
    console.log("R");
    console.log("o");
    console.log("h");
    console.log("a");
    console.log("n");
 }

// sayMyName  {this is only the reference this will not execute}

//sayMyName() 
// as we put () it means executeion 

// function addTwoNumbers(number1, number2){ // while declaration () things inside it are called parameters
//     console.log(number1 + number2);
// }

// addTwoNumbers() // will return NaN 

// addTwoNumbers(3, "4") // when fucntion is called things inside () are called arguments

// const result = addTwoNumbers(3, 7);

// console.log("RESULT is : ", result); // will give an output "undefined" as there is no return type

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result
    return number1+number2
}

const result = addTwoNumbers(3, 6);

// console.log("RESULT is: ", result);

// function loginUserMessage(username){
//     // if(username === undefined){
//     //     console.log("Please enter a username");
//     //     return
//     // }
//     // could also be written as 
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// To avoid the stuations of undefined value we sometime give the function the default values

function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    // could also be written as 
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Rohan") );
// console.log(loginUserMessage());

function calculateCartPrice(...num1){ // here we use rest operator it looks similar to spread operator but has different operation
    return num1 //  after using rest operator it will returning the values in the form of array
}
console.log(calculateCartPrice(2));

console.log(calculateCartPrice(200, 100 ,300)); // for therese situation we use rest operator "..." represented by three dots

function calculateCart(val1, val2, ...num1){
    return num1;
}

console.log(calculateCart(1000, 2313, 5111, 213123, 800)); // it will output the array of elements after first and second elements 
console.log(calculateCart(1000, 2000)); // if there is no values it will return an empty array 

const user = {
    username: "Rohan",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}
// handleObject(user)
//We can directly pass the object to the function
handleObject({
    username: "Rohan Tiwari",
    price: 20,
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));

// 5:05:10 last seen till here