import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { FormControlLabel, FormGroup, MenuItem, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { FunctionComponent, useState } from "react";
import { NavLink } from "react-router-dom";
import { PokemonTypeNames } from "../../interface";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { switchFlag } from './../../store/showOnlyCaughtSlice';
import { switchFlag } from '../../store/slices/showOnlyCaughtSlice';

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25)
	},
	marginRight: theme.spacing(2),
	marginLeft: theme.spacing(3),
	width: "auto",
	[theme.breakpoints.up('lg')]: {
		width: "50%",
	}
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		// padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
	}
}));

const StyledFormGroup = styled(FormGroup)(({ theme }) => ({
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25)
	},
	paddingLeft: theme.spacing(1)
}));


const Appbar: FunctionComponent = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [currentPokemonType, setCurrentPokemonType] = useState<string>('');

	const isMenuOpen = Boolean(anchorEl);

	const showOnlyCaughtPokemons = useAppSelector(state => state.showOnlyCaughtPokemons.flag);
	const dispatch = useAppDispatch()

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(switchFlag(event.target.checked))
	};

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right"
			}}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right"
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			{PokemonTypeNames.map(
				typeName =>
					<MenuItem key={typeName} onClick={() => setCurrentPokemonType(typeName)}>
						<NavLink key={typeName} to={'/' + typeName}>
							{typeName}
						</NavLink>
					</MenuItem>
			)}
		</Menu>
	);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Box>
						<IconButton
							size="large"
							edge="end"
							aria-haspopup="true"
							onClick={handleMenuOpen}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
					</Box>
					<Box>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{
								display: { xs: 'none', sm: 'block' },
								paddingLeft: 6,
							}}
						>
							{showOnlyCaughtPokemons ? 'Caught pokemons' : currentPokemonType}
						</Typography>
					</Box>
					<Box sx={{ flexGrow: 1 }} />
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search..."
							inputProps={{ "aria-label": "search" }}
						/>
					</Search>
					<Box sx={{ flexGrow: 1 }} />
					<Box>
						<StyledFormGroup>
							<FormControlLabel
								control={
									<Checkbox
										checked={showOnlyCaughtPokemons}
										onChange={handleCheckboxChange}
										inputProps={{ "aria-label": "controlled" }}
									/>
								}
								label="Caught only"
							/>
						</StyledFormGroup>
					</Box>

				</Toolbar>
			</AppBar>
			{renderMenu}
		</Box>
	);
}
export default Appbar;