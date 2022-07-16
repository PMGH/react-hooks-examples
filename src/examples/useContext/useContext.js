import { createContext, useState } from 'react';
import { Login } from './Login';
import { User } from './User';

// useState example
// export const UseContextTutorial = () => {
//   const [username, setUsername] = useState('');
//   return (
//     <section>
//       <h1>useContext</h1>
//       <div>
//         <Login setUsername={setUsername} />
//         <User username={username} />
//       </div>
//     </section>
//   )
// }


// Context is useful when you want to share props without prop drilling

export const AppContext = createContext(null);

export const UseContextTutorial = () => {
  const [username, setUsername] = useState('');

  return (
    <section>
      <h1>useContext</h1>
      <div>
        <AppContext.Provider value={{ username, setUsername }}>
          <Login />
          <User />
        </AppContext.Provider>
      </div>
    </section>
  );
}
