import { PokeAPI } from "pokeapi-types";
import { useGetPokemonDataByNameQuery } from "../../services/services";
import { PokemonProfileProps } from "./PokemonProfile";

export const useModalProps = ({
  selectedPokemon,
  setSelectedPokemon,
}: PokemonProfileProps) => {
  const isModalOpen = selectedPokemon !== "";
  const closeModal = () => setSelectedPokemon("");
  return { isModalOpen, closeModal };
};

export const useErrorComponentCustomStyle = (): React.CSSProperties => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
});

const getProfilePictureFromData = (pokemonData: PokeAPI.Pokemon | undefined) =>
  pokemonData?.sprites?.front_default ? pokemonData.sprites.front_default : ''

const useProfileData = (selectedPokemon: string) => {
  const {
    data: pokemonData,
    error,
    isLoading,
  } = useGetPokemonDataByNameQuery(selectedPokemon);

  const profilePicture = getProfilePictureFromData(pokemonData);

  return {
    pokemonData,
    error,
    isLoading,
    profilePicture,
  };
};

export default useProfileData;
