import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  const saveValue = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSaveValue={saveValue} selected={filteredYear} />
        {filteredExpenses.map((el) => {
          return (
            <ExpenseItem
              key={el.id}
              title={el.title}
              amount={el.amount}
              date={el.date}
            />
          )
        })}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  )
}

export default Expenses
