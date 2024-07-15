import { createContext, useContext } from "react"

export const ToDoContext = createContext({
    todos: [],
    addToDo: (todo) => {},
    updateToDo: (id, todo) => {},
    deleteToDo: (id) => {},
    toggleComplete: (id) => {}
})

export const UseToDoContext = () => {
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider