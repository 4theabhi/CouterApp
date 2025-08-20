function CounterButton({ onIncrement, onDecrement }) {
  console.log("Rendering CounterButton component");
  return (
    <>
    <div className='counter-controls'>
      <button className='increment-button' onClick={() => onIncrement(1)}>Increment + 1</button>
      <button className='decrement-button' onClick={() => onDecrement(1)}>Decrement - 1</button>
    </div>
    <div className='counter-controls'>
      <button className='increment-button' onClick={() => onIncrement(5)}>Increment + 5</button>
      <button className='decrement-button' onClick={() => onDecrement(5)}>Decrement - 5</button>
    </div>
    </>
  );
}

export default CounterButton;
