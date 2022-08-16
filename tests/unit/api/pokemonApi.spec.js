import pokemonApi from "@/api/pokemonApi";

describe("pokemonApi", () => {
  test("pokemon API URL", () => {
    expect(pokemonApi.defaults.baseURL).toBe(process.env.VUE_APP_APIBASEURL);
  });
});
