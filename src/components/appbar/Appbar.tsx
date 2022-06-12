import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { FormControlLabel, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { ChangeEvent, FunctionComponent, useState } from "react";
import '../../App.scss';
import { PokemonTypeNames } from "../../constants/constants";
import { AppbarOffset, Search, SearchIconWrapper, StyledFormGroup, StyledInputBase, StyledNavLink } from "../../shared/styled-components/StyledComponents";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setPokemonSearchString } from "../../store/slices/searchPokemonSlice";
import { switchShouldShowOnlyCaughtFlag } from "../../store/slices/shouldShowOnlyCaughtPokemonsSlice";
import './Appbar.scss';


const Appbar: FunctionComponent = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const isMenuOpen = Boolean(anchorEl);

	const showOnlyCaughtPokemons = useAppSelector(state => state.shouldShowOnlyCaughtPokemons.flag);
	const pokemonSearchString = useAppSelector(state => state.searchPokemon.searchString)
	const dispatch = useAppDispatch()

	const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(switchShouldShowOnlyCaughtFlag(event.target.checked));
		dispatch(setPokemonSearchString(''));
	}

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
		setAnchorEl(event.currentTarget);


	const handleMenuClose = () => setAnchorEl(null);


	const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) =>
		dispatch(setPokemonSearchString(event.target.value))

	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "left"
			}}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "left"
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			{PokemonTypeNames.map(
				typeName =>
					<StyledNavLink key={typeName} to={'/' + typeName}>
						<MenuItem key={typeName} onClick={handleMenuClose}>
							{typeName}
						</MenuItem>
					</StyledNavLink>
			)}
		</Menu>
	);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed">
				<div className="appbar-container">
					<Toolbar className='appbar-content'>
						<Box>
							<IconButton
								size="large"
								edge="end"
								aria-haspopup="true"
								onClick={handleMenuOpen}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
						</Box>
						<Box sx={{ flexGrow: 1 }} />
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
						<Box sx={{ flexGrow: 1 }} />
						<Box>
							<StyledFormGroup>
								<FormControlLabel
									control={
										<Checkbox
											checked={showOnlyCaughtPokemons}
											onChange={handleCheckboxChange}
											inputProps={{ "aria-label": "controlled" }}
										/>
									}
									label="Caught only"
								/>
							</StyledFormGroup>
						</Box>
					</Toolbar>
				</div>
			</AppBar>
			{renderMenu}
			<AppbarOffset/>
		</Box>
	);
}
export default Appbar;