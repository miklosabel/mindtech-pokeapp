import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { FunctionComponent, useState } from "react";
import '../../App.scss';
import { AppbarOffset } from "../../shared/styled-components/StyledComponents";
import './Appbar.scss';
import AppbarMenuIcon from "./components/appbarMenuIcon";
import CaughtPokemonsCheckbox from "./components/caughtPokemonsCheckbox";
import MenuDropdown from './components/menuDropDown';
import SearchBar from './components/searchBar';


const Appbar: FunctionComponent = () => {

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isMenuOpen = Boolean(anchorEl);

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
		setAnchorEl(event.currentTarget);

	const handleMenuClose = () => setAnchorEl(null);

	const menuDropdownProps = { anchorEl, isMenuOpen, handleMenuClose };

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed">
				<div className="appbar-container">
					<Toolbar className='appbar-content'>
						<AppbarMenuIcon handleMenuOpen={handleMenuOpen}/>
						<Box sx={{ flexGrow: 1 }} />
						<SearchBar />
						<Box sx={{ flexGrow: 1 }} />
						<CaughtPokemonsCheckbox />
					</Toolbar>
				</div>
			</AppBar>
			<MenuDropdown {...menuDropdownProps} />
			<AppbarOffset />
		</Box>
	);
}
export default Appbar;