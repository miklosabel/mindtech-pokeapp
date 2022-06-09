
import { createSlice } from '@reduxjs/toolkit';
import { pokemonApi } from './../../services/services';

interface State {
	searchString: string;
}

const initialState: State = {
	searchString: '',
}

interface setSearchStringActionType {
	payload: string;
}

export const searchPokemonSlice = createSlice({
	name: 'searchPokemonSlice',
	initialState,
	reducers: {
		setPokemonSearchString: (state: State, action: setSearchStringActionType) => {
			state.searchString = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			pokemonApi.endpoints.getPokemonListByType.matchFulfilled,
			(state) => { state.searchString = '' }
		)
	}
})

export const { setPokemonSearchString } = searchPokemonSlice.actions;
export default searchPokemonSlice.reducer;
