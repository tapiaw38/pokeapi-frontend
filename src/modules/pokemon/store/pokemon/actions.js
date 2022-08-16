import axios from "axios";
import pokemonApi from "../../../../api/pokemonApi";

export const loadPokemons = async ({ commit }) => {
  try {
    const { data } = await pokemonApi.get(`/pokemon/`);
    let pokemons = [];
    let result = data.results.map((result) => {
      return axios.get(result.url);
    });
    const resp = await Promise.all(result);
    resp.map((pokemon) => {
      pokemons = [...pokemons, pokemon.data];
    });
    const { count, next, previous } = data;
    let dataResponse = {
      count,
      next,
      previous,
      results: pokemons,
    };
    commit("setPokemons", dataResponse);
    return { ok: true };
  } catch (e) {
    return { ok: false, message: e.response.data };
  }
};

export const changePokemonPage = async ({ commit }, link) => {
  if (link === "") return;
  try {
    const { data } = await pokemonApi.get(link);
    let pokemons = [];
    let result = data.results.map((result) => {
      return axios.get(result.url);
    });
    const resp = await Promise.all(result);
    resp.map((pokemon) => {
      pokemons = [...pokemons, pokemon.data];
    });
    const { count, next, previous } = data;
    let dataResponse = {
      count,
      next,
      previous,
      results: pokemons,
    };
    commit("setPokemons", dataResponse);
    return { ok: true };
  } catch (e) {
    return { ok: false, message: e.response.data };
  }
};

export const loadPokemonById = async ({ commit }, pokemonId) => {
  try {
    const { data } = await pokemonApi.get(`/pokemon/${pokemonId}`);
    commit("setPokemonById", data);
    return { ok: true };
  } catch (e) {
    return { ok: false, message: e.response.data };
  }
};

export const loadPokemonDescription = async ({ commit }, pokemonId) => {
  try {
    const { data } = await pokemonApi.get(`/characteristic/${pokemonId}`);
    const description = data.descriptions.find(
      (description) => description.language.name === "es"
    );
    commit("setPokemonDescription", description);
    return { ok: true };
  } catch (e) {
    return { ok: false, message: e.response.data };
  }
};
