import React, { useState } from "react";
//time to comment on what i understand.

//a function is wear all code is under a name like the one below.
// i do not know why thar are a () in function before {} but thay do work becose of it.
//you can write a function in anather way : const RockPaparScissors = () => { return (<div> <p>example text<p/> <div/>)}

function RockPaperScissors () {
  //let is a const that can be changed later in the code easly?
  //worldlist is containing a list of words like below.
  let wordList = ["Rock", "Paper", "Scissors"];
  let [randomWord, setRandomWord] = useState("");

  function generateRandomWord () {
    let randomIndex = Math.floor(Math.random() * wordList.length);
    let newRandomWord = wordList[randomIndex];
    setRandomWord(newRandomWord);
  };
    
  return (
    <div>
      <h2>Random Word:</h2>
      <p>{randomWord}</p>
      <button onClick={generateRandomWord}>Rock</button>
      <button onClick={generateRandomWord}>Paper</button>
      <button onClick={generateRandomWord}>Scissors</button>
    </div>
  );
};

export default RockPaperScissors;
