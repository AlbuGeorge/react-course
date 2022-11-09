import React, { useRef } from 'react'

import classes from './NewTodo.module.css'

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const addHandler = () => {
    const inputValue = inputRef.current!.value

    if (inputValue.trim().length === 0) {
      return
    }

    console.log(inputValue)
    props.onAddTodo(inputValue)
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" ref={inputRef}></input>
      <button onClick={addHandler}>Add Todo</button>
    </form>
  )
}

export default NewTodo
