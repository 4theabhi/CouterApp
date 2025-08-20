import { useState } from 'react';
import './App.css';
import CounterDisplay from './Components/Counter_Display';
import CounterButton from './Components/Counter_Button';
import Message from './Components/Message';

function App() {

  const [counter, setCounter] = useState(10);
  console.log("Base Counter value:", counter);

  const increment = (value) => {
    console.log("Incrementing Counter");
    setCounter(counter + value);
  };
  const decrement = (value) => {
    console.log("Decrementing Counter");
    setCounter(counter - value);
  };

  return (
    <div >
      <CounterDisplay counter={counter} />
      <CounterButton onIncrement={increment} onDecrement={decrement} />
      <Message />
    </div>
  );
}

export default App;
