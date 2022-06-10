import { Alert, AlertTitle } from "@mui/material";


interface ErrorComponentProps {
	title: string,
	text: string;
}

const ErrorComponent = (props: ErrorComponentProps) => (
	<>
		<Alert severity="error">
			<AlertTitle>{props.title}</AlertTitle>
			{props.text}
		</Alert>
	</>
)

export default ErrorComponent;
