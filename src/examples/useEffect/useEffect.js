import axios from 'axios';
import { useEffect, useState } from 'react';

// Docs: https://beta.reactjs.org/learn/synchronizing-with-effects

// useEffect Firing twice in Development: https://beta.reactjs.org/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development

// useEffect is most commonly used for making API requests

const API_URL = 'https://jsonplaceholder.typicode.com/comments'

export const UseEffectTutorial = () => {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('hello world')
    axios.get(API_URL).then((res) => {
      console.log({ data: res.data })
      setData(res.data[0].email)
      console.log('API was called')
    })
  }, [count])
  // if you only want the useEffect to be called once on component mount then pass an empty array
  // if you want it to be called when another piece of state changes then provide that piece of state ('dependency') in the array
  // it is not recommended to not supply the dependencies array

  return (
    <section>
      <h1>useEffect</h1>
      <p>Hello World {data}</p>
      <div>
        <span style={{ marginRight: '10px' }}>{count}</span>
        <button
          onClick={() => {
            // clicking the button will cause useEffect to be called again because count is within the dependency array
            setCount(count + 1);
          }}
        >Click here</button>
      </div>
    </section>
  )
}
