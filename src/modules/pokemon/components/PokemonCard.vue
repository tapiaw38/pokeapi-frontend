<template>
  <div class="card">
    <p data-testid="pokemon-name" class="card-title">
      {{ props.pokemon?.name }}
    </p>
    <pokemon-image :imageId="props.pokemon?.id"></pokemon-image>
    <div class="container-descrition">
      <div class="row align-items-center justify-content-center">
        <template v-for="types in props.pokemon?.types" :key="types">
          <span data-testid="pokemon-type-name" class="badge-primary">{{
            types.type.name
          }}</span>
        </template>
      </div>
      <div class="col">
        <p class="card-description">
          Weight:
          <span data-testid="pokemon-weight">{{ props.pokemon?.weight }}</span>
        </p>
        <p data-testid="pokemon-description" class="card-description">
          {{ props.pokemon?.description ? props.pokemon.description.description : '' }}
        </p>

        <div v-if="props.showMoves">
          <p class="card-description">Moves</p>
          <div
            class="row align-items-center justify-content-center container-moves"
          >
            <template v-for="move in props.pokemon?.moves" :key="move">
              <span data-testid="pokemon-move-name" class="badge-primary">{{ move.move.name }}</span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// components
import PokemonImage from "./PokemonImage.vue";
// eslint-disable-next-line
const props = defineProps({
  pokemon: {
    type: Object,
    default: () => ({}),
  },
  showMoves: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
  max-width: 320px;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 10px #ccc;
}
.card .card-title {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
  color: $secondary;
  text-transform: capitalize;
}
.card .card-text {
  font-size: 1.2em;
  color: $secondary;
}

.container-descrition {
  padding-bottom: 20px;
  padding-top: 20px;
  background-color: $info;
  border-top-left-radius: 40%;
  border-top-right-radius: 40%;

  .card-description {
    font-size: 0.9em;
    font-weight: bold;
    color: $white;
  }
}

.container-moves {
  flex-wrap: nowrap;
  overflow-x: scroll;
  position: relative;
  justify-content: flex-start;
  padding-left: 5px;

  &::-webkit-scrollbar {
    width: 22px;
  }

  &::-webkit-scrollbar-track {
    background: $gray;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $info;
    border-radius: 10px;
    border: 2px solid $gray;
  }

  .badge-primary {
    flex-shrink: 0;
    margin-bottom: 5px;
  }
}
</style>
