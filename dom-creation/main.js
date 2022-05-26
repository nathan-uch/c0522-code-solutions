/* exported pokedex */

var pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png'
  },
  {
    number: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png'
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png'
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png'
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png'
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png'
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png'
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png'
  }
];

function renderPokemon(pokemon) {
  var $pokemonWrap = document.createElement('div');
  $pokemonWrap.setAttribute('class', 'column-third');

  var $pokemonCard = document.createElement('div');
  $pokemonCard.setAttribute('class', 'pokemon-card');
  $pokemonWrap.appendChild($pokemonCard);

  var $pokemonImg = document.createElement('img');
  $pokemonImg.setAttribute('src', pokemon.imageUrl);
  $pokemonCard.appendChild($pokemonImg);

  var $pokemonText = document.createElement('div');
  $pokemonText.setAttribute('class', 'pokemon-card-text');
  $pokemonCard.appendChild($pokemonText);

  var $pokemonHeader = document.createElement('h2');
  var $pokemonName = document.createTextNode(pokemon.name);
  $pokemonHeader.appendChild($pokemonName);
  $pokemonText.appendChild($pokemonHeader);

  var $pokemonIndex = document.createElement('h3');
  var $pokemonNum = document.createTextNode(pokemon.number);
  $pokemonIndex.appendChild($pokemonNum);
  $pokemonText.appendChild($pokemonIndex);

  var $pokemonParagraph = document.createElement('p');
  var $pokemonDescription = document.createTextNode(pokemon.description);
  $pokemonParagraph.appendChild($pokemonDescription);
  $pokemonText.appendChild($pokemonParagraph);

  return $pokemonWrap;
}

var $row = document.querySelector('.row');

for (var i = 0; i < pokedex.length; i++) {
  var currentPokemon = renderPokemon(pokedex[i]);
  $row.appendChild(currentPokemon);
}
