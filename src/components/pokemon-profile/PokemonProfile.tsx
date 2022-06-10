import { Button, Card, CardContent, CardMedia, CircularProgress, Modal, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useGetPokemonDataByNameQuery } from "../../services/services";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { catchPokemon, releasePokemon } from "../../store/slices/caughtPokemonsSlice";


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

	// render helpers
	const renderModal = (children: any) => (
		<Modal
			keepMounted
			open={isModalOpen}
			onClose={() => closeModal()}
		>
			{children}
		</Modal>
	)

	const renderPokemonPicture = (
		<CardMedia
			component="img"
			image={profilePicture}
			alt={`profile image of ${pokemonData?.name}`}
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
		<Card sx={{ maxWidth: 345 }}>
			{renderPokemonPicture}
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
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
			<Button onClick={() => handlePokemonCatch(props.selectedPokemon)}>
				{caughtPokemons.includes(props.selectedPokemon) ? 'Release' : 'Catch'}
			</Button>
		</Card>
	)

	if (isLoading) return renderModal(<CircularProgress />)
	else if (error) return renderModal(<ErrorComponent title="Error" text="Pokemon data cannot be loaded" />)
	else return renderModal(renderCard)

}

export default PokemonProfileModal;