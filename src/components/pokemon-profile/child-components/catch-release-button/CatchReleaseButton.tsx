import { Box, Button } from "@mui/material";
import useHandlePokemonCatch from "./useHandlePokemonCatch";

interface CatchReleaseButtonProps {
  selectedPokemon: string;
}

const CatchReleaseButton = (props: CatchReleaseButtonProps) => {
  const { caughtPokemons, handlePokemonCatch } = useHandlePokemonCatch();
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
