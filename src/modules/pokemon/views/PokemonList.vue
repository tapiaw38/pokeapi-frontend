<template>
  <div class="section align-items-center justify-content-center">
    <div v-if="!loading" class="container-pokemon-list">
      <template v-for="pokemon in pokemons.results" :key="pokemon">
        <router-link
          data-testid="pokemon-link"
          :to="{ name: 'pokemon-detail', params: { pokemonId: pokemon.id } }"
        >
          <pokemon-card :pokemon="pokemon"></pokemon-card>
        </router-link>
      </template>
    </div>
    <div
      v-else
      class="container-loader row align-items-center justify-content-center"
    >
      <loader></loader>
    </div>
    <div v-if="!loading" class="row align-items-center justify-content-center">
      <pagination :changePage="changePage"></pagination>
    </div>
  </div>
</template>

<script setup>
// components
import PokemonCard from "../components/PokemonCard.vue";
import Loader from "../../../components/Loader.vue";
import Pagination from "../../../components/Pagination.vue";
// composables
import usePokemon from "../composables/usePokemon";
const { pokemons, loading, changePokemonPage } = usePokemon();

const changePage = (option) => {
  if (option === "next") {
    changePokemonPage(pokemons.value.next);
    return;
  }
  if (option === "previous") {
    changePokemonPage(pokemons.value.previous);
    return;
  }
}; 

// pagination
</script>

<style lang="scss" scoped>
.container-pokemon-list {
  padding-top: 5%;
  padding-bottom: 5%;
  @include grid(4, 1);
  gap: 20px;

  @media screen and (max-width: $screen-md) {
    @include grid(3, 1);
  }

  @media screen and (max-width: $screen-sm) {
    @include grid(2, 1);
  }

  @media screen and (max-width: $screen-xs) {
    @include grid(1, 1);
  }
}

.container-loader {
  padding-top: 5%;
}
</style>
