import React from "react";
import { CartContext } from "../context/Cart";
import { useContext } from "react";

const Item = (props) => {
    const cart = useContext(CartContext);
    console.log(cart);
    
    return (
        <div className="bg-slate-200 shadow-lg rounded-md p-2 m-2">
            <h4 className="font-extrabold text-2xl font-mono p-1">{props.name}</h4>
            <p className="font-mono font-normal text-lg p-1">Price: ${props.price}</p>
            <button className="bg-blue-500 text-white font-mono font-bold p-1" onClick={()=>{
                cart.setItems([...cart.items,
                    {name: props.name, price: props.price},
                ])
            }}>Add To Cart</button>
        </div>
    )
};

export default Item;