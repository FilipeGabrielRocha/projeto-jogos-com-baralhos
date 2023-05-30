import { useState, useEffect } from "react";

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

async function reshuffleCards(deckId) {
  const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
  return await response.json();
}

const testeEmbaralharDeck = async (deckId) => {
  console.log(deckId);
  return await reshuffleCards(deckId);
}

const posicoesDoBaralho = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export const DeckOfCardsTruco = () => {
  const [deck, setDeck] = useState({
    cards: [],
    trucoCards: [],
    cachetaCards: [],
    deck_id: String,
  });

  useEffect(() => {
    const fetchData = async () => {
      const deckId = await createDeck();
      const data = await getCards(deckId);
      console.log(data);
      // const embaralhar = await reshuffleCards(deckId);
      const posicoes = []

      let a = 0
      while (a < 3){
        let posicaoNumero = posicoesDoBaralho(0, 52)
        posicoes.push(posicaoNumero)
        a++
        if (posicoes.indexOf(posicaoNumero) === -1){
          console.log('igual ' + posicaoNumero);
        }
      }

      setDeck({
        cards: data.cards,
        trucoCards: [data.cards[posicoes[0]], data.cards[posicoes[1]], data.cards[posicoes[2]]],
        deck_id: data.deck_id
      });
    };

    fetchData();
  }, []);

  return (
    <section className="sectionContainerTruco">

      <h2 className="tituloTruco">Sua mão para jogar Truco</h2>

      <ul className="cartasTruco">
        {deck.trucoCards.map((cardTruco, index) => {
          return (
            <li key={index}>
              <img src={cardTruco.image} alt={cardTruco.value} />
            </li>
          )
        })}
      </ul>

      <div className="btnContainer">
        <BotaoEmbaralharDeck embaralharDeck={testeEmbaralharDeck} deckId={deck.deck_id} />
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
