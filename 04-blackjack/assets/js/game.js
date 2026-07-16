/*
    Nota: debemos tratar de realizar busquedas en el DOM
    lo menos que sea posible, si haremos mas de una modificación
    a un mismo elemento, lo mejor es colocarlo de forma global
    y que solo realice la busqueda una sola vez
*/

const btnNewGame = document.querySelector('#new-game');
const btnRequestCard = document.querySelector('#request-card');
const btnStopGame = document.querySelector('#stop-game');
const smalls = document.querySelectorAll('small');
const divCardPlayer = document.querySelector('#jugador-cartas');
const smallPlayer = smalls[0];
const smallComputer = smalls[1];

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const special = ['A', 'J', 'Q', 'K'];

let pointsPlayer = 0;
let pointsComputer = 0;

const createDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let type of types) {
            deck.push( i + type );
        }
    }

    for (let type of types) {
        for (let esp of special) {
            deck.push(esp + type)
        }
    }

    deck = _.shuffle(deck);

    return deck;
}

createDeck();

const requestCard = () => {
    if (!deck.length)
        throw 'No hay cartas en el Deck';

    return deck.pop();
}

const valueCard = (card) => {
    const value = card.substring(0, card.length - 1);

    return !isNaN(value) ? +value : (value === 'A') ? 11 : 10;
}

btnNewGame.addEventListener('click', () => console.log('btnNewGame'));

btnRequestCard.addEventListener('click', () => {
    const card = requestCard();

    pointsPlayer += valueCard(card)

    smallPlayer.innerText = pointsPlayer;

    const imgCard = document.createElement('img');

    imgCard.src = `assets/cartas/${card}.png`;

    imgCard.classList.add('carta'); 

    divCardPlayer.appendChild(imgCard);

    if (pointsPlayer > 21)
        btnRequestCard.disabled = true;

   if (pointsPlayer === 21)
    btnRequestCard.disabled = true; 
});

btnStopGame.addEventListener('click', () => console.log('btnStopGame'));