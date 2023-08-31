import logo from './halo.png';
import './App.css';
import Oppgave1 from './Oppgave1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Oppgave1 />
      </header>
    </div>
  );
}

export default App;
