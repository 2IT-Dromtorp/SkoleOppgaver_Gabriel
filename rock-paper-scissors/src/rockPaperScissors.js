import React, { useState } from "react";
// i don't know what i the problem is whit the code but i do know it has something to do with setplayer1 and setcomputerplayer
function RockPaperScissors() {
    const [player1, setPlayer1] = useState("none");
    const [computerplayer, setComputerPlayer] = useState("none");
    const [winner, setWinner] = useState("none");

    function determineWinner () {;
// && = and
//i do not know why it has to be === but that is what git bash told me to do so.
        if (player1 === "rock" && computerplayer === "scissors") {
            setWinner("Player 1");
        } else if (player1 === "scissors" && computerplayer === "rock") {
            setWinner("Computer");
        } else if (player1 === "paper" && computerplayer === "rock") {
            setWinner("Player 1");
        } else if (player1 === "rock" && computerplayer === "paper") {
            setWinner("Computer");
        } else if (player1 === "scissors" && computerplayer === "paper") {
            setWinner("Player 1");
        } else if (player1 === "paper" && computerplayer === "scissors") {
            setWinner("Computer");
        } else if (player1 === computerplayer) {
            setWinner("It's a tie");
        } else {
            setWinner("Invalid choice");
        }
    };
    return (
        <div>
            <button onClick={() => setPlayer1("rock")}>Rock</button>
            <button onClick={() => setPlayer1("paper")}>Paper</button>
            <button onClick={() => setPlayer1("scissors")}>Scissors</button>
            <button onClick={determineWinner}>Play</button>
            <p>Winner: {winner}</p>
        </div>
    );
}

export default RockPaperScissors;
