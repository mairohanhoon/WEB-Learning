import React from "react";
import { useCart } from "../context/Cart.jsx";

const Cart = () => {
    const cart = useCart();
    // let total = 0;
    // cart.items.map((item) => total += item.price)
    let total = cart.items.reduce((a, b) => a + b.price, 0)
    return (
        <div>
            <h1>Cart</h1>
            {
                cart && cart.items.map((item) => <li>{item.name} - ${item.price}</li>)
            }
            <h5>Total Bill : ${total}</h5>
        </div>
    )
};

export default Cart;