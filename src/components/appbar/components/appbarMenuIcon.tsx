import MenuIcon from "@mui/icons-material/Menu";
import { Box } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import React from 'react';

interface MenuIconProps {
	handleMenuOpen(event: React.MouseEvent<HTMLElement>): void;
}

const AppbarMenuIcon = (props: MenuIconProps) => (
	<Box>
		<IconButton
			size="large"
			edge="end"
			aria-haspopup="true"
			onClick={props.handleMenuOpen}
			color="inherit"
		>
			<MenuIcon />
		</IconButton>
	</Box>
)

export default AppbarMenuIcon;
