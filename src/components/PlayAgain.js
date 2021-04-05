import React from "react";

const PlayAgain = ({score, playAgain}) => (
    <div className="playagain">
        <p>You got {score} correct 😏</p>
        <button className="button" onClick={playAgain}>PLAY AGAIN</button>
    </div>
);

export default PlayAgain;