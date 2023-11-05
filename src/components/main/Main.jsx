import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Card from "./Card";

function Main({ game, setGameOver, setCardsCurrent }) {
  const { pokemons } = game;
  const [rotate, setRotate] = useState(true);

  const handleClick = (uid) => {
    setRotate(false);
    setTimeout(() => {
      setRotate(true);
      game.click(uid);
      setGameOver(game.gameOver);
      setCardsCurrent(game.clickedCards.length)
      console.log(game)
    }, 1500);
  };

  return (
    <Container fluid="lg" className="main-container">
      <div
        className="cards-wrapper"
        style={
          pokemons.length <= 12 ? { maxWidth: "120rem" } : { maxWidth: "auto" }
        }
      >
        {pokemons.map((pokemon) => {
          return (
            <Card
              key={pokemon.uid}
              rotate={rotate}
              handleClick={() => handleClick(pokemon.uid)}
              name={pokemon.name}
              imageSrc={pokemon.imageSrc}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default Main;
