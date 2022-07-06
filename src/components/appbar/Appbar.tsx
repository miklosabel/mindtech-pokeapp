import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { FunctionComponent } from "react";
import "../../App.scss";
import MenuCheckbox from "../../shared/checkbox/MenuCheckbox";
import MenuDropdown from "../../shared/menu-dropdown/MenuDropDown";
import AppbarMenuIcon from "../../shared/menu-icon/AppbarMenuIcon";
import SearchBar from "../../shared/search-bar/SearchBar";
import { AppbarOffset } from "../../shared/styled-components/StyledComponents";
import "./Appbar.scss";
import { useHandleCaughtOnlyCheckbox } from "./hooks/useHandleCheckbox";
import { useHandleSearchBar } from "./hooks/useHandleSearchBar";
import { useMenuData } from "./hooks/useMenuData";

const Appbar: FunctionComponent = () => {
  const { handleMenuOpen, ...menuDropdownProps } = useMenuData();
  const { ...searchBarProps } = useHandleSearchBar();
  const { ...checkboxProps } = useHandleCaughtOnlyCheckbox();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <div className="appbar-container">
          <Toolbar className="appbar-content">
            <AppbarMenuIcon handleMenuOpen={handleMenuOpen} />
            <Box sx={{ flexGrow: 1 }} />
            <SearchBar {...searchBarProps} />
            <Box sx={{ flexGrow: 1 }} />
            <MenuCheckbox label="Caught only" {...checkboxProps} />
          </Toolbar>
        </div>
      </AppBar>
      <MenuDropdown {...menuDropdownProps} />
      <AppbarOffset />
    </Box>
  );
};

export default Appbar;
