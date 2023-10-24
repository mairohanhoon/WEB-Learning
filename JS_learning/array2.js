const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); 
// will return a array containing an array inside of it as an array element

const all_heros = marvel_heros.concat(dc_heros)
// this method actually combines the whole array 
console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// This is also a method to combine or attach two or more arrays
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// used to flat the array with lots of different levels
const real_another_array = another_array.flat(Infinity)
// Flat takes the input of the levels to be flatened
console.log(real_another_array);

console.log(Array.isArray("Rohan"))

console.log(Array.from("Rohan")) // Converts into array

console.log(Array.from({name: "Rohan"})); // intresting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // converts the values into an array
