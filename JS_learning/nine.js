const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`Acc : ${acc} and curval : ${curval}`);
//     return acc+curval
// }, 0)
//writing same using arrow function

const myTotal = myNums.reduce( (acc, cur) => acc+cur, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999,
    },
    {
        itemName: "Python Course",
        price: 999,
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999,
    },
    {
        itemName: "Data Science Course",
        price: 12999,
    },
]

const cartTotal = shoppingCart.reduce( (acc, cur) => acc+cur.price, 0)
console.log(cartTotal);