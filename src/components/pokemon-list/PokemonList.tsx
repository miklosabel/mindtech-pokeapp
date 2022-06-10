import { CircularProgress, Grid } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import { useGetPokemonListByTypeQuery } from '../../services/services';
import { PokemonNameCard } from '../../shared/styled-components/StyledComponents';
import { useAppSelector } from '../../store/hooks';
import ErrorComponent from '../error-component/Error';
import Header from '../header/Header';
import PokemonProfileModal from '../pokemon-profile/PokemonProfile';

interface PokemonListProps {
	pokemonType: string;
}

const PokemonList: FunctionComponent<PokemonListProps> = (props: PokemonListProps) => {

	const [selectedPokemon, setSelectedPokemon] = useState<string>('');

	// fetched pokemontype related data
	const { data, error, isLoading } = useGetPokemonListByTypeQuery(props.pokemonType);
	const pokemonNames = data?.pokemon.map(pokemon => pokemon.pokemon.name);

	const caughtPokemons = useAppSelector(state => state.caughtPokemons)
	const isCaught = (pokemonName: string): boolean =>
		caughtPokemons.includes(pokemonName) ? true : false;

	const shouldShowOnlyCaughtPokemons = useAppSelector(state => state.showOnlyCaughtPokemons.flag)
	const pokemonSearchString = useAppSelector(state => state.searchPokemon.searchString)

	const renderPokemonList = (name: string) => (
		<Grid item xs={12} sm={6} md={4} key={name}>
			<PokemonNameCard sx={{
				backgroundColor: isCaught(name) ? 'red' : "#fff",
				':hover': {
					backgroundColor: 'rgba(47, 191, 119, 0.1)',
				}
			}}
				onClick={() => setSelectedPokemon(name)}>
				{name}
			</PokemonNameCard>
		</Grid>
	)

	const renderListHeader = (
		<Header>
			{shouldShowOnlyCaughtPokemons
				? 'caught pokemons'
				: `'${props.pokemonType}' pokemons`}
		</Header>
	)

	const renderPokemonNames = (pokemons: string[] | undefined) => (
		pokemons ? pokemons
			.filter(name => name.startsWith(pokemonSearchString))
			.map((name: string) => renderPokemonList(name))
			: null
	)

	if (isLoading) return <CircularProgress />
	else if (error) return <ErrorComponent title="Error" text="Pokemons cannot be loaded" />
	else return (
		<>
			{renderListHeader}
			<Grid container spacing={2}>
				{
					shouldShowOnlyCaughtPokemons
						? renderPokemonNames(caughtPokemons)
						: renderPokemonNames(pokemonNames)
				}
			</Grid >
			<PokemonProfileModal selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
		</>
	)

}

export default PokemonList;
