import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "./Card";
import { useState } from "react";

function Main({ game }) {
  const {pokemons} = game;
  const [rotate, setRotate] = useState(true);

  const handleClick = () => {
    setRotate(false);
    setTimeout(() => {
      setRotate(true);
    }, 1500);
  };

  console.log(pokemons);
  
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
              handleClick={handleClick}
              name={pokemon.name}
              imageSrc={pokemon.imageSrc}
              uid={pokemon.uid}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default Main;
