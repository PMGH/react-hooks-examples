import './App.css';
import { SectionSeparator } from './components/sectionSeparator';
import { UseEffectTutorial } from './examples/useEffect/useEffect';
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
        <SectionSeparator />
        <UseEffectTutorial />
      </header>
    </div>
  );
}

export default App;
