import './App.css';
import { SectionSeparator } from './components/sectionSeparator';
import { UseEffectTutorial } from './examples/useEffect/useEffect';
import { UseImperativeHandleTutorial } from './examples/useImperativeHandle/useImperativeHandle';
import { UseLayoutEffectTutorial } from "./examples/useLayoutEffect/useLayoutEffect";
import { ReducerTutorial } from "./examples/useReducer/useReducer";
import { UseRefTutorial } from "./examples/useRef/useRef";
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
        <SectionSeparator />
        <UseRefTutorial />
        <SectionSeparator />
        <UseLayoutEffectTutorial />
        <SectionSeparator />
        <UseImperativeHandleTutorial />
      </header>
    </div>
  );
}

export default App;
