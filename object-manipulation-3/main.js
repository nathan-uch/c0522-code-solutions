console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'player1',
    hand: []
  },
  {
    name: 'player2',
    hand: []
  },
  {
    name: 'player3',
    hand: []
  },
  {
    name: 'player4',
    hand: []
  }
];

function createNShuffleDeck() {
  var deck = [];
  var ranks = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];

  for (var s = 0; s < suits.length; s++) {
    for (var d = 0; d < ranks.length; d++) {
      var card = {};
      card.rank = ranks[d];
      card.suit = suits[s];
      deck.push(card);
    }
  }
  var shuffled = _.shuffle(deck);
  console.log('cards shuffled', shuffled, 'deck length:', shuffled.length);
  return shuffled;
}

function dealCards(players, deck, cardNum) {
  for (var i = 0; i < players.length; i++) {
    var currentP = players[i];
    var cardsDealt = deck.splice(0, cardNum);
    currentP.cards = cardsDealt;
    getPoints(currentP);
  }
}

function getPoints(player) {
  var cards = '';
  player.points = 0;
  for (var c = 0; c < player.cards.length; c++) {
    if (player.cards[c].rank === 'jack' || player.cards[c].rank === 'queen' || player.cards[c].rank === 'king') {
      player.points += 10;
    } else if (player.cards[c].rank === 'ace') {
      player.points += 11;
    } else {
      player.points += Number(player.cards[c].rank);
    }
    cards += '[' + player.cards[c].rank + ', ' + player.cards[c].suit + '] ';
  }
  console.log(player.name + '\'s cards: ' + cards);
  console.log(player.name + ' : ' + player.points + ' points');
}

function playRound(players, cardNum) {
  var deck = createNShuffleDeck();
  dealCards(players, deck, cardNum);
  getWinner(players);
}

function getWinner(players) {
  var winner = players[0];
  for (var w = 1; w < players.length; w++) {
    if (winner.points < players[w]) {
      winner = players[w];
    }

    if (winner.points === players[w].points) {
      // winner = tieBreaker(winner, players[w], deck);
    }
  }
}

playRound(players, 3);
