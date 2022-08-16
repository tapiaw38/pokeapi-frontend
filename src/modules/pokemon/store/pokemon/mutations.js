export const setPokemons = (state, pokemons) => {
  state.pokemons = pokemons;
  state.isLoading = false;
};

export const setPokemonById = (state, pokemon) => {
    state.pokemon = pokemon;
    state.isLoading = false;
};

export const setPokemonDescription = (state, description) => {
    state.pokemon.description = description;
    state.isLoading = false;
};