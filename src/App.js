import "nes.css/css/nes.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import Title from "./components/header/Title";
import Stats from "./components/header/Stats";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Container fluid="lg">
          <Stats progress = {{current: 1, max: 5}}/>
        </Container>
        <Container fluid="lg" className="main-container">
          Main
        </Container>
      </header>
    </div>
  );
}

export default App;
