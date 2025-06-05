const { log } = require("console")
const fs = require("fs")

// Sync call 
// fs.writeFileSync('./test.txt', "Hey Whats up")

// Async call
// fs.writeFile('./test.txt', "Hello world", (err) => {})
 

// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result);

fs.readFile("./contacts.txt", "utf-8", (err, result) => {
    if(err){
        console.log("Error", err);
    }
    else{
        console.log(result);
    }
})