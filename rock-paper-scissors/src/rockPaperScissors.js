import {useState} from 'react';

function RockPaperScissors () {
  const [num, setNum] = useState(0);
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleClick () {
    setNum(randomNumberInRange(1, 3));
  };
  let R = "Rock";
  let P = "Paper";
  let S = "scissors";
  function Rps () {
    if (num = 1) {
      return "R";
    }
    else if (num = 2) {
      return "P";
    }
    else if (num = 3) {
      return "S";
    }
  }
  return (
    <div>
      <h2>{Rps}</h2>
      <h2>number is: {num}</h2>
      <button onClick={handleClick}>Generate random number</button>
    </div>
  );
};

export default RockPaperScissors;
