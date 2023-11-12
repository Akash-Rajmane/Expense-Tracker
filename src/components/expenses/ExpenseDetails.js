import React,{useState} from 'react'

const ExpenseDetails = (props) => {
  const [amount, setAmount] = useState(props.amount);
  
  return (
    <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${amount}</div>
        <button onClick={()=>setAmount(100)}>change amount</button>
        <div className='expense-item__location'>{props.location}</div>

    </div>
  )
}

export default ExpenseDetails;