import "../index.css"

export const BotaoEmbaralharDeck = ({embaralharDeck, deckId}) => {
    return (
        <div className="btn" onClick={() => embaralharDeck(deckId)}>Embaralhar Deck</div>
    )
}