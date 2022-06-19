
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  catchPokemon,
  releasePokemon
} from "../../../../store/slices/caughtPokemonsSlice";

const useHandlePokemonCatch = () => {
  const dispatch = useAppDispatch();
  const caughtPokemons = useAppSelector((state) => state.caughtPokemons);

  const handlePokemonCatch = (pokemonName: string) =>
    caughtPokemons.includes(pokemonName)
      ? dispatch(releasePokemon({ pokemonName }))
      : dispatch(catchPokemon({ pokemonName }));

  return { caughtPokemons, handlePokemonCatch };
};

export default useHandlePokemonCatch;
