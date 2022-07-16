import './App.css';
import {
  StateTutorialButton,
  StateTutorialInput
} from "./examples/useState/useState";
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StateTutorialButton />
        <StateTutorialInput />
      </header>
    </div>
  );
}

export default App;
