import { shallowMount } from "@vue/test-utils";
import PokemonCard from "@/modules/pokemon/components/PokemonCard.vue";
import PokemonImage from "@/modules/pokemon/components/PokemonImage.vue";

describe("PokemonCard Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonCard);
  });

  test("must match the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("pokemon image child component must exist", () => {
    expect(wrapper.findComponent(PokemonImage).exists()).toBeTruthy();
  });

  test("must receive the type of props defined", () => {
    const { pokemon, showMoves } = wrapper.props();
    expect(typeof pokemon).toBe("object");
    expect(typeof showMoves).toBe("boolean");
  });

  test("must receive the pokemon information", () => {
    const pokemon = {
      id: 1,
      name: "bulbasaur",
      types: [{ type: { name: "grass" } }],
      weight: 69,
      description: { description: "bulbasaur description" },
      moves: [{ move: { name: "tackle" } }],
    };

    const showMoves = true;

    const wrapper = shallowMount(PokemonCard, {
      props: {
        pokemon,
        showMoves,
      },
    });
    expect(wrapper.find('[data-testid="pokemon-name"]').text()).toBe(
      pokemon.name
    );
    expect(wrapper.find('[data-testid="pokemon-weight"]').text()).toBe(
      String(pokemon.weight)
    );
    expect(wrapper.find('[data-testid="pokemon-description"]').text()).toBe(
      pokemon.description.description
    );
    expect(wrapper.find('[data-testid="pokemon-type-name"]').text()).toBe(
      pokemon.types[0].type.name
    );
    expect(wrapper.find('[data-testid="pokemon-move-name"]').text()).toBe(
      pokemon.moves[0].move.name
    );
  });

  test("moves must be false if no show description is false", () => {

    const showMoves = false;

    const wrapper = shallowMount(PokemonCard, {
      props: {
        showMoves,
      },
    });
    expect(wrapper.find('[data-testid="pokemon-move-name"]').exists()).toBeFalsy;
  });
});
