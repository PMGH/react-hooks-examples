import './App.css';
import { SectionSeparator } from './components/sectionSeparator';
import { UseCallbackTutorial } from './examples/useCallback/useCallback';
import { UseContextTutorial } from './examples/useContext/useContext';
import { UseEffectTutorial } from './examples/useEffect/useEffect';
import { UseImperativeHandleTutorial } from './examples/useImperativeHandle/useImperativeHandle';
import { UseLayoutEffectTutorial } from "./examples/useLayoutEffect/useLayoutEffect";
import { UseMemoTutorial } from './examples/useMemo/useMemo';
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
        <SectionSeparator />
        <UseContextTutorial />
        <SectionSeparator />
        <UseMemoTutorial />
        <SectionSeparator />
        <UseCallbackTutorial />
      </header>
    </div>
  );
}

export default App;
