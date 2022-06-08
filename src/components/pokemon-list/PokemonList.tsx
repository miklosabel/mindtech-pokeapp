import { Alert, AlertTitle, CircularProgress, Grid, Paper, styled } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import { useGetPokemonListByTypeQuery } from '../../services/services';
import { useAppSelector } from '../../store/hooks';
import PokemonProfile from '../pokemon-profile/PokemonProfile';
import './PokemonList.scss';

interface PokemonListProps {
	pokemonType: string;
}

const Item = styled(Paper)`
	text-align: center;
	padding: 8px;
`

const PokemonList: FunctionComponent<PokemonListProps> = (props: PokemonListProps) => {

	const [selectedPokemon, setSelectedPokemon] = useState<string>('');

	// fetched pokemontype related data
	const { data, error, isLoading } = useGetPokemonListByTypeQuery(props.pokemonType);
	const pokemonNames = data?.pokemon.map(pokemon => pokemon.pokemon.name);

	// caught style logic
	const caughtPokemons = useAppSelector(state => state.caughtPokemons)
	const isCaught = (pokemonName: string): boolean =>
		caughtPokemons.includes(pokemonName) ? true : false;


	// render
	return isLoading
		? <CircularProgress />
		: (error ?
			<Alert severity="error">
				<AlertTitle>Error</AlertTitle>
				Pokemons cannot be loaded!
			</Alert>
			: (
				<>
					<Grid container spacing={2}>
						{pokemonNames?.map((name: string) =>
							<Grid
								item
								xs={12}
								sm={6}
								md={4}
								lg={3}
								key={name}
							>
								<Item
									sx={{
										backgroundColor: isCaught(name) ? 'red' : "#fff",
									}}
									onClick={() => setSelectedPokemon(name)}
								>
									{name}
								</Item>
							</Grid>
						)}
					</Grid>
					<PokemonProfile selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
				</>
			)
		)
}

export default PokemonList;
