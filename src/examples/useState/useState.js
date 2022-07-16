import { useState } from 'react';

const StateTutorial = () => {
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

export default StateTutorial;
