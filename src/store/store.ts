import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './../services/services';

const store = configureStore({
  reducer: {
		[pokemonApi.reducerPath]: pokemonApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(pokemonApi.middleware)
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
