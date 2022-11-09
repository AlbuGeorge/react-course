import { useState } from 'react'
import NewTodo from './components/NewTodo'
import Todos from './components/Todos'
import Todo from './models/todo'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text)

    setTodos((prev) => {
      return prev.concat(newTodo)
    })
  }
  const removeHandler = (todoId: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== todoId)
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeHandler} />
    </div>
  )
}

export default App
