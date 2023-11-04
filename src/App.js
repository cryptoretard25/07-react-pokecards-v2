import "nes.css/css/nes.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/header/Header";
import Stats from "./components/header/Stats";
import { useState } from "react";
import Greeting from "./components/modal/Greeting";
import Main from "./components/main/Main";
import Footer from "./components/Footer";

function App() {
  const [gameStarted, setGameStarted] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {gameStarted ? (
          <>
            <Stats round={{ current: 1, max: 5 }} />
            <Main/>
          </>
        ) : (
          <Greeting />
        )}
        <Footer/>
      </header>
    </div>
  );
}

export default App;
