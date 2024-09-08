import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {}, // we will just write the function and will define it later
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {} 
    // in this context we just talked only about context that what value and methods we need not about the functionality
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider