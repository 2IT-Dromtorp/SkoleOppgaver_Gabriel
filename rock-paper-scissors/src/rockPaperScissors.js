import React, { useState } from 'react';

// The main function that holds our React component
function RockPaperScissors() {
  // State variables
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  // Array containing choices
  const choices = ['rock', 'paper', 'scissors'];

  // Function to determine computer's choice
  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };

  // Function to determine the winner
  const determineWinner = (player, computer) => {
    if (player === computer) return 'It\'s a tie!';
    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')) {
      return 'You win!';
    }
    return 'You lose!';
  };

  // Function to handle player's choice
  const handleChoice = (choice) => {
    setPlayerChoice(choice);
    const computer = getComputerChoice();
    setComputerChoice(computer);
    const gameResult = determineWinner(choice, computer);
    setResult(gameResult);
  };

  return (
    <div>
      <h1>Rock Paper Scissors</h1>

      {/* Display buttons for the player to make a choice */}
      <div>
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>

      {/* Display the player's and computer's choices */}
      {playerChoice && <p>Your choice: {playerChoice}</p>}
      {computerChoice && <p>Computer's choice: {computerChoice}</p>}

      {/* Display the result */}
      {result && <p>{result}</p>}
    </div>
  );
}

export default RockPaperScissors;
