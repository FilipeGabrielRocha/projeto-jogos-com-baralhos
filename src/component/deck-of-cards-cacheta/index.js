import { BotaoEmbaralharDeck } from "../botoes/btnEmbaralharDeck"
import { BotaoPaginaInicial } from "../botoes/btnPaginaInicial"

import "./index.css"

// cachetaCards: [
//     data.cards[0], data.cards[1], data.cards[2], 
//     data.cards[3], data.cards[4], data.cards[5], 
//     data.cards[6], data.cards[7], data.cards[8]
//   ],

export const DeckOfCardsCacheta = () => {
    return(
        <div className="sectionContainerCacheta">
            <h2 className="tituloCacheta">Sua mão para jogar Cacheta</h2>

            {/* Voltando as cartas no número certo para o jogo */}

            <div className="btnContainer">
                <BotaoEmbaralharDeck />
                <BotaoPaginaInicial />
            </div>
        </div>
    )
}