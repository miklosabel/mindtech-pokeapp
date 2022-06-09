
import { createSlice } from '@reduxjs/toolkit';

interface State {
	flag: boolean;
}

const initialState = {
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
			const newValue = action.payload
			state.flag = newValue
		}
	}
})

export const { switchFlag } = shouldShowOnlyCaughtPokemonsSlice.actions;
export default shouldShowOnlyCaughtPokemonsSlice.reducer;
