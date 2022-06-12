import { Alert, AlertTitle } from "@mui/material";


interface ErrorComponentProps {
	title: string,
	text: string;
	style?: React.CSSProperties;
}

const ErrorComponent = (props: ErrorComponentProps) => (
	<div style={props.style}>
		<Alert severity="error">
			<AlertTitle>{props.title}</AlertTitle>
			{props.text}
		</Alert>
	</div>
)

export default ErrorComponent;
