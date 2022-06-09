import React, { FunctionComponent } from 'react';
import { Route, Routes } from "react-router-dom";
import PokemonList from '../../components/pokemon-list/PokemonList';
import Appbar from './../../components/appbar/Appbar';
import { PokemonTypeNames } from './../../interface';

const Main: FunctionComponent = () => {
	return (
		<>
			<Appbar />
			<div className="content">
				<Routes>
					<Route 
					key='main' 
					path="/" 
					element={
					<><p>Welcome to my pokemon page!</p></>
					} />
					{PokemonTypeNames.map(
						(pokemonType) => (
							<Route
								key={pokemonType}
								path={'/' + pokemonType}
								element={<PokemonList pokemonType={pokemonType} />}
							/>
						)
					)}
				</Routes>
			</div>
		</>
	)
}

export default Main;
