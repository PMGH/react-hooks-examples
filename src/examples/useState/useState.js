import { useState } from 'react';

export const StateTutorialButton = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button onClick={decrement}>Decrement</button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export const StateTutorialInput = () => {
  const [inputValue, setInputValue] = useState('Pedro');

  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  return (
    <div>
      <input type="text" placeholder="Enter something..." onChange={onChange} style={{ marginRight: '10px' }} />
      {inputValue}
    </div>
  )
}
