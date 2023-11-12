import React, {useState} from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/expenses/ExpensesFilter';



function App() {
  const [expenses,setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Akluj"
    },
    { id: 'e2', 
      title: 'New TV', 
      amount: 799.49,
      date: new Date(2021, 2, 12), 
      location: "Solapur"
     },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Pune"
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Pune"
    },
  ])

  const [filteredYear, setFilteredYear] = useState("");
  
  
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  }

  const deleteHandler = (id) => {
    let newExpenses = expenses.filter(el=>el.id!==id);
    setExpenses(newExpenses);
  }

  const addExpenseHandler = (expense) => {
    let newExpenses = [...expenses, expense];
    setExpenses(newExpenses);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <Expenses expenses={expenses} deleteHandler={deleteHandler} selected={filteredYear}/>
      
    </div>
  );
}

export default App;
