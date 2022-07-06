import { PokeAPI } from "pokeapi-types";
import { useGetPokemonTypesQuery } from "../services/services";

export const useGetPokemonTypes = (): PokeAPI.NamedAPIResource[] => {
  const { data } = useGetPokemonTypesQuery();
  return data ? data.results : [{ name: "", url: "" }];
};
