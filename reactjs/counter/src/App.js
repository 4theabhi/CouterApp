import { useState } from 'react';
import './App.css';
import CounterDisplay from './Components/Counter_Display';
import CounterButton from './Components/Counter_Button';


function App(props) {

  const [counter, setCounter] = useState(props.startValue);
  console.log("Base Counter value:", counter);

  const increment = (value) => {
    console.log("Incrementing Counter");
    setCounter((counter) => counter + value);
  };
  const decrement = (value) => {
    console.log("Decrementing Counter");
    setCounter((counter) =>  counter - value);
  };

  return (
    <div >
      <CounterDisplay counter={counter} />
      <CounterButton onIncrement={increment} onDecrement={decrement} />
    </div>
  );
}

export default App;
