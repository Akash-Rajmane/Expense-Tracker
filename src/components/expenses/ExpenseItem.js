import React from 'react';
import "./ExpenseItem.css";
import "./ExpenseDate.js";
import ExpenseDate from './ExpenseDate.js';
import ExpenseDetails from './ExpenseDetails.js';

const ExpenseItem = (props) => {

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <ExpenseDetails location={props.location} title={props.title} amount={props.amount}/> 
      <button onClick={props.deleteHandler}>Delete</button>
    </div>
  )
}

export default ExpenseItem;