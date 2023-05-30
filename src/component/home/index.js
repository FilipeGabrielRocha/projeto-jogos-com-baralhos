import { Link } from "react-router-dom";

import "./index.css"

export const Home = () => {
  return (
    <div className="homeMain">
      <h1 className="homeTitulo">Escolha um dos jogos</h1>

      <div className="jogosContainer">
        <div className="jogos">
          <h2 className="link-cartas">Truco</h2>
          <Link to={"/truco"}><img className="carta-jogo" src="./image/parte-de-tras-vermelho.jpg" alt="parte de tras vermelho"/></Link>
        </div>
        <div className="jogos">
          <h2 className="link-cartas">Cacheta</h2>
          <Link to={"/cacheta"}><img className="carta-jogo" src="./image/parte-de-tras-azul.jpg" alt="parte de tras azul" /></Link>
        </div>
      </div>
    </div>
  );
};
