import { CircularProgress, Grid, Paper } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { useGetPokemonListByTypeQuery } from "../../services/services";
import ErrorComponent from "../../shared/error-component/Error";
import Header from "../../shared/header/Header";
import { useAppSelector } from "../../store/hooks";
import PokemonProfileModal from "../pokemon-profile/PokemonProfile";

interface PokemonListProps {
  pokemonType: string;
}

const PokemonList: FunctionComponent<PokemonListProps> = (
  props: PokemonListProps
) => {
  const [selectedPokemon, setSelectedPokemon] = useState<string>("");

  const {
    data: pokemonListData,
    error,
    isLoading,
  } = useGetPokemonListByTypeQuery(props.pokemonType);
  const pokemonNames = pokemonListData?.pokemon.map(
    (pokemon) => pokemon.pokemon.name
  );

  const caughtPokemons = useAppSelector((state) => state.caughtPokemons);
  const isCaught = (pokemonName: string): boolean =>
    caughtPokemons.includes(pokemonName) ? true : false;

  const shouldShowOnlyCaughtPokemons = useAppSelector(
    (state) => state.shouldShowOnlyCaughtPokemons.flag
  );
  const pokemonSearchString = useAppSelector(
    (state) => state.searchPokemon.searchString
  );

  const renderPokemonList = (name: string) => (
    <Grid item xs={12} sm={6} md={4} key={name}>
      <Paper
        onClick={() => setSelectedPokemon(name)}
        sx={{
          textAlign: "center",
          padding: "8px",
          backgroundColor: isCaught(name)
            ? "rgba(255, 99, 71, 1)"
            : "rgba(255, 255, 255, 1)",
          ":hover": {
            backgroundColor: isCaught(name)
              ? "rgba(255, 99, 71, 0.6)"
              : "rgba(255, 255, 255, 0.6)",
          },
        }}
      >
        {name}
      </Paper>
    </Grid>
  );

  const renderListHeader = (
    <Header>
      {shouldShowOnlyCaughtPokemons
        ? "caught pokemons"
        : `'${props.pokemonType}' pokemons`}
    </Header>
  );

  const renderPokemonNames = (pokemons: string[] | undefined) => {
    if (pokemons) {
      return pokemons
        .filter((name) => name.startsWith(pokemonSearchString))
        .map((name: string) => renderPokemonList(name));
    }
    return null;
  };

  if (isLoading) return <CircularProgress />;
  else if (error)
    return (
      <ErrorComponent
        style={{ marginTop: 32 }}
        title="Error"
        text="Pokemons cannot be loaded"
      />
    );
  else
    return (
      <>
        {renderListHeader}
        <Grid container spacing={2}>
          {shouldShowOnlyCaughtPokemons
            ? renderPokemonNames(caughtPokemons)
            : renderPokemonNames(pokemonNames)}
        </Grid>
        <PokemonProfileModal
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      </>
    );
};

export default PokemonList;
