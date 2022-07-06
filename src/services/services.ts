import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokeAPI } from "pokeapi-types";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPokemonListByType: builder.query<PokeAPI.Type, string>({
      query: (type) => `type/${type}`,
    }),
    getPokemonDataByName: builder.query<PokeAPI.Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonTypes: builder.query<PokeAPI.NamedAPIResourceList, void>({
      query: () => `type`,
    }),
  }),
});

export const {
  useGetPokemonListByTypeQuery,
  useGetPokemonDataByNameQuery,
  useGetPokemonTypesQuery,
} = pokemonApi;
