import { Box, Button } from "@mui/material";
import { FunctionComponent } from "react";
import useHandlePokemonCatch from "./useHandlePokemonCatch";

interface CatchReleaseButtonProps {
  selectedPokemon: string;
}

const CatchReleaseButton: FunctionComponent<CatchReleaseButtonProps> = ({
  selectedPokemon,
}) => {
  const { caughtPokemons, handlePokemonCatch } = useHandlePokemonCatch();
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        size="large"
        variant="outlined"
        sx={{ margin: 1 }}
        onClick={() => handlePokemonCatch(selectedPokemon)}
      >
        {caughtPokemons.includes(selectedPokemon) ? "Release" : "Catch"}
      </Button>
    </Box>
  );
};

export default CatchReleaseButton;
