import { useRef } from 'react';

// useRef is the easiest way to reference and manipulate DOM elements

export const UseRefTutorial = () => {
  // setup a ref
  const inputRef = useRef(null);

  const onClick = (event) => {
    console.log({ inputRef: inputRef.current, inputRefValue: inputRef.current.value })
    // focus on the input when you click on the button
    inputRef.current.focus();
    // clear the input
    inputRef.current.value = '';
  }

  return (
    <section>
      <h1>useRef</h1>
      <div>
        <h5>Pedro</h5>
        {/* set the ref prop to the useRef variable you set above */}
        <input type="text" placeholder="Ex..." ref={inputRef} />
        <button onClick={onClick}>Change Name</button>
      </div>
    </section>
  )
}
