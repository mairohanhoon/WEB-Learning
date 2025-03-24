import React from "react";

const TodoItem = (props) => {
    return (
        <li className="flex justify-between items-center m-2 p-2">
            <span>
            {props.completed ? <></> : <input className="m-2" type="checkbox" />}
            <span>{props.text}</span>
            </span>
            <p>...</p>
        </li>
    )
}

export default TodoItem