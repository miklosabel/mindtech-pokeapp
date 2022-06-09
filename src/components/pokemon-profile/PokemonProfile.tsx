import { Button, Card, CardContent, CardMedia, CircularProgress, Modal, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useGetPokemonDataByNameQuery } from "../../services/services";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { catchPokemon, releasePokemon } from "../../store/slices/caughtPokemonsSlice";


export interface PokemonProfileProps {
	selectedPokemon: string;
	setSelectedPokemon: (pokemonName: string) => void;
}

const PokemonProfile: FunctionComponent<PokemonProfileProps> = (props: PokemonProfileProps) => {
	const { data, error, isLoading } = useGetPokemonDataByNameQuery(props.selectedPokemon);

	const dispatch = useAppDispatch();
	const caughtPokemons = useAppSelector(state => state.caughtPokemons)
	const handlePokemonCatch = (pokemonName: string) => {
		if (caughtPokemons.includes(pokemonName)) {
			dispatch(releasePokemon({ pokemonName }));
		} else {
			dispatch(catchPokemon({ pokemonName }))
		}
	}
	const closeModal = () => props.setSelectedPokemon('')
	const isOpen = () => props.selectedPokemon !== ''
	const visibleAbilities = data?.abilities && data.abilities.filter(ability => !ability.is_hidden)
	const profilePicture = data?.sprites?.front_default

	return (
		<Modal
			open={isOpen()}
			onClose={() => closeModal()}
		>
			<>
				{isLoading
					? <CircularProgress />
					: (
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								component="img"
								image={profilePicture}
								alt={`profile image of ${data?.name}`}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									{data?.name}
								</Typography>
									<div>
										<strong>Weight: </strong>{data?.weight}
									</div>
									<div>
										<strong>Height: </strong>{data?.height}
									</div>
									<div>
										<strong>Visible abilities: </strong>
										<div>
											{visibleAbilities && visibleAbilities.map(x =>
												<div key={x.ability.name}>{x.ability.name}</div>)}
										</div>
									</div>
							</CardContent>

							<Button onClick={() => handlePokemonCatch(props.selectedPokemon)}>
								{caughtPokemons.includes(props.selectedPokemon) ? 'Release' : 'Catch'}
							</Button>
						</Card>
					)}
				{error && <div>
					network related error happened.
				</div>
				}
			</>
		</Modal>
	)


}

export default PokemonProfile;