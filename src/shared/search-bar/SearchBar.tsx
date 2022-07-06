import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent } from "react";
import {
  SearchIconWrapper,
  StyledInputBase,
  StyledSearch
} from "../../shared/styled-components/StyledComponents";

interface SearchBarProps {
  searchString: string;
  handleSearchStringChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({
  searchString,
  handleSearchStringChange,
}: SearchBarProps) => {
  return (
    <StyledSearch>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        onChange={handleSearchStringChange}
        value={searchString}
      />
    </StyledSearch>
  );
};

export default SearchBar;
