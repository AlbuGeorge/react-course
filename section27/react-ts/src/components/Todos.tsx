import { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodosContext } from '../store/todos-contex'
import classes from './Todos.module.css'

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext)
  return (
    <div>
      <ul className={classes.todos}>
        {todosCtx.items.map((item) => (
          <TodoItem
            onRemoveHandler={todosCtx.removeTodo.bind(null, item.id)}
            key={item.id}
            text={item.text}
          />
        ))}
      </ul>
    </div>
  )
}

export default Todos
