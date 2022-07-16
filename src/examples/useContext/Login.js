import { useContext } from 'react';
import { AppContext } from './useContext';

// useState example
// export const Login = ({ setUsername }) => {
//   return (
//     <div>
//       <input type="text" onChange={(event) => {
//         setUsername(event.target.value)
//       }} />
//     </div>
//   )
// };

export const Login = () => {
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input type="text" onChange={(event) => {
        setUsername(event.target.value)
      }} />
    </div>
  )
};
