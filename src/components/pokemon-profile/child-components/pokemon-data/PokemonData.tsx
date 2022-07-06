import { CardContent, Typography } from "@mui/material";
import { PokeAPI } from "pokeapi-types";
import { FunctionComponent } from "react";
import PokemonProfileRow from "./child-components/PokemonProfileRow";
import useExtractPokemonData from "./useExtractPokemonData";

interface PokemonDataProps {
  pokemonData?: PokeAPI.Pokemon;
}

const PokemonData: FunctionComponent<PokemonDataProps> = ({ pokemonData }) => {
  const {
    visibleAbilities,
    pokemonTypes,
    pokemonName,
    pokemonWeight,
    pokemonHeight,
  } = useExtractPokemonData(pokemonData);

  return (
    <>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {pokemonName}
        </Typography>
        <PokemonProfileRow label="Types" data={pokemonTypes} />
        <PokemonProfileRow label="Weight" data={pokemonWeight} />
        <PokemonProfileRow label="Height" data={pokemonHeight} />
        <PokemonProfileRow label="Visible abilities" data={visibleAbilities} />
      </CardContent>
    </>
  );
};

export default PokemonData;
