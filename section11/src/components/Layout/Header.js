import React from 'react'
import mealImg from '../../assets/meals.jpg'

import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img alt="A table full of food!" src={mealImg} />
      </div>
    </>
  )
}

export default Header
