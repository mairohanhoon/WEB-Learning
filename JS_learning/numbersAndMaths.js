const score = 400;
// console.log(score);

const balance = new Number(100); // Explecitily defining it is a number
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ MATHS ++++++++++++++++++

// console.log(Math.abs(-4));
// console.log(Math.round(5.7));
// console.log(Math.round(7.2));

// console.log(Math.ceil(18.2));
// console.log(Math.floor(8.9));

// console.log(Math.min(4, 2, 6, 67, 9));

console.log(Math.random()); // outputs random value between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
