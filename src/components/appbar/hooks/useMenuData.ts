import { PokeAPI } from "pokeapi-types";
import { useState } from "react";
import { useGetPokemonTypes } from "../../../shared/getPokemonTypesHook";

export const useMenuData = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const pokemonTypes: PokeAPI.NamedAPIResource[] = useGetPokemonTypes();
  const menuItems: string[] = pokemonTypes.map((type) => type.name);

  return { menuItems, anchorEl, isMenuOpen, handleMenuOpen, handleMenuClose };
};
