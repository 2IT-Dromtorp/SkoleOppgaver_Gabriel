import { useState } from "react";
import './count.css';

export default function Counter() {
    let [letup, setLetup] = useState (0)
    
    let upPress =() => {
      setLetup(letup + 1);
    };

    let midPress =() => {
      setLetup(letup = 0);
    };

    let downPress =() => {
      setLetup(letup - 1);
    };
    return (
      <div>
        <h1>Welcome to my counter app</h1>
        <p>{<button onClick={upPress} id="uppre">+</button>}</p>
        <p>{<button onClick={midPress} id="midre">{letup}</button>}</p>
        <p>{<button onClick={downPress} id="dowre">-</button>}</p>
      </div>
    );
  }
  