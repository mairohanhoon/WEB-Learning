// fetch('https://something.com').then().catch().finally()

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, crytography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
});
promiseOne.then(()=>{
    console.log("Promise Comsumed");
})

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(()=>{
    console.log('Async 2 resolved');
})

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then((user)=>{
    console.log(user);
})

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username: "Rohan", password: "123"})
        }
        else{
            reject('Error! something went wrong')
        }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((myname)=>{ // this is called chaining the return value of the aboue function will be received here 
    console.log(myname);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log('The promise is either resolved or rejected')) 

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username: "JavaScript", password: "123"})
        }
        else{
            reject('Error! JS went wrong')
        }
    }, 1000)
})


//In it we dont cath the error gracefully
async function comsumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);


    // both work the same but try catch helps in halding error
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

comsumePromiseFive();

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log("E : ", error);
//     }
// }
// getAllUsers()

// about same function using try and catch 

fetch('https://api.github.com/users/mairohanhoon')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))