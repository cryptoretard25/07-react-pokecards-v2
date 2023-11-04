import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "./Card";
import { useState } from "react";

function Main() {
  const [rotate, setRotate] = useState(true);

  const handleClick = () => {
    setRotate(false);
    setTimeout(() => {
      setRotate(true);
    }, 1500);
  };

  return (
    <Container fluid="lg" className="main-container">
      <div className="cards-wrapper">
        <Card rotate={rotate} handleClick={handleClick} />
        <Card rotate={rotate} handleClick={handleClick} />
        <Card rotate={rotate} handleClick={handleClick} />
        <Card rotate={rotate} handleClick={handleClick} />
        <Card rotate={rotate} handleClick={handleClick} />
        <Card rotate={rotate} handleClick={handleClick} />
        <Card rotate={rotate} handleClick={handleClick} />
        <Card rotate={rotate} handleClick={handleClick} />
        <Card rotate={rotate} handleClick={handleClick} />
        <Card rotate={rotate} handleClick={handleClick} />
        <Card rotate={rotate} handleClick={handleClick} />
        <Card rotate={rotate} handleClick={handleClick} />
      </div>
    </Container>
  );
}

export default Main;
