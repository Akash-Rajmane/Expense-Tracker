import React,{useState} from 'react';
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
const [show, setShow] = useState(true);

const saveExpenseDataHandler = (data) => {
  const expenseData = {
    ...data,
    id: Math.random().toString()
  }
  props.onAddExpense(expenseData);
}


  return (
    <div className='new-expense'>
       {
       show ? <button onClick={()=>setShow(!show)} className='btn'>Add New Expense</button>
        : <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} setShow={setShow}/>
        }
      
    </div>
  )
}

export default NewExpense;