import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
     <ExpenseItem/>
     <div>
     Food Rs 10
     </div>
     <div>
     Petrol Rs 100
     </div>
     <div>
     Movies Rs 200
     </div>
    </div>
  );
}

export default App;
