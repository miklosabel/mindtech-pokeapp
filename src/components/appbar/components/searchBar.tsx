import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, FunctionComponent } from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from '../../../shared/styled-components/StyledComponents';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setPokemonSearchString } from '../../../store/slices/searchPokemonSlice';

const SearchBar: FunctionComponent = () => {

	const pokemonSearchString = useAppSelector(state => state.searchPokemon.searchString)

	const dispatch = useAppDispatch()

	const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) =>
		dispatch(setPokemonSearchString(event.target.value))

	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				placeholder="Search..."
				inputProps={{ "aria-label": "search" }}
				onChange={handleSearchInputChange}
				value={pokemonSearchString}
			/>
		</Search>
	)
}

export default SearchBar;
