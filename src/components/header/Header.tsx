import { Typography } from '@mui/material';
import { StyledHeader } from '../../shared/styled-components/StyledComponents';

interface HeaderProps{
	children: string;
}

const Header = (props: HeaderProps) => (
	<>
		<StyledHeader>
			<Typography variant='h4' noWrap component="div"
				sx={{
					marginTop: 2,
					marginBottom: 2,
				}}>
					{props.children}
			</Typography>
		</StyledHeader>
	</>
)

export default Header;
