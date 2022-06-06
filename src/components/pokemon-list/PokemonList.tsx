import { FunctionComponent } from 'react';

interface PokemonListProps {
	pokemonType: string;
}

const PokemonList: FunctionComponent<PokemonListProps> = (props: PokemonListProps) => {
	console.log(props.pokemonType)
	return <>
		<p>
			{props.pokemonType}
		</p>
	</>
}

export default PokemonList;
