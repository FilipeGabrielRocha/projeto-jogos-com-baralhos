import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./index.css"
import { BotaoPaginaInicial } from "../botoes/btnPaginaInicial";
import { BotaoEmbaralharDeck } from "../botoes/btnEmbaralharDeck";

async function createDeck() {
  const response = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
  const deck = await response.json();
  return deck.deck_id;
}

async function getCards(deckId) {
  const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`);
  return await response.json();
}

async function getCardsTruco(deckId){
  const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=3`);
  return await response.json();
}

// async function reshuffleCards(deckId) {
//   const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
//   return await response.json();
// }

export const DeckOfCardsTruco = () => {
  const [deckTruco, setDeckTruco] = useState({
    cardsTruco: [],
  })

  useEffect (() => {
    const fetchData2 = async () => {
      const deckId = await createDeck();
      const dataTruco = await getCardsTruco(deckId);

      console.log(dataTruco);

      setDeckTruco({
        cardsTruco: dataTruco.cards,
      })

    };

    fetchData2();
  }, [])

  const [deck, setDeck] = useState({
    cards: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const deckId = await createDeck();
      const data = await getCards(deckId);

      setDeck({
        cards: data.cards,
      });
    };

    fetchData();

    // const embaralharDeck = async () => {
    //     return await reshuffleCards();
    // };

    // embaralharDeck()
  }, []);

  return (
    <section className="sectionContainer">

      <h2 className="tituloTruco">Sua mão para jogar Truco</h2>

      <ul className="cartasTruco">
        {deckTruco.cardsTruco.map((cardTruco, index) => {
          return (
            <li key={index}>
              <img src={cardTruco.image} alt={cardTruco.value} />
            </li>
          )
        })}
      </ul>

      <div className="btnContainer">
        {/* <div className="btn">Embaralhar Deck</div> */}
        <BotaoEmbaralharDeck />
        <BotaoPaginaInicial />
      </div>

      <ul className="cartasBaralhoContainer">
        {deck.cards.map((card, index) => {
          return (
            <li key={index}>
              <img src={card.image} alt={card.value} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
