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

function playRound(players, cards) {
  var deck = createNShuffleDeck();

  var winner = players[0];

  for (var i = 0; i < players.length; i++) {
    var currentP = players[i];
    var cardsDealt = deck.splice(0, cards);
    currentP.cards = cardsDealt;
    var points = 0;
    var handConsoleLog = 'Player\'s hand ' + (i + 1) + ': ';

    for (var c = 0; c < cardsDealt.length; c++) {
      if (cardsDealt[c].rank === 'jack' || cardsDealt[c].rank === 'queen' || cardsDealt[c].rank === 'king') {
        points += 10;
      } else if (cardsDealt[c].rank === 'ace') {
        points += 11;
      } else {
        points += Number(cardsDealt[c].rank);
      }
      currentP.points = points;
      handConsoleLog += ' [' + cardsDealt[c].rank + ', ' + cardsDealt[c].suit + '] ';
    }

    console.log(handConsoleLog);

    if (winner.points < currentP.points) {
      winner = currentP;
    }
  }

  console.log(players[0].name + ' : ' + players[0].points + ' points');
  console.log(players[1].name + ' : ' + players[1].points + ' points');
  console.log(players[2].name + ' : ' + players[2].points + ' points');
  console.log(players[3].name + ' : ' + players[3].points + ' points');

  for (var w = 0; w < players.length; w++) {
    if (winner.points === players[w].points && winner.name !== players[w].name) {
      // winner = tieBreaker(winner, players[w], deck);
    }
  }

  console.log('Winner:', winner.name + ' with ' + winner.points + ' points!');
}

// function tieBreaker(player1, player2, remainingDeck) {
//   console.log('There has been a tie between ' + player1.name + ' and ' + player2.name);
//   var player1Cards = remainingDeck.splice(0, 2);
//   var player2Cards = remainingDeck.splice(0, 2);

//   return tieWinner;
// }

playRound(players, 3);
