import { FunctionComponent } from "react";
import { useGetPokemonDataByNameQuery } from "../../services/services";
import ErrorComponent from "../../shared/error-component/Error";
import LoadingSpinner from "../../shared/loading-spinner/LoadingSpinner";
import UniversalModal, { UniversalModalProps } from "./../../shared/modal/UniversalModal";
import CatchReleaseButton from "./child-components/catch-release-button/CatchReleaseButton";
import PokemonData from "./child-components/pokemon-data/PokemonData";
import PokemonPicture from "./child-components/pokemon-picture/PokemonPicture";

interface PokemonProfileProps {
  selectedPokemon: string;
  setSelectedPokemon: (pokemonName: string) => void;
}

const PokemonProfileModal: FunctionComponent<PokemonProfileProps> = (
  props: PokemonProfileProps
) => {
  const {
    data: pokemonData,
    error,
    isLoading,
  } = useGetPokemonDataByNameQuery(props.selectedPokemon);

  const profilePicture = pokemonData?.sprites?.front_default
    ? pokemonData?.sprites?.front_default
    : "";

  const closeModal = () => props.setSelectedPokemon("");
  const isModalOpen = props.selectedPokemon !== "";

  const modalProps: UniversalModalProps = {
    isModalOpen,
    closeModal,
  };

  const ErrorComponentStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
  };

  if (isLoading) {
    return (
      <UniversalModal {...modalProps}>
        <LoadingSpinner />
      </UniversalModal>
    );
  } else if (error) {
    return (
      <UniversalModal {...modalProps}>
        <ErrorComponent
          title="Error"
          text="Pokemon data cannot be loaded"
          style={ErrorComponentStyle}
        />
      </UniversalModal>
    );
  } else {
    return (
      <UniversalModal {...modalProps}>
        <>
          <PokemonPicture
            imageSource={profilePicture}
            alt={`profile image of ${pokemonData?.name}`}
          />
          <PokemonData pokemonData={pokemonData} />
          <CatchReleaseButton selectedPokemon={props.selectedPokemon} />
        </>
      </UniversalModal>
    );
  }
};

export default PokemonProfileModal;
