import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setPokemonSearchString } from "../../../store/slices/searchPokemonSlice";
import { RootState } from "../../../store/store";

export const useHandleSearchBar = () => {
  const searchString = useAppSelector(
    (state: RootState) => state.searchPokemon.searchString
  );

  const dispatch = useAppDispatch();
  const handleSearchStringChange = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(setPokemonSearchString(event.target.value));

  return {
    searchString,
    handleSearchStringChange,
  };
};
