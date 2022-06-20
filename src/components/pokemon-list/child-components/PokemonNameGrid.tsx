import { Grid, Paper } from "@mui/material";

interface PokemonNameGridProps {
  items: string[];
  isSelected: (param: string) => boolean;
  openProfile: (param: string) => void;
}

const PokemonNameGrid = (props: PokemonNameGridProps) => {
  return (
    <Grid container spacing={2}>
      {props.items.map((name) => (
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            onClick={()=>props.openProfile(name)}
            sx={{
              textAlign: "center",
              padding: "8px",
              backgroundColor: props.isSelected(name)
                ? "rgba(255, 99, 71, 1)"
                : "rgba(255, 255, 255, 1)",
              ":hover": {
                backgroundColor: props.isSelected(name)
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
