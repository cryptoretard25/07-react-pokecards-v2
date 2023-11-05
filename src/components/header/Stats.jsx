import React from "react";
import { Container } from "react-bootstrap";

function Stats({ score, highScore, currentProgress, maxProgress }) {
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
          PROGRESS: {currentProgress}/{maxProgress}
        </div>
      </div>
    </Container>
  );
}

export default Stats;
