import { FunctionComponent } from "react";
import ErrorComponent from "../../shared/error-component/Error";
import Header from "../../shared/header/Header";
import LoadingSpinner from "../../shared/loading-spinner/LoadingSpinner";
import PokemonProfileModal from "../pokemon-profile/PokemonProfile";
import PokemonNameGrid from "./child-components/PokemonNameGrid";
import usePokemonNameList from "./hooks";

interface PokemonListProps {
  pokemonType: string;
}

const PokemonList: FunctionComponent<PokemonListProps> = ({ pokemonType }) => {
  const {
    selectedPokemon,
    setSelectedPokemon,
    error,
    isLoading,
    pokemonNames,
    caughtPokemons,
    isCaught,
    shouldShowOnlyCaughtPokemons,
    headerText,
    applySearch,
  } = usePokemonNameList(pokemonType);

  if (isLoading) return <LoadingSpinner />;
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
        <Header>{headerText}</Header>
        <PokemonNameGrid
          items={
            shouldShowOnlyCaughtPokemons
              ? applySearch(caughtPokemons)
              : applySearch(pokemonNames)
          }
          isSelected={isCaught}
          openProfile={setSelectedPokemon}
        />
        <PokemonProfileModal
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      </>
    );
};

export default PokemonList;
