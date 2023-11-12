import React from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

const Expenses = (props) => {

  const filteredArray = props.expenses
            .filter((el) => {
              const date = new Date(el.date).getFullYear();
              return date == props.selected;
            })
            .map((el) => (
               <ExpenseItem key={el.id} title={el.title} amount={el.amount} date={el.date} location={el.location} deleteHandler={() => props.deleteHandler(el.id)} />
            ));

  return (
    <Card>
      {props.selected === ""
        ? props.expenses.map(el => (
            <ExpenseItem key={el.id} title={el.title} amount={el.amount} date={el.date} location={el.location} deleteHandler={() => props.deleteHandler(el.id)} />
          ))
        : filteredArray.length>0 ? filteredArray : <h1 style={{color:"#fff"}}>No Data Found</h1>
      }
    </Card>
  );
}

export default Expenses;
