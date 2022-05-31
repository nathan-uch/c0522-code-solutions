console.log('Lodash is loaded:', typeof _ !== 'undefined');

// LINE 47: declare variable players and assign an array with objects
//            each object is a player with a name and empty hand (array)
// LINE 66: create a function for making a deck and shuffling the cards
//              declare an empty array variable for the deck
//              create an array with all possible card ranks in an array assign to variable
//              create an array with all possible suits in an array assign to variable
//              loop through the suits array
//                loop through the ranks array
//                    declare an empty object variable for the current card
//                    declare a new properties on object: rank and suit and assign values from loops
//                    declare new property on objects: points, zero for now
//                    if card rank strictly equals to ace, assign 11 points to card
//                    if card rank stictly equals to jack, queen or king, assign 10 points to card
//                    for all other cards, assign the rank to the points (numbered cards)
//                    add the card object to the deck array
//              use lodash shuffle to shuffle deck
//              log the length of the deck and that it was hsuffled
//              return the shuffled deck
// LINE 92: create a function to deal cards to each player, taking in players, the deck and number...
//         of cards to be dealt as parameters
//               create a scoreboard array to hold points scored by each player
//               loop through each player
//               splice the cards according to number of cards to be dealt and assing the cards to variable current cards
//               declare empty string variable to console log the cards that were given
//               assign current cards to the current player object cards property
//               declare new player object points property and assign zero
//               loop through each card that was given
//                  add points to the current player points property according to each card given
//                  add the player's points to the scoreboard
//                  log the cards given to the player (rank and suit)
//               call function to find winners with the players, scoreboard and current deck arguments
// LINE 110: create a function to find the winner taking in the players, scores and current deck
//            use lodash max method on the score board to find the highest number
//            declare a winner variable empty array
//            loop through each player
//            log each player's total points
//            check if the current player's points are equal to the highest score
//                if yes, add the player to the winner array
//         check if there are more than one winners in the winner array
//            if yes, log that a tie occurred
//            call the deal cards function with the current winners, current deck and number of cards to be dealt (default: 2)
//         if only one winner with highest score
//            log the winner and how many points they have

var players = [
  {
    name: 'Nathan',
    hand: []
  },
  {
    name: 'James',
    hand: []
  },
  {
    name: 'Tim',
    hand: []
  },
  {
    name: 'Han',
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
      card.points = 0;
      if (card.rank === 'ace') {
        card.points = 11;
      } else if (card.rank === 'jack' || card.rank === 'queen' || card.rank === 'king') {
        card.points = 10;
      } else {
        card.points = card.rank;
      }
      deck.push(card);
    }
  }
  var shuffled = _.shuffle(deck);
  console.log(shuffled.length + ' cards shuffled.');
  return shuffled;
}

function dealCards(players, deck, numOfCards) {
  var scoreBoard = [];

  for (var i = 0; i < players.length; i++) {
    var cardsDealt = deck.splice(0, numOfCards);
    var cardConsole = '';
    players[i].cards = cardsDealt;
    players[i].points = 0;
    for (var c = 0; c < cardsDealt.length; c++) {
      players[i].points += cardsDealt[c].points;
      scoreBoard.push(players[i].points);
      cardConsole += '[' + cardsDealt[c].rank + ' ' + cardsDealt[c].suit + ']';
    }
    console.log(players[i].name + '\'s cards: ' + cardConsole);
  }
  findWinner(players, scoreBoard, deck);
}

function findWinner(players, scores, currentDeck) {
  var highestScore = _.max(scores);
  var winner = [];

  for (var h = 0; h < players.length; h++) {
    console.log(players[h].name + '\'s points: ' + players[h].points);
    if (players[h].points === highestScore) {
      winner.push(players[h]);
    }
  }

  if (winner.length > 1) {
    console.log('First round was a tie!');
    dealCards(winner, currentDeck, 2);
  } else {
    console.log('The winner is ' + winner[0].name + ' with ' + winner[0].points + ' points.');
  }
}

var newDeck = createNShuffleDeck();
dealCards(players, newDeck, 2);
