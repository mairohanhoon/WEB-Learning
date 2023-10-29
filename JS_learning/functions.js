
function sayMyName(){
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("A");
    console.log("N");
}

// sayMyName // this only gives only reference

// sayMyName() // this will execute the function

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }  // this will not help to store the returned velue in any variable


// addTwoNumbers() // Will return NaN

// addTwoNumbers(3, 4) 


// the values which are passed during the declaration of the function is called parameters

function addTwoNumbers(number1, number2){
    // let result = number1+number2;
    // return result;

    return number1+number2
}

const res = addTwoNumbers(2, 6)
// console.log(`Result is ${res}`);


function loginUserMessage(username){
    if(!username){ // !username is same as username === undefined
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Rohan"))

console.log(loginUserMessage())

function loginUserMessage2(username2 = "John"){ // it will take default velue as John if no parameter is passed
    if(!username){ // !username is same as username === undefined
        console.log("Please enter a username");
        return
    }
    return `${username2} just logged in`
}