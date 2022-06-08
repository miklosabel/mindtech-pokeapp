import { FunctionComponent } from 'react';
import { useGetPokemonListByTypeQuery } from '../../services/services';
import { catchPokemon, releasePokemon } from '../../store/caughtPokemons/caughtPokemonsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './PokemonList.scss';

interface PokemonListProps {
	pokemonType: string;
}

const PokemonList: FunctionComponent<PokemonListProps> = (props: PokemonListProps) => {

	const { data, error, isLoading } = useGetPokemonListByTypeQuery(props.pokemonType);
	const pokemonNames = data?.pokemon.map(pokemon => pokemon.pokemon.name);
	const dispatch = useAppDispatch();
	const caughtPokemons = useAppSelector(state => state.caughtPokemons)

	const callCatchPokemon = (pokemonName: string) => {
		dispatch(catchPokemon({ pokemonName }))
	}

	const callReleasePokemon = (pokemonName: string) => {
		dispatch(releasePokemon({ pokemonName }))
	}

	const isCaught = (pokemonName: string): string => {
		if (caughtPokemons.includes(pokemonName)) return 'caught';
		return '';
	}

	return <>
		<p>
			{props.pokemonType}
		</p>
		{pokemonNames?.map((name: string) =>
			<p
				key={name}
				onClick={() => callReleasePokemon(name)}
				// onClick={() => callCatchPokemon(name)}
				className={isCaught(name)}>
				{name}
			</p>
		)}
	</>
}

export default PokemonList;
