import React from "react";

const Button = (props) => {
    return (
        <button className="p-2 hover:bg-slate-300 shadow-md bg-slate-200 rounded-lg m-1" onClick={props.onClick}>{props.value}</button>
    )
}

export default Button;