import "./Estrellas.css";

// Este ejemplo se trata de un componente "avanzado"
// que utiliza:
// 1- Inyección de código JS en el HTML
// 2- Estilado en CSS File y CSS Style
// Estos temas los iremos abordando a lo largo del curso

const Estrellas = () => {
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

	return(
		<div className="stars-container">
      {newStar}
    </div>
  )
}

export default Estrellas;

