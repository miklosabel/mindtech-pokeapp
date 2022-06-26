import { createSlice } from "@reduxjs/toolkit";

interface OpenProfileModalActionType {
  payload: {
    pokemonName: string;
  };
}

interface ProfileModalState {
  pokemonName: string;
}

const initialState:ProfileModalState = {
  pokemonName: "",
};

export const profileModalSlice = createSlice({
  name: "profileModal",
  initialState,
  reducers: {
    openProfileModal: (state: ProfileModalState, action: OpenProfileModalActionType) => {
      state.pokemonName = action.payload.pokemonName;
    },
    closeProfileModal: (state: ProfileModalState) => {
      state.pokemonName = "";
    },
  },
});

export const { openProfileModal, closeProfileModal } =
  profileModalSlice.actions;
export default profileModalSlice.reducer;
