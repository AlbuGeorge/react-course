import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import classes from './AddUser.module.css'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [ageEntered, setAgeEntered] = useState('')
  const [error, setError] = useState()

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value)
  }

  const ageChangeHandler = (e) => {
    setAgeEntered(e.target.value)
  }

  const addUserHandler = (e) => {
    e.preventDefault()
    if (enteredUsername.trim() === 0 || ageEntered.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (not empty values)',
      })
      return
    }

    if (+ageEntered < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      })
      return
    }
    props.onAddUser(enteredUsername, ageEntered)
    setEnteredUsername('')
    setAgeEntered('')
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}></input>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            value={ageEntered}
            type="number"
            onChange={ageChangeHandler}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser
