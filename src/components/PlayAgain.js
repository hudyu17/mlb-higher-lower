import React from "react";

const PlayAgain = ({score, playAgain}) => (
    <div className="playagain">
        <p className="recap">You got {score} correct 😏</p>
        <p className="combos">There are 14,160 possible questions.<br></br>Can you get them all?</p>
        <button className="button" onClick={playAgain}>PLAY AGAIN</button>
        <p className="coffee">If you enjoyed, <a target="blank" href="https://www.buymeacoffee.com/hudyu17">buy me a baseball!</a></p>
    </div>
);

export default PlayAgain;