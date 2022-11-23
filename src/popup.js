const POKE_API = "https://pokeapi.co/api/v2/pokemon/";

function fetchPokemon(pokemon) {
  const pokemonData = fetch(POKE_API + pokemon);
  pokemonData.then((response) => console.log(response.json()))

}

fetchPokemon("ditto");

console.log('oi')