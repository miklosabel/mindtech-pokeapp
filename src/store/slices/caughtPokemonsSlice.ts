import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = []

interface CatchReleaseActionType {
	payload: {
		pokemonName: string
	}
}

export const caughtPokemonsSlice = createSlice({
	name: 'caughtPokemons',
	initialState,
	reducers: {
		catchPokemon: (state: string[], action: CatchReleaseActionType) => {
			state.push(action.payload.pokemonName)
		},
		releasePokemon: (state: string[], action: CatchReleaseActionType) => {
			const index = state.indexOf(action.payload.pokemonName);
			if (index !== -1) {
				state.splice(index, 1)
			}
		}
	}
})

export const { catchPokemon, releasePokemon } = caughtPokemonsSlice.actions
export default caughtPokemonsSlice.reducer 
