import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.scss';
import Appbar from './components/appbar/Appbar';
import PokemonList from './components/pokemon-list/PokemonList';
import { PokemonTypeNames } from './constants/constants';

function App(): JSX.Element {

	const renderRoute = (
		PokemonTypeNames.map(
			(pokemonType) => (
				<Route
					key={pokemonType}
					path={'/' + pokemonType}
					element={<PokemonList pokemonType={pokemonType} />}
				/>
			)
		)
	)

	const renderRoutes = (
		<Routes>
			<Route
				key='main'
				path="/"
				element={
					<><p>Welcome to my pokemon page!</p></>
				} />
			{renderRoute}
		</Routes>
	)

	return (
		<div className="App">
			<Appbar />
			<div className="content">
				{renderRoutes}
			</div>
		</div>
	);
}

export default App;
