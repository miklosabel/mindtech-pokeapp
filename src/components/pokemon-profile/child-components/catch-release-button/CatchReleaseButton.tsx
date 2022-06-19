import { Box, Button } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  catchPokemon,
  releasePokemon
} from "../../../../store/slices/caughtPokemonsSlice";

interface CatchReleaseButtonProps {
  selectedPokemon: string;
}

const CatchReleaseButton = (props: CatchReleaseButtonProps) => {
  const dispatch = useAppDispatch();
  const caughtPokemons = useAppSelector((state) => state.caughtPokemons);

  const handlePokemonCatch = (pokemonName: string) =>
    caughtPokemons.includes(pokemonName)
      ? dispatch(releasePokemon({ pokemonName }))
      : dispatch(catchPokemon({ pokemonName }));

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        size="large"
        variant="outlined"
        sx={{ margin: 1 }}
        onClick={() => handlePokemonCatch(props.selectedPokemon)}
      >
        {caughtPokemons.includes(props.selectedPokemon) ? "Release" : "Catch"}
      </Button>
    </Box>
  );
};

export default CatchReleaseButton;
