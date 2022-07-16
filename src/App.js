import './App.css';
import StateTutorial from './examples/useState/useState';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StateTutorial />
      </header>
    </div>
  );
}

export default App;
