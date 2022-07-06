import { Alert, AlertTitle } from "@mui/material";
import { FunctionComponent } from "react";

interface ErrorComponentProps {
  title: string;
  text: string;
  style?: React.CSSProperties;
}

const ErrorComponent: FunctionComponent<ErrorComponentProps> = ({
  title,
  text,
  style,
}) => (
  <div style={style}>
    <Alert severity="error">
      <AlertTitle>{title}</AlertTitle>
      {text}
    </Alert>
  </div>
);

export default ErrorComponent;
