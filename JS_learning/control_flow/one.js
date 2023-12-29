// if

// if (conditon ){ // will execute only when the condiion is true

// }

const userIsLoggedIn = true

if(userIsLoggedIn){

}

// === used to just not only compare the value but also the type

if(2 === "2"){
    console.log("Executed");
}
else{
    console.log("Not executed");
}

const temperature = 41

if(temperature < 50){
    console.log("Less than 50");
} else{
    console.log("Temperature is greater than 50");
}

const score = 250

if(score > 200){
    const power = "fly"
    console.log(`User powes : ${power}`);
}