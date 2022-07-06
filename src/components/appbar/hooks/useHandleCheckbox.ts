import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setPokemonSearchString } from "../../../store/slices/searchPokemonSlice";
import { switchShouldShowOnlyCaughtFlag } from "../../../store/slices/shouldShowOnlyCaughtPokemonsSlice";
import { RootState } from "../../../store/store";

export const useHandleCaughtOnlyCheckbox = () => {
  const showOnlyCaughtPokemons = useAppSelector(
    (state: RootState) => state.shouldShowOnlyCaughtPokemons.flag
  );

  const dispatch = useAppDispatch();

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(switchShouldShowOnlyCaughtFlag(event.target.checked));
    dispatch(setPokemonSearchString(""));
  };

  return {
    isChecked: showOnlyCaughtPokemons,
    handleChange: handleCheckboxChange,
  };
};
