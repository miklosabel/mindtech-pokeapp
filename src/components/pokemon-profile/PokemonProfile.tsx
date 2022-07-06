import { FunctionComponent } from "react";
import ErrorComponent from "../../shared/error-component/Error";
import LoadingSpinner from "../../shared/loading-spinner/LoadingSpinner";
import UniversalModal, {
  UniversalModalProps
} from "./../../shared/modal/UniversalModal";
import CatchReleaseButton from "./child-components/catch-release-button/CatchReleaseButton";
import PokemonData from "./child-components/pokemon-data/PokemonData";
import PokemonPicture from "./child-components/pokemon-picture/PokemonPicture";
import useLoadProfileData, {
  useErrorComponentCustomStyle,
  useModalProps
} from "./hooks";

export interface PokemonProfileProps {
  selectedPokemon: string;
  setSelectedPokemon: (pokemonName: string) => void;
}

const PokemonProfileModal: FunctionComponent<PokemonProfileProps> = ({
  selectedPokemon,
  setSelectedPokemon,
}) => {
  const { pokemonData, error, isLoading, profilePicture } =
    useLoadProfileData(selectedPokemon);

  const errorComponentCustomStyle = useErrorComponentCustomStyle();
  const modalProps: UniversalModalProps = useModalProps({
    selectedPokemon,
    setSelectedPokemon,
  });

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
          style={errorComponentCustomStyle}
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
          <CatchReleaseButton selectedPokemon={selectedPokemon} />
        </>
      </UniversalModal>
    );
  }
};

export default PokemonProfileModal;
