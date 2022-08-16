import { useStore } from "vuex";
import { computed, onMounted } from "vue";

const usePokemon = () => {
  const store = useStore();

  const getPokemonById = (pokemonId) => {
    return store.dispatch("pokemon/loadPokemonById", pokemonId);
  };

  const getPokemonDescription = (pokemonId) => {
    return store.dispatch("pokemon/loadPokemonDescription", pokemonId);
  };

  const changePokemonPage = (link) => {
    return store.dispatch("pokemon/changePokemonPage", link);
  };

  onMounted(() => {
    store.dispatch("pokemon/loadPokemons");
  });

  return {
    pokemons: computed(() => store.getters["pokemon/getPokemons"]),
    loading: computed(() => store.getters["pokemon/getIsLoading"]),
    pokemon: computed(() => store.getters["pokemon/getPokemon"]),
    getPokemonById,
    getPokemonDescription,
    changePokemonPage,
  };
};

export default usePokemon;
