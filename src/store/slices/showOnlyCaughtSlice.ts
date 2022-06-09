
import { createSlice } from '@reduxjs/toolkit';

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
	}
})

export const { switchFlag } = shouldShowOnlyCaughtPokemonsSlice.actions;
export default shouldShowOnlyCaughtPokemonsSlice.reducer;
