import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { FunctionComponent } from "react";
import "../../App.scss";
import MenuDropdown from "../../shared/menu-dropdown/MenuDropDown";
import { AppbarOffset } from "../../shared/styled-components/StyledComponents";
import "./Appbar.scss";
import AppbarMenuIcon from "./child-components/AppbarMenuIcon";
import CaughtPokemonsCheckbox from "./child-components/CaughtPokemonsCheckbox";
import SearchBar from "./child-components/SearchBar";
import { useMenuData } from "./hooks/useMenuData";

const Appbar: FunctionComponent = () => {
  const { handleMenuOpen, ...menuDropdownProps } = useMenuData();

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
