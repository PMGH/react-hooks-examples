import './App.css';
import { SectionSeparator } from './components/sectionSeparator';
import { ReducerTutorial } from "./examples/useReducer/useReducer";
import {
  StateTutorial
} from "./examples/useState/useState";
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SectionSeparator />
        <StateTutorial />
        <SectionSeparator />
        <ReducerTutorial />
      </header>
    </div>
  );
}

export default App;
