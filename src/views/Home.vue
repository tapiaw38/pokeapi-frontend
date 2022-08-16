<template>
  <div class="section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col container-home">
          <img src="../assets/img/pikachu.png" alt="pokedex">
          <router-link class="button-primary" :to="{ name: 'pokemon-list' }">Lista de Pokémons</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-home {
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;

  img {
    width: 20em;
    height: auto;
  }
}

</style>
