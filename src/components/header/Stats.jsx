import React from "react";

function Stats({ score = 0, highScore=0, progress={current: "", max: ""} }) {
  return (
    <div className="stats-wrapper">
      <div className="stats">
        <p className="score">
          <i className="nes-icon coin is-medium"></i> SCORE: {score}
        </p>
        <p className="high-score">
          <i className="nes-icon trophy is-medium"></i>
          HIGH SCORE: {highScore}
        </p>
      </div>
      <div className="game-progress">
        {progress.current}/{progress.max}
      </div>
    </div>
  );
}

export default Stats;
