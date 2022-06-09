
import { createSlice } from '@reduxjs/toolkit';
import { pokemonApi } from '../../services/services';

interface State {
	flag: boolean;
}

const initialState: State = {
	flag: false
}
interface ShowOnlyCaughtActionType {
	payload: boolean
}

export const shouldShowOnlyCaughtPokemonsSlice = createSlice({
	name: 'showOnlyCaughtPokemons',
	initialState,
	reducers: {
		switchFlag: (state: State, action: ShowOnlyCaughtActionType) => {
			state.flag = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			pokemonApi.endpoints.getPokemonListByType.matchFulfilled,
			(state) => { state.flag = false }
		)
	}
})

export const { switchFlag } = shouldShowOnlyCaughtPokemonsSlice.actions;
export default shouldShowOnlyCaughtPokemonsSlice.reducer;
