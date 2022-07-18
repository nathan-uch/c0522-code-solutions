fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data));

fetch(' https://pokeapi.co/api/v2/pokemon/charizard')
  .then(response => response.json())
  .then(data => console.log(data));
