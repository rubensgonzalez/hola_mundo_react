import logo from "./inove-logo.png";
import "./App.css";

function App() {
  const starLimit = 600;
  const arrayOfStars = Array.from(new Array(starLimit), (x, i) => i);

  const getRandom = () => {
    return Math.random();
  };

  const newStar = arrayOfStars.map((star) => {
    const size = getRandom() * 5 + "px";
    const styles = {
      top: getRandom() * 100 + "%",
      left: getRandom() * 100 + "%",
      height: size,
      width: size,
      WebkitAnimationDelay: getRandom() + "s",
      MozAnimationDelay: getRandom() + "s",
      WebkitAnimationDuration: getRandom() + 1 + "s",
      MozAnimationDuration: getRandom() + 1 + "s",
      filter: "blur(" + getRandom() * 3 + "px)",
    };
    return <figure key={star} className="star" style={styles}></figure>;
  });

  return (
    <div className="App">
      <div className="stars-container">{newStar}</div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bienvenidos al curso de React JS de INOVE [coding-school] </p>
        <a
          className="App-link"
          href="https://www.inove.com.ar"
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
