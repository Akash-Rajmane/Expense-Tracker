import React from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

const Expenses = (props) => {
  return (
    <Card>{props.expenses.map(el=>{
        return(
          <ExpenseItem title={el.title} amount={el.amount} date={el.date} location={el.location}/>
        )
       })}
    </Card>
  )
}

export default Expenses;
