import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PokeAPI } from 'pokeapi-types';

export const pokemonApi = createApi({
	reducerPath: 'pokemonApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
	endpoints: builder => ({
		getPokemonListByType: builder.query<PokeAPI.Type, string>({
			query: type => `type/${type}`
		}),
		getPokemonDataByName: builder.query<PokeAPI.Pokemon, string>({
			query: name => `pokemon/${name}`
		})
	})
})

export const { useGetPokemonListByTypeQuery, useGetPokemonDataByNameQuery } = pokemonApi;
