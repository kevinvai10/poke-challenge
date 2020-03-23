const baseUrl = process.env.REACT_APP_POKEMON_BASE_API;

export const getPokemonByName = pokemon => {
  return fetch(baseUrl + pokemon)
    .then(response => response.json())
    .then(({ name, id, sprites }) => {
      const pokemonToAdd = {
        id,
        name,
        sprites
      }
      return pokemonToAdd;
    })
}