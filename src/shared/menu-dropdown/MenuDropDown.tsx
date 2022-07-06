import { Menu, MenuItem } from "@mui/material";
import { StyledNavLink } from "../styled-components/StyledComponents";

interface MenuDropdownProps {
  anchorEl: null | HTMLElement;
  isMenuOpen: boolean;
  handleMenuClose(): void;
  menuItems: string[];
}

const MenuDropdown = (props: MenuDropdownProps) => (
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
    {props.menuItems &&
      props.menuItems.map((item) => (
        <StyledNavLink key={item} to={"/" + item}>
          <MenuItem key={item} onClick={props.handleMenuClose}>
            {item}
          </MenuItem>
        </StyledNavLink>
      ))}
  </Menu>
);

export default MenuDropdown;
