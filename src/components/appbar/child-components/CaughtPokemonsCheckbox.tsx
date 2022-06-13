import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent, FunctionComponent } from 'react';
import { StyledFormGroup } from "../../../shared/styled-components/StyledComponents";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setPokemonSearchString } from "../../../store/slices/searchPokemonSlice";
import { switchShouldShowOnlyCaughtFlag } from "../../../store/slices/shouldShowOnlyCaughtPokemonsSlice";


const CaughtPokemonsCheckbox: FunctionComponent = () => {

	const showOnlyCaughtPokemons = useAppSelector(state => state.shouldShowOnlyCaughtPokemons.flag);

	const dispatch = useAppDispatch();

	const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(switchShouldShowOnlyCaughtFlag(event.target.checked));
		dispatch(setPokemonSearchString(''));
	}

	return (
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
	)
}

export default CaughtPokemonsCheckbox;
