import { PokeAPI } from "pokeapi-types";
import { useGetPokemonTypesQuery } from "../services/services";

export const useGetPokemonTypes = ():
  | PokeAPI.NamedAPIResource[]
  | undefined => {
  const { data } = useGetPokemonTypesQuery();
  return data?.results;
};
