<template>
  <div class="container">
    <router-link :to="{ name: 'pokemon-list' }" class="back-button">
      <i class="las la-arrow-left"></i>
    </router-link>
    <div class="section">
      <div v-if="isAlertOpen" class="container-alert row justify-content-center align-items-center">
        <alert-component :message="alertMessage" @close="close"></alert-component>
      </div>
      <div
        class="container-pokemon-detail row justify-content-center align-items-center"
      >
        <pokemon-card
          v-if="!loading"
          :pokemon="pokemon"
          :showMoves="true"
        ></pokemon-card>
        <div v-else class="row align-items-center justify-content-center">
          <loader></loader>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
// components
import AlertComponent from "@/components/Alert.vue";
import PokemonCard from "../components/PokemonCard.vue";
import Loader from "../../../components/Loader.vue";
// composables
import usePokemon from "../composables/usePokemon";
import useAlert from "../../../composables/useAlert";
// eslint-disable-next-line
const props = defineProps({
  pokemonId: {
    type: Number,
    required: true,
  },
});
const { getPokemonById, getPokemonDescription, pokemon, loading } = usePokemon();
const { alertMessage, isAlertOpen, openAlert, closeAlert } = useAlert();

const close = () => {
  closeAlert();
};

onMounted(async () => {
  await getPokemonById(props.pokemonId);
  
  const { ok } = await getPokemonDescription(props.pokemonId);
  if (!ok) {
    openAlert("Este Pokémon no tiene descripción");
  }
});
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
.back-button {
  position: absolute;
  top: 0;
  left: 20px;
  padding: 0.5rem;
  z-index: 1;

  i {
    font-size: 2rem;
    color: $primary;
  }
}

.container-pokemon-detail {
  padding-top: 2%;

  @media screen and (max-width: $screen-sm) {
    padding-top: 10%;
  }

  @media screen and (max-width: $screen-xs) {
    padding-top: 18%;
  }
}

.container-alert {
  margin: 2%;
}
</style>
