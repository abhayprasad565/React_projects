import { createContext, useContext } from "react";
export const todoContext = createContext({
    todos: [
        {
            todo: "todo title",
            id: 1,
            completed: false,
        },
    ],
    updateTodo: (id, title) => { },
    deleteTodo: (id) => { },
    addTodo: (todo) => { },
    toggleComplete: (id) => { }
});
export const useTodo = () => {
    return useContext(todoContext);
}
export const TodoProvider = todoContext.Provider;