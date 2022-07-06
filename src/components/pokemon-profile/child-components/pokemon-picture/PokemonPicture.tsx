import { CardMedia } from "@mui/material";
import { FunctionComponent } from "react";

interface PokemonPictureProps {
  imageSource: string;
  alt: string;
}

const PokemonPicture: FunctionComponent<PokemonPictureProps> = ({
  imageSource,
  alt,
}) => {
  return (
    <CardMedia
      component="img"
      image={imageSource}
      alt={alt}
      sx={{
        minWidth: 250,
        minHeight: 250,
      }}
    />
  );
};

export default PokemonPicture;
