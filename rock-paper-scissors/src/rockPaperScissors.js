import React, { useState } from 'react';

//copy code.
function RockPaperScissors () {
//userchoise blir brukt til playgame.
//setUserChoice blir brukt til 
    const [userChoice, setUserChoice] = useState(null);
//const computerChoice 
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);
    const choices = ['rock', 'paper', 'scissors'];
    function generateComputerChoice () {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    };
    function determineWinner (user, computer) {
        if (user === computer) return 'It\'s a tie!';
        if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
    };
  function playGame (userChoice) {
    const computerChoice = generateComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    setUserChoice(userChoice);
    setComputerChoice(computerChoice);
    setResult(result);
  };
  return (
    <div>
      <h1>Rock, Paper or Scissors</h1>
      <div>
        <button onClick={() => playGame('rock')}>Rock</button>
        <button onClick={() => playGame('paper')}>Paper</button>
        <button onClick={() => playGame('scissors')}>Scissors</button>
      </div>
      <p>Your choice: {userChoice}</p>
      <p>Computer's choice: {computerChoice}</p>
      <p>{result}</p>
    </div>
  );
};
export default RockPaperScissors;