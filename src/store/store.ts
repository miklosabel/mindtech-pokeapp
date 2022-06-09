import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './../services/services';
import { caughtPokemonsSlice } from './caughtPokemons/caughtPokemonsSlice';
import { shouldShowOnlyCaughtPokemonsSlice } from './showOnlyCaughtSlice';

const store = configureStore({
  reducer: {
		[pokemonApi.reducerPath]: pokemonApi.reducer,
		caughtPokemons: caughtPokemonsSlice.reducer,
		showOnlyCaughtPokemons: shouldShowOnlyCaughtPokemonsSlice.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(pokemonApi.middleware)
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
