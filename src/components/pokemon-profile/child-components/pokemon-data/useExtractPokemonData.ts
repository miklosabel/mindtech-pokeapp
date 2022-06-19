import { PokeAPI } from "pokeapi-types";

const useExtractPokemonData = (pokemonData?: PokeAPI.Pokemon) => {
  const visibleAbilities: string[] = pokemonData?.abilities
    ? pokemonData.abilities
      .filter((ability) => !ability.is_hidden)
      .map((x) => x.ability.name)
    : [];

  const pokemonTypes: string[] = pokemonData?.types
    ? pokemonData.types.map((typeObject) => typeObject.type.name)
    : [];

  const pokemonWeight = pokemonData?.weight ? pokemonData.weight : "";
  const pokemonHeight = pokemonData?.height ? pokemonData.height : "";

  const pokemonName = pokemonData?.name;

  return {
    visibleAbilities,
    pokemonTypes,
    pokemonName,
    pokemonWeight,
    pokemonHeight,
  };
};

export default useExtractPokemonData;
