import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './../services/services';
import { caughtPokemonsSlice } from './slices/caughtPokemonsSlice';
import { profileModalSlice } from './slices/profileModalSlice';
import { searchPokemonSlice } from './slices/searchPokemonSlice';
import { shouldShowOnlyCaughtPokemonsSlice } from './slices/shouldShowOnlyCaughtPokemonsSlice';

const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    caughtPokemons: caughtPokemonsSlice.reducer,
    shouldShowOnlyCaughtPokemons: shouldShowOnlyCaughtPokemonsSlice.reducer,
    searchPokemon: searchPokemonSlice.reducer,
    profileModal: profileModalSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(pokemonApi.middleware)
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
