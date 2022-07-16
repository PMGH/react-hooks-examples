import { useContext } from 'react';
import { AppContext } from './useContext';

// useState example
// export const User = ({ username }) => {
//   return (
//     <p>User: {username}</p>
//   )
// }

export const User = () => {
  const { username } = useContext(AppContext);

  return (
    <p>User: {username}</p>
  )
}
