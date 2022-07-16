import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/comments';

// Example without useMemo
// export const UseMemoTutorial = () => {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);

//   useEffect(() => {
//     axios.get(API_URL).then(res => {
//       setData(res.data);
//     });
//   }, [])

//   const findLongestName = (comments) => {
//     if(!comments) {
//       return null;
//     }

//     let longestName = '';
//     for (let i = 0; i < comments.length; i++) {
//       let currentName = comments[i].name;
//       if(currentName.length > longestName.length) {
//         longestName = currentName;
//       }
//     }
//     console.log('THIS WAS COMPUTED')
//     return longestName;
//   }

//   return (
//     <section>
//       <h1>useMemo</h1>
//       <div>LongestName: {findLongestName(data)}</div>
//       <button onClick={() => setToggle(!toggle)}>Toggle</button>
//       {toggle && <h5>Toggle</h5>}
//     </section>
//   )
// }


// useMemo is useful when we don't want something to be recomputed if it isn't going to change

export const UseMemoTutorial = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get(API_URL).then(res => {
      setData(res.data);
    });
  }, [])

  const findLongestName = (comments) => {
    if(!comments) {
      return null;
    }

    let longestName = '';
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if(currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log('THIS WAS COMPUTED')

    return longestName;
  }

  // We only want to recompute the longest name when the data changes
  // So we pass [data] as the dependencies array
  // If we include toggle in the dependencies array the longestName will be recomputed each time we toggle
  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <section>
      <h1>useMemo</h1>
      <div>LongestName: {getLongestName}</div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h5>Toggle</h5>}
    </section>
  );
}
