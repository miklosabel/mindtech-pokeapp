
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
  name: 'shouldShowOnlyCaughtPokemons',
  initialState,
  reducers: {
    switchShouldShowOnlyCaughtFlag: (state: State, action: ShowOnlyCaughtActionType) => {
      state.flag = action.payload
    }
  },
  // switches off showCaughtPokemons when user changes pokemon type
  extraReducers: (builder) => {
    builder.addMatcher(
      pokemonApi.endpoints.getPokemonListByType.matchFulfilled,
      (state) => { state.flag = false }
    )
  }
})

export const { switchShouldShowOnlyCaughtFlag } = shouldShowOnlyCaughtPokemonsSlice.actions;
export default shouldShowOnlyCaughtPokemonsSlice.reducer;
