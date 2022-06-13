import { CardContent, Typography } from '@mui/material';
import { PokeAPI } from 'pokeapi-types';
import React from 'react';
import PokemonProfileRow from './child-components/PokemonProfileRow';


interface PokemonDataProps {
	pokemonData?: PokeAPI.Pokemon,
}

const PokemonData = (props: PokemonDataProps) => {
	const visibleAbilities: string[] = props.pokemonData?.abilities
		? props.pokemonData.abilities.filter(ability => !ability.is_hidden).map(x => x.ability.name)
		: []

	const pokemonTypes: string[] = props.pokemonData?.types
		? props.pokemonData.types.map(typeObject => typeObject.type.name)
		: []

	const pokemonWeight = props.pokemonData?.weight ? props.pokemonData.weight : ''
	const pokemonHeight = props.pokemonData?.height ? props.pokemonData.height : ''

	return (
		<>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
					{props.pokemonData?.name}
				</Typography>
				<PokemonProfileRow label="Types" data={pokemonTypes} />
				<PokemonProfileRow label="Weight" data={pokemonWeight} />
				<PokemonProfileRow label="Height" data={pokemonHeight} />
				<PokemonProfileRow label="Visible abilities" data={visibleAbilities} />
			</CardContent>
		</>
	)
}

export default PokemonData;
