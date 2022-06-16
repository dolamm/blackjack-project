const deck = [
    { rank: 'A',  suit: 'clubs'},
    { rank: 'A', suit: 'diamonds'},
    { rank: 'A', suit: 'hearts'},
    { rank: 'A', suit: 'spades'},
    { rank: '2',  suit: 'clubs'},
    { rank: '2', suit: 'diamonds'},
    { rank: '2', suit: 'hearts'},
    { rank: '2', suit: 'spades'},
    { rank: '3',  suit: 'clubs'},
    { rank: '3', suit: 'diamonds'},
    { rank: '3', suit: 'hearts'},
    { rank: '3', suit: 'spades'},
    { rank: '4',  suit: 'clubs'},
    { rank: '4', suit: 'diamonds'},
    { rank: '4', suit: 'hearts'},
    { rank: '4', suit: 'spades'},
    { rank: '5',  suit: 'clubs'},
    { rank: '5', suit: 'diamonds'},
    { rank: '5', suit: 'hearts'},
    { rank: '5', suit: 'spades'},
    { rank: '6',  suit: 'clubs'},
    { rank: '6', suit: 'diamonds'},
    { rank: '6', suit: 'hearts'},
    { rank: '6', suit: 'spades'},
    { rank: '7',  suit: 'clubs'},
    { rank: '7', suit: 'diamonds'},
    { rank: '7', suit: 'hearts'},
    { rank: '7', suit: 'spades'},
    { rank: '8',  suit: 'clubs'},
    { rank: '8', suit: 'diamonds'},
    { rank: '8', suit: 'hearts'},
    { rank: '8', suit: 'spades'},
    { rank: '9',  suit: 'clubs'},
    { rank: '9', suit: 'diamonds'},
    { rank: '9', suit: 'hearts'},
    { rank: '9', suit: 'spades'},
    { rank: '10',  suit: 'clubs'},
    { rank: '10', suit: 'diamonds'},
    { rank: '10', suit: 'hearts'},
    { rank: '10', suit: 'spades'},
    { rank: 'J',  suit: 'clubs'},
    { rank: 'J', suit: 'diamonds'},
    { rank: 'J', suit: 'hearts'},
    { rank: 'J', suit: 'spades'},
    { rank: 'Q',  suit: 'clubs'},
    { rank: 'Q', suit: 'diamonds'},
    { rank: 'Q', suit: 'hearts'},
    { rank: 'Q', suit: 'spades'},
    { rank: 'K',  suit: 'clubs'},
    { rank: 'K', suit: 'diamonds'},
    { rank: 'K', suit: 'hearts'},
    { rank: 'K', suit: 'spades'},
];

let currentDeck = deck.slice(0,52);

const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}

module.exports.deck = deck;
module.exports.shuffle = shuffle;