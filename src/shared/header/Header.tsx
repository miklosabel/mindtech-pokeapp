import { Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { StyledHeader } from "../styled-components/StyledComponents";

interface HeaderProps {
  children: string;
}

const Header: FunctionComponent<HeaderProps> = ({ children }) => (
  <>
    <StyledHeader>
      <Typography
        variant="h4"
        noWrap
        component="div"
        sx={{
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        {children}
      </Typography>
    </StyledHeader>
  </>
);

export default Header;
