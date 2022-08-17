import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import pokemonRouter from '../modules/pokemon/router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pokemons',
    ...pokemonRouter,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
