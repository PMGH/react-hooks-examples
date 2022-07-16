import { useRef } from 'react';
import { Button } from './Button';

// useImperativeHandle is useful when you need to alter the value of a child component's state
// Useful when you need to create a reusable component with functionality that needs to be invoked from the outside
// In this example useImperativeHandle is used inside the Button component

export const UseImperativeHandleTutorial = () => {
  const buttonRef = useRef(null);

  return (
    <section>
      <h1>useImperativeHandle</h1>
      <div>
        <button onClick={() => {buttonRef.current.alterToggle()}}>Button From Parent</button>
        <Button ref={buttonRef} />
      </div>
    </section>
  );
}
