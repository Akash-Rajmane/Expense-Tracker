import React, {useState} from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses';


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
  

  const deleteHandler = (id) => {
    let newExpenses = expenses.filter(el=>el.id!==id);
    setExpenses(newExpenses);
  }

  return (
    <div className="App">
     <Expenses expenses={expenses} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default App;
