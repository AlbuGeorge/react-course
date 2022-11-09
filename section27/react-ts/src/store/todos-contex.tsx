import { useState } from 'react'
import Todo from '../models/todo'

type TodosContextObj = {
  items: Todo[]
  addTodo: (text: string) => void
  removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
})

const TodosContextProvider: React.FC = () => {
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

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeHandler,
  }
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider
