import { Grid, Paper } from "@mui/material";
import { FunctionComponent } from "react";

interface PokemonNameGridProps {
  items: string[];
  isSelected: (param: string) => boolean;
  openProfile: (param: string) => void;
}

const PokemonNameGrid: FunctionComponent<PokemonNameGridProps> = ({
  items,
  isSelected,
  openProfile,
}) => {
  return (
    <Grid container spacing={2}>
      {items.map((name) => (
        <Grid key={name} item xs={12} sm={6} md={4}>
          <Paper
            onClick={() => openProfile(name)}
            sx={{
              textAlign: "center",
              padding: "8px",
              backgroundColor: isSelected(name)
                ? "rgba(255, 99, 71, 1)"
                : "rgba(255, 255, 255, 1)",
              ":hover": {
                backgroundColor: isSelected(name)
                  ? "rgba(255, 99, 71, 0.6)"
                  : "rgba(255, 255, 255, 0.6)",
              },
            }}
          >
            {name}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default PokemonNameGrid;
