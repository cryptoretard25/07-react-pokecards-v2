import { cloneDeep } from "lodash";
import { Container } from "react-bootstrap";

import React, { useState, useContext } from "react";
import Card from "./Card";
import { PokeContext } from "../../App";


function Main() {
  const { game, setGame, pokeCards } = useContext(PokeContext);
  const [rotate, setRotate] = useState(true);

  const {pokemons} = game;

  const handleClick = (uid) => {
    setRotate(false);
    setTimeout(() => {
      setRotate(true);
      const clickResult = game.click(uid);
      pokeCards.incrementRecord(clickResult)
      setGame(cloneDeep(game));
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
