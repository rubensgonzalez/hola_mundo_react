import logo from "./inove-logo.png";
import "./App.css";

import MiComponente from "./components/MiComponente";
import Estrellas from "./components/Estrellas/Estrellas";

function App() {


  return (
    <div className="App">
      <Estrellas />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MiComponente />

        <a
          className="App-link"
          href="https://www.inovecode.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React JS con nosotros ;D
        </a>
        
      </header>
    </div>
  );
}

export default App;
