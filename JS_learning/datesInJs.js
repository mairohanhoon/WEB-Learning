// DATES

let myDate = new Date() 
console.log(myDate); 
//Outputs : 2023-10-17T16:25:07.403Z

console.log(myDate.toString());
//Outputs : Tue Oct 17 2023 21:55:07 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());
//Outputs : Tue Oct 17 2023

console.log(myDate.toLocaleString());
//Outputs : 10/17/2023, 9:57:33 PM

console.log(myDate.toLocaleTimeString());
//Outputs : 9:58:40 PM

console.log(myDate.toLocaleDateString());
//Outputs : 10/17/2023

console.log(myDate.toISOString());

console.log(typeof myDate);
//DATE is a object

let myCreatedDate = new Date(2023, 0, 23) 
// mounths start from 0 in JavaScript
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)

let myCreatedDate2 = new Date("2023-01-14")

console.log(myCreatedDate2.toDateString());

let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate3.toLocaleDateString());

let myTimeStamp = Date.now()
//Returns current time in Milliseconds
console.log(myTimeStamp);

console.log(myCreatedDate3.getTime());

console.log(Math.floor(Date.now()/1000));
myCreatedDate3.toLocaleString('default', {
    weekday: "long",
})
