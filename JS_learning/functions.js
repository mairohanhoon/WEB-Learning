
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


// function loginUserMessage(username){
//     if(!username){ // !username is same as username === undefined
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Rohan"))

// console.log(loginUserMessage())

function loginUserMessage2(username2 = "John"){ // it will take default velue as John if no parameter is passed
    if(!username2){ // !username is same as username === undefined
        console.log("Please enter a username");
        return
    }
    return `${username2} just logged in`
}

console.log(loginUserMessage2("Rohan"));

function calculateCartPrice(...num1){  // ... is a rest operator and also a spread operator it is defined according to its use
    return num1;
}

function calculateCartPrice2(val1, val2, ...num2){
    return num2;
}

// console.log(calculateCartPrice(200, 300, 400));


console.log(calculateCartPrice2(200, 300, 400, 2000, 5000));

const user = {
    username10: "Rohan",
    prices: 199,
}
function handleObjects(anyObject){
    console.log(`Username is ${anyObject.username10} and price is ${anyObject.price}`);
}

// handleObjects(user)

handleObjects({
    username10: "Ron",
    price: 144
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));


console.log(returnSecondValue([200, 100, 578, 901]));

