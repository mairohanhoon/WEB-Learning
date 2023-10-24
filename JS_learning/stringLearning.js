const name = "Rohan"
const repoCount = 5

console.log(name + repoCount + "Value"); // old and bad practice

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);
// new and better readable code

// declaration of string
const gameName = new String('Kanye-Wasim-Game')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));

// console.log(gameName.indexOf('W'));

const newString = gameName.substring(0, 4); // end is not included in this
console.log(newString);

const anotherString = gameName.slice(0,4);
console.log(anotherString);

const newStringOne = "     rohan    "
console.log(newStringOne);
console.log(newStringOne.trim());
// Trim generally removes the starting and ending extra spaces

const url = "https://rohan.com/rohan%20tiwari"

console.log(url.replace('%20', '-'))

console.log(url.includes('rohan')); 

console.log(gameName.split('-')); 