import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  //Oppgave (A-B)
  let personsNavn = "Petter";
  let personAlder = 43;
  let dyrNavn = "Snowflake";
  let DyrAlder = 4;
  
  //let hundeaar = personAlder * 7;

  const [hundeaar, setHundeaar] = useState(personAlder * 7);
    
    function checkHundeaar() {

      if (hundeaar > 100) {
        setHundeaar(99);
        return
      } else {
        // setHundeaar(personAlder * 7);
      }
    }
//Oppgave (C)
    // Declare a state variable to store the input value
  let [personsNavnOppC, setpersonsNavnOppC] = useState('');
  let [personAlderOppC, setpersonAlderOppC] = useState('');
  let [dyrNavnOppC, setdyrNavnOppC] = useState('');
  let [DyrAlderOppC, setDyrAlderOppC] = useState('');

  // Handler for the input change
  function perName (event) {
    setpersonsNavnOppC(event.target.value);
  };
  function PerAge (event) {
    setpersonAlderOppC(event.target.value);
  };
  function AnimName (event) {
    setdyrNavnOppC(event.target.value);
  };
  function AnimAge (event) {
    setDyrAlderOppC(event.target.value);
  };
  
  return (
    <>
      <header>
        <div className='logo'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='header-h1'>
          <h1>YFF Oppgaver</h1>
        </div>
      </header>
      <div className='row'>
        <div className='oppgave-box'>
          <h2>Oppgave 1</h2>
          <h3>Oppgave (A-B)</h3>
          <p>hei! {personsNavn}.</p>
          <p>Du er {personAlder} år gammel.</p>
          <p>Hunden din hetter {dyrNavn}.</p>
          <p>Hunden din er {DyrAlder} år gammel.</p>
          <p></p>
          <button onClick={checkHundeaar} id='hundeAlder'>{hundeaar}</button>
        </div>{/*oppgave-box*/}
        <div className='oppgave-box'>
          <h2>Oppgave 1</h2>
          <h3>Oppgave (C)</h3>
          <input type="text" value={personsNavnOppC} onChange={perName} className='buttontext' placeholder="Name"/>
          <input type="number" value={personAlderOppC} onChange={PerAge} className='buttontext'placeholder="Age"/>
          <input type="text" value={dyrNavnOppC} onChange={AnimName} className='buttontext'placeholder="Animal Name"/>
          <input type="number" value={DyrAlderOppC} onChange={AnimAge} className='buttontext'placeholder="ANimal Age"/>
          <p>hei! {personsNavnOppC}.</p>
          <p>Du er {personAlderOppC} år gammel.</p>
          <p>Hunden din hetter {dyrNavnOppC}.</p>
          <p>Hunden din er {DyrAlderOppC} år gammel.</p>
        </div>{/*oppgave-box*/}
      </div>{/*row*/}
      <div className='row'>
        <div className='oppgave-box'>
          <h2>Oppgave 2</h2>
        </div>{/*oppgave-box*/}
        <div className='oppgave-box'>
          <h2>Oppgave 3</h2>
        </div>{/*oppgave-box*/}
      </div>{/*row*/}
    </>
  );
}

export default App;
