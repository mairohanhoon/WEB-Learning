const myArr = [0, 1, 2, 3, 4, 5] //declaration of array
// elements inside the array can be of different type

// JavaScript arrays are resizable

console.log(myArr[2]); // to acess the array 
// zero base indexing
 
const myHeors = ["shaktiman", "superman"]

const myArr2 = new Array(1, 2, 3, 4)

// Array Methods

// myArr.push(6) // it simply adds the element in the array
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
console.log(myArr);

// myArr.unshift(9) // insert the element at the first
// console.log(myArr);

myArr.shift();
console.log(myArr); // Deletes the first element of the array

console.log(myArr.includes(9)); 
// Return boolean value of numbers existence

console.log(myArr.indexOf(9));
// Returns index of the number if not present return -1

const newArr = myArr.join() // addes the value and converts the array in string

console.log(myArr); 
console.log(typeof newArr);


//SLICE, SPLICE

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // 3 will not be included

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2); // Splice will remove that part form the original
