
import React, { FunctionComponent } from 'react';
import { PokemonTypeNames } from './../../interface';
import './NavBar.scss';

const NavBar: FunctionComponent = () => {

	return (
		<>
			<div className="navbar">
				<ul>
					{PokemonTypeNames.map((typeName) => <li><a href={'/' + typeName}>{typeName}</a></li>)}
				</ul>
			</div>
		</>
	)
}

export default NavBar;
