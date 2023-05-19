import { Link } from "react-router-dom";

import "./index.css"

export const Home = () => {
  return (
    <div className="homeMain">
      <h1 className="homeTitulo">Escolha um dos jogos</h1>

      <div className="jogosContainer">
        <div className="jogos">
          <img className="carta-jogo" src="./image/parte-de-tras-vermelho.jpg" alt="parte de tras vermelho"/>
          <Link className="link-cartas" to={"/truco"}>Truco</Link>
        </div>
        <div className="jogos">
          <img className="carta-jogo" src="./image/parte-de-tras-azul.jpg" alt="parte de tras azul" />
          <Link className="link-cartas" to={"/cacheta"}>Cacheta</Link>
        </div>
      </div>
    </div>
  );
};
