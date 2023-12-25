// let var const 


// {} these are scopes
let a = 300;
if(true){
    let a = 10;
    const b = 20;
    var c = 30
    //console.log(`Inner: ${a}`);
}

// console.log(a);
// console.log(b);
//console.log(c); // this c will be printed as it can be accessed outside the scope hence using it is not a good practice 
// good practice is to avoid var due to its scope

//console.log(a);

function one(){
    const username = "rohan"

    function two(){
        const website = "youtube"
        //console.log(username);
    }
    // console.log(website);

    two()
}
one()
// child scope can acess the parent scopes as they are global scopes for them 
// but parent scopes cannot do it so as they are restricted by the scope

if(true){
    const username = "rohan"
    if(username === "rohan"){
        const website = "youtube"
        //console.log(username+website);
    }
    //console.log(website); // will refletct error out of scope
}

//console.log(username);  will reflect error out of scope


// +++++++ INTERESTING +++++++

addone(5) // this will not reflect error while begin excessed before declaration
function addone(num){
    return num + 1
}

addone(5)

addTwo(5) // this will reflect error since we have stored while declared
const addTwo = function(num){
    return num+2
}


