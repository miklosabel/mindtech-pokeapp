import { Menu, MenuItem } from "@mui/material";
import { useGetPokemonTypes } from "../../../shared/getPokemonTypesHook";
import { StyledNavLink } from "../../../shared/styled-components/StyledComponents";

interface MenuDropdownProps {
  anchorEl: null | HTMLElement;
  isMenuOpen: boolean;
  handleMenuClose(): void;
}

const MenuDropdown = (props: MenuDropdownProps) => {
  const menuItems = useGetPokemonTypes();

  return (
    <Menu
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={props.isMenuOpen}
      onClose={props.handleMenuClose}
    >
      {menuItems &&
        menuItems.map(({ name: typeName }) => (
          <StyledNavLink key={typeName} to={"/" + typeName}>
            <MenuItem key={typeName} onClick={props.handleMenuClose}>
              {typeName}
            </MenuItem>
          </StyledNavLink>
        ))}
    </Menu>
  );
};

export default MenuDropdown;
