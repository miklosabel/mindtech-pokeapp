import { Menu, MenuItem } from "@mui/material";
import { StyledNavLink } from "../styled-components/StyledComponents";

export interface MenuDropdownProps {
  anchorEl: null | HTMLElement;
  isMenuOpen: boolean;
  handleMenuClose(): void;
  menuItems: string[];
}

const MenuDropdown = ({
  anchorEl,
  isMenuOpen,
  handleMenuClose,
  menuItems,
}: MenuDropdownProps) => (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    keepMounted
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    {menuItems &&
      menuItems.map((item) => (
        <StyledNavLink key={item} to={"/" + item}>
          <MenuItem key={item} onClick={handleMenuClose}>
            {item}
          </MenuItem>
        </StyledNavLink>
      ))}
  </Menu>
);

export default MenuDropdown;
