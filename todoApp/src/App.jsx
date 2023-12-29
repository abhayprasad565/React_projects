import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/todoContext'
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), todo: todo, completed: false }]);
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((p) => p.id === id ? { ...todo } : p))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((v) => v.id != id));
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((p) => p.id === id ? { ...p, completed: !p.completed } : p));
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm></TodoForm>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}

          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
