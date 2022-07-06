import { alpha, Box, FormGroup, InputBase, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const AppbarOffset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const StyledModalBox = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));

export const StyledHeader = styled("div")`
  display: flex;
  justify-content: center;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: alpha(theme.palette.common.black, 0.8),
}));

export const StyledSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(3),
  paddingRight: theme.spacing(2),
  width: "50%",
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

export const StyledFormGroup = styled(FormGroup)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  paddingLeft: theme.spacing(1),
}));
