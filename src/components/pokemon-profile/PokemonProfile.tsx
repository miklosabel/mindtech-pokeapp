import { Box, Button, Card, CardContent, CardMedia, Modal, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useGetPokemonDataByNameQuery } from "../../services/services";
import LoadingSpinner from "../../shared/loading-spinner/LoadingSpinner";
import { StyledModalBox } from "../../shared/styled-components/StyledComponents";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { catchPokemon, releasePokemon } from "../../store/slices/caughtPokemonsSlice";
import ErrorComponent from "../error-component/Error";

const MODAL_MIN_HEIGHT = 530;
const MODAL_MIN_WIDTH = 300;

export interface PokemonProfileProps {
	selectedPokemon: string;
	setSelectedPokemon: (pokemonName: string) => void;
}

const PokemonProfileModal: FunctionComponent<PokemonProfileProps> = (props: PokemonProfileProps) => {
	const { data: pokemonData, error, isLoading } = useGetPokemonDataByNameQuery(props.selectedPokemon);

	const dispatch = useAppDispatch();
	const caughtPokemons = useAppSelector(state => state.caughtPokemons)

	const profilePicture = pokemonData?.sprites?.front_default
	const visibleAbilities: string[] = pokemonData?.abilities
		? pokemonData.abilities.filter(ability => !ability.is_hidden).map(x => x.ability.name)
		: [];
	const pokemonTypes: string[] = pokemonData?.types
		? pokemonData.types.map(typeObject => typeObject.type.name)
		: []

	const closeModal = () => props.setSelectedPokemon('')
	const isModalOpen = props.selectedPokemon !== ''

	const handlePokemonCatch = (pokemonName: string) =>
		caughtPokemons.includes(pokemonName)
			? dispatch(releasePokemon({ pokemonName }))
			: dispatch(catchPokemon({ pokemonName }))

	const renderModal = (children: JSX.Element) => (
		<Modal
			keepMounted
			open={isModalOpen}
			onClose={() => closeModal()}
		>
			<StyledModalBox>
				<Card sx={{
					minWidth: MODAL_MIN_WIDTH,
					minHeight: MODAL_MIN_HEIGHT,
				}}>
					{children}
				</Card>
			</StyledModalBox>
		</Modal>
	)

	const renderPokemonPicture = (
		<CardMedia
			component="img"
			image={profilePicture}
			alt={`profile image of ${pokemonData?.name}`}
			sx={{
				minWidth: 250,
				minHeight: 250
			}}
		/>
	)

	const renderRow = (label: string, renderData: string[]) => (
		<>
			<strong>{label + ' '}</strong>
			{
				renderData && renderData.map((element, index) => [
					index > 0 && ', ',
					<span key={element}>{element}</span>
				])
			}
		</>
	)

	const renderCard = (
		<>
			{renderPokemonPicture}
			<CardContent>
				<Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
					{pokemonData?.name}
				</Typography>
				<div>
					{renderRow("Types:", pokemonTypes)}
				</div>
				<div>
					<strong>Weight: </strong>{pokemonData?.weight}
				</div>
				<div>
					<strong>Height: </strong>{pokemonData?.height}
				</div>
				<div>
					{renderRow("Visible abilities:", visibleAbilities)}
				</div>
			</CardContent>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<Button
					size="large"
					variant="outlined"
					sx={{ margin: 1 }}
					onClick={() => handlePokemonCatch(props.selectedPokemon)}
				>
					{caughtPokemons.includes(props.selectedPokemon) ? 'Release' : 'Catch'}
				</Button>
			</Box>
		</>
	)


	if (isLoading) return renderModal(<LoadingSpinner/>)
	else if (error) return renderModal(<ErrorComponent title="Error" text="Pokemon data cannot be loaded" />)
	else return renderModal(renderCard)

}

export default PokemonProfileModal;
