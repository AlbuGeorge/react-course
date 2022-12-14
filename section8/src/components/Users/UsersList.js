import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((el) => {
          return (
            <li key={el.id}>
              {el.name} ({el.age} years old)
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export default UsersList
