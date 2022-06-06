import React, { FunctionComponent, useEffect } from 'react';
import React, { FunctionComponent } from 'react';
import { Route, Routes } from "react-router-dom";
import PokemonList from '../../components/pokemon-list/PokemonList';
import NavBar from './../../components/navbar/NavBar';
import { PokemonTypeNames } from './../../interface';

const Main: FunctionComponent = () => {

	return (
		<>
				<NavBar />
				<div className="content">
					<Routes>
						<Route path="/" element={<><p>asdfljasld;jfa;lsdjf</p></>} />
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
