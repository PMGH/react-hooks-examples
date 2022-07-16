import { useReducer } from 'react';

// This is a replacement / alternative to the useState hook - the have the same purpose. When a variable value changes it forces a rerender of the component

// You should consider using useReducer when changing multiple pieces of state at the same time

// It keeps track of multiple pieces of state

// USE STATE EXAMPLE
// export const ReducerTutorial = () => {
//   const [count, setCount] = useState(0);
//   const [showText, setShowText] = useState(true);

//   return (
//     <div>
//       <h1>useReducer</h1>
//       <h1>{count}</h1>
//       <button
//       onClick={() => {
//         setCount(count + 1);
//         setShowText(!showText);
//       }}>Click Here</button>

//       {showText && <p>This is a text</p>}
//     </div>
//   )
// }

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
        showText: state.showText
      }
    case 'toggleShowText':
      return {
        count: state.count,
        showText: !state.showText
      }
    default:
      return state;
  }
}

export const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(
    reducer, {
      count: 0,
      showText: true
    }
  ) // similar to using redux (accepts a reducer function and initial state)

  return (
    <section>
      <h1>useReducer</h1>
      <div>
        <span style={{ marginRight: "10px" }}>{state.count}</span>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "toggleShowText" });
          }}
        >
          Click Here
        </button>

        {state.showText && <p>This is a text</p>}
      </div>
    </section>
  );
}
