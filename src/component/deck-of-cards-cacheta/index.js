import { useEffect, useState } from "react";
import { BotaoEmbaralharDeck } from "../botoes/btnEmbaralharDeck";
import { BotaoPaginaInicial } from "../botoes/btnPaginaInicial";

import "./index.css";

async function createDeck() {
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
  );
  const deck = await response.json();
  return deck.deck_id;
}

async function getCards(deckId) {
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`
  );
  return await response.json();
}

async function reshuffleCards(deckId) {
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`
  );
  return await response.json();
}

const posicoesDoBaralho = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const criandoMaoDoJogo = () => {
  const posicoes = [];
  let a = 0;
  while (a < 9) {
    let item = posicoesDoBaralho(0, 52);
    if (posicoes.indexOf(item) === -1) {
      posicoes.push(item);
      a++;
    }
  }
  return posicoes;
};

export const DeckOfCardsCacheta = () => {
  const [deck, setDeck] = useState({
    cards: [],
    deck_id: String,
    cachetaCards: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const deckId = await createDeck();
      const data = await getCards(deckId);
      const posicoes = [criandoMaoDoJogo()];

      setDeck({
        cards: data.cards,
        deck_id: data.deck_id,
        cachetaCards: [
          data.cards[posicoes[0][0]],
          data.cards[posicoes[0][1]],
          data.cards[posicoes[0][2]],
          data.cards[posicoes[0][3]],
          data.cards[posicoes[0][4]],
          data.cards[posicoes[0][5]],
          data.cards[posicoes[0][6]],
          data.cards[posicoes[0][7]],
          data.cards[posicoes[0][8]],
        ],
      });
    };

    fetchData();
  }, []);

  const embaralharDeck = async (deckId) => {
    await reshuffleCards(deckId);
    const data = await getCards(deckId);
    const posicoes = [criandoMaoDoJogo()];

    setDeck({
      cards: data.cards,
      deck_id: data.deck_id,
      cachetaCards: [
        data.cards[posicoes[0][0]],
        data.cards[posicoes[0][1]],
        data.cards[posicoes[0][2]],
        data.cards[posicoes[0][3]],
        data.cards[posicoes[0][4]],
        data.cards[posicoes[0][5]],
        data.cards[posicoes[0][6]],
        data.cards[posicoes[0][7]],
        data.cards[posicoes[0][8]],
      ],
    });
  };

  return (
    <div className="sectionContainerCacheta">
      <h2 className="tituloCacheta">Sua mão para jogar Cacheta</h2>

      <ul className="cartasCacheta">
        {deck.cachetaCards.map((cardCacheta, index) => {
          return (
            <li key={index}>
              <img src={cardCacheta.image} alt={cardCacheta.value} />
            </li>
          );
        })}
      </ul>

      <div className="btnContainer">
        <BotaoEmbaralharDeck
          embaralharDeck={embaralharDeck}
          deckId={deck.deck_id}
        />
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
    </div>
  );
};
