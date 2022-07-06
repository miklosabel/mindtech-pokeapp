import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent } from "react";
import { StyledFormGroup } from "../styled-components/StyledComponents";

export interface CheckboxProps {
  label: string;
  isChecked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const MenuCheckbox = ({
  label,
  isChecked,
  handleChange,
}: CheckboxProps) => (
  <Box>
    <StyledFormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label={label}
      />
    </StyledFormGroup>
  </Box>
);

export default MenuCheckbox;
