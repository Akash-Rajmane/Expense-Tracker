import React from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

const Expenses = (props) => {

  const filteredArray = props.expenses
            .filter((el) => {
              const date = new Date(el.date).getFullYear();
              if(props.selected==="All"){
                return el;
              }
              return date == props.selected;
            })
            .map((el) => (
               <ExpenseItem key={el.id} title={el.title} amount={el.amount} date={el.date} location={el.location} deleteHandler={() => props.deleteHandler(el.id)} />
            ));

  const mappedArray =  props.expenses.map(el => (
    <ExpenseItem key={el.id} title={el.title} amount={el.amount} date={el.date} location={el.location} deleteHandler={() => props.deleteHandler(el.id)} />
  ))     
  

  return (
    <Card>
      {props.expenses.length===0 && <h1 style={{color:"#fff"}}>No Data found</h1>}
      {props.selected === "" ? mappedArray: filteredArray.length>0 ? filteredArray : (filteredArray.length===0 && props.expenses.length!==0) && <h1 style={{color:"#fff"}}>No Data found</h1>}
      {(filteredArray.length!==0 && mappedArray.length===1) && <h1 style={{color:"#fff"}}>Only Single Expense here. Please add more.</h1>}
    </Card>
  );
}

export default Expenses;
