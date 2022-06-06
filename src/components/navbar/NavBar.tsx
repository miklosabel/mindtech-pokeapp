
import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { PokemonTypeNames } from './../../interface';
import './NavBar.scss';

const NavBar: FunctionComponent = () => {

	return (
		<>
			<div className="navbar">
				<ul>
					{PokemonTypeNames.map((typeName) => <li key={typeName}><NavLink to={'/' + typeName}>{typeName}</NavLink></li>)}
				</ul>
			</div>
		</>
	)
}

export default NavBar;
