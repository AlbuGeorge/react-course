import React from 'react'
import { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

import CartContext from '../../../store/cart-context'

const MealItem = (props) => {
  useContext()
  const price = `$${props.price.toFixed(2)}`

  const addToCartHandler = (amount) => {}

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm onAddToCart={addToCartHandler} />
    </li>
  )
}

export default MealItem
