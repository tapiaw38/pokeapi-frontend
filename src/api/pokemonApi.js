import axios from "axios";

const pokemonApi = axios.create({
  baseURL: process.env.VUE_APP_APIBASEURL,
});

export default pokemonApi;
