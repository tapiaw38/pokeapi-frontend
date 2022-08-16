export default {
  component: () =>
    import(
      /* webpackChunkName: "PokemonLayout" */ "../layouts/PokemonLayout"
    ),
  children: [
    {
      path: "",
      name: "pokemon-list",
      component: () =>
        import(/* webpackChunkName: "PokemonList" */ "../views/PokemonList.vue"),
    },
    {
      path: ":pokemonId/pokemon",
      name: "pokemon-detail",
      component: () =>
        import(
          /* webpackChunkName: "pokemonDetail" */ "../views/PokemonDetail.vue"
        ),
      props: (route) => {
        const pokemonId = Number(route.params.pokemonId);
        return isNaN(pokemonId) ? { pokemonId: 1 } : { pokemonId };
      },
    },
  ],
};
