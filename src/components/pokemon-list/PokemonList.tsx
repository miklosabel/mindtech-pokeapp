import { PokeAPI } from 'pokeapi-types';
import { FunctionComponent } from 'react';
import { useGetPokemonListByTypeQuery } from '../../services/services';

interface PokemonListProps {
	pokemonType: string;
}

const PokemonList: FunctionComponent<PokemonListProps> = (props: PokemonListProps) => {

	const { data, error, isLoading } = useGetPokemonListByTypeQuery(props.pokemonType);

	return <>
		<p>
			{props.pokemonType}
		</p>
		{data?.pokemon.map((pokemon: PokeAPI.TypePokemon) =>
			<p key={pokemon.pokemon.name}>{pokemon.pokemon.name}</p>
		)}
	</>
}

export default PokemonList;
