import React from "react";
import {Container } from "react-bootstrap";

function Stats({ score = 0, highScore=0, round={current: "", max: ""} }) {
  return (
    <Container fluid="lg">
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
          ROUND: {round.current}/{round.max}
        </div>
      </div>
    </Container>
  );
}

export default Stats;
