import "nes.css/css/nes.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import Title from "./components/header/Title";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Container fluid="lg" className="main-container bg-slate-200">
          Main
        </Container>
      </header>
    </div>
  );
}

export default App;
