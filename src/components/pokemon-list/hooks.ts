import { useState } from "react";
import { useGetPokemonListByTypeQuery } from "../../services/services";
import { useAppSelector } from "../../store/hooks";


const usePokemonNameList = (pokemonType: string) => {
  const [selectedPokemon, setSelectedPokemon] = useState<string>("");

  const {
    data: pokemonListData,
    error,
    isLoading,
  } = useGetPokemonListByTypeQuery(pokemonType);

  const pokemonNames = pokemonListData
    ? pokemonListData?.pokemon.map((pokemon) => pokemon.pokemon.name)
    : [];

  const caughtPokemons: string[] = useAppSelector(
    (state) => state.caughtPokemons
  );
  const isCaught = (pokemonName: string): boolean =>
    caughtPokemons.includes(pokemonName) ? true : false;

  const shouldShowOnlyCaughtPokemons = useAppSelector(
    (state) => state.shouldShowOnlyCaughtPokemons.flag
  );

  const pokemonSearchString = useAppSelector(
    (state) => state.searchPokemon.searchString
  );

  const headerText = shouldShowOnlyCaughtPokemons
    ? "caught pokemons"
    : `'${pokemonType}' pokemons`;

  const applySearch = (names: string[]): string[] =>
    names.filter((name) => name.startsWith(pokemonSearchString));

  return {
    selectedPokemon,
    setSelectedPokemon,
    pokemonListData,
    error,
    isLoading,
    pokemonNames,
    caughtPokemons,
    isCaught,
    shouldShowOnlyCaughtPokemons,
    pokemonSearchString,
    headerText,
    applySearch,
  };
};

export default usePokemonNameList;
