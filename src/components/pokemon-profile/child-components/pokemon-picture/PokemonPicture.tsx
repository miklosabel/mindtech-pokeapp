import { CardMedia } from '@mui/material';
import React from 'react';


interface PokemonPictureProps {
	imageSource: string;
	alt: string;
}

const PokemonPicture = (props: PokemonPictureProps) => {
	return (
		<CardMedia
			component="img"
			image={props.imageSource}
			alt={props.alt}
			sx={{
				minWidth: 250,
				minHeight: 250
			}}
		/>
	)
}

export default PokemonPicture;
