// for of

// these are array centric loops

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    // console.log(num);
}

const greetings = "Hello World!";

for(const great of greetings){
    if(great == ' '){
        continue
    }
    // console.log(`Each char is ${great}`);
}

// maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

map.set('IN', "India")
// Map contains unique values in the order they were inserted in it 

// console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'SpiderMan'
}

// for (const [key,value] of myObject) {// not itertratable in objects in this way
//     console.log(`${key} :- ${value}`);
// }

