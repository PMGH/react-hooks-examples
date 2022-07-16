import { useCallback, useState } from 'react';
import { Child } from './Child';

// useCallback is very similar to the useMemo hook
// The difference is that useMemo stores a value from the function that is memoised and can be assigned to a variable
// useCallback stores a function instead of a value

// Example without useCallback
// export const UseCallbackTutorial = () => {
//   const [toggle, setToggle] = useState(false);
//   const [data, setData] = useState('Initial data ');

//   // Currently returnComment's useEffect is ran each time the state changes in this UseCallbackTutorial component despite returnComment being in the useEffect dependency array because this returnComment function is recreated each time this component rerenders
//   const returnComment = (name) => {
//     return data + name;
//   }

//   return (
//     <section>
//       <h1>useCallback</h1>
//       <div>
//         <Child returnComment={returnComment} />

//         <button onClick={() => setToggle(!toggle)}>Toggle</button>
//         {toggle && <p>Toggle</p>}
//       </div>
//     </section>
//   );
// }

export const UseCallbackTutorial = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState('Initial data ');

  // Similar use case to useMemo
  const returnComment = useCallback((name) => {
    return data + name;
  }, [data]);

  return (
    <section>
      <h1>useCallback</h1>
      <div>
        <Child returnComment={returnComment} />

        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle && <p>Toggle</p>}
      </div>
    </section>
  );
}
