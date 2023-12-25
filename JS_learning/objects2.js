
const tindleUser = new Object()
// singleton and non singleton objects when empty outputs same

console.log(tindleUser); // {}

tindleUser.id = "123abc"
tindleUser.name = "Sammy"
tindleUser.isLoggedIn = false

// console.log(tindleUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "rohan",
            lastname: "tiwari"
        }
    }   
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const  obj3 = {obj1, obj2} // will return a object containing objects

const obj3 = Object.assign({}, obj1, obj2, obj4)

console.log(obj3);

const obj5 = {...obj1, ...obj2} // alternate method to combine to or more objects by spreading the objectes
//Mostly used

console.log(obj5);

const user = [
    {
        id: 1,
        email: "some1@gmail.com",
    },
    {
        id: 2,
        email: "some2@gmail.com",
    },
    {
        id: 3,
        email: "some3@gmail.com",
    },
    {
        id: 4,
        email: "some4@gmail.com",
    }
]

// console.log(user[1].email);

// console.log(Object.keys(tindleUser));

// console.log(Object.values(tindleUser));
//returns a array of values or keys
// console.log(Object.entries(tindleUser));

// console.log(tindleUser.hasOwnProperty('isLoggedIn'));
// console.log(tindleUser.hasOwnProperty('isLogged'));


// destructuring of objects

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructur: "Hitesh",
}

const {courseInstructur} = course

console.log(courseInstructur);

const {courseInstructur: instructur} = course
// this is know as destructuring of objects

console.log(instructur);

// { // in the json files the key is also stored as a string
//     "name": "Hitesh",
//     "coursename": "JS in hindi",
//     "price": "Free",
// }

 4:34:00