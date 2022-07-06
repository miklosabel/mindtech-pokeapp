import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { PokeAPI } from "pokeapi-types";
import { FunctionComponent, useState } from "react";
import "../../App.scss";
import { useGetPokemonTypes } from "../../shared/getPokemonTypesHook";
import MenuDropdown from "../../shared/menu-dropdown/MenuDropDown";
import { AppbarOffset } from "../../shared/styled-components/StyledComponents";
import "./Appbar.scss";
import AppbarMenuIcon from "./child-components/AppbarMenuIcon";
import CaughtPokemonsCheckbox from "./child-components/CaughtPokemonsCheckbox";
import SearchBar from "./child-components/SearchBar";

const Appbar: FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const handleMenuClose = () => setAnchorEl(null);

  const pokemonTypes: PokeAPI.NamedAPIResource[] = useGetPokemonTypes();
  const menuItems: string[] = pokemonTypes.map(type => type.name)

  const menuDropdownProps = { anchorEl, isMenuOpen, handleMenuClose, menuItems };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <div className="appbar-container">
          <Toolbar className="appbar-content">
            <AppbarMenuIcon handleMenuOpen={handleMenuOpen} />
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
};
export default Appbar;
