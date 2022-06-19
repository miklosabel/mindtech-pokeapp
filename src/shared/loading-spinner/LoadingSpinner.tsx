import { CircularProgress } from "@mui/material";
import "./LoadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <CircularProgress />
    </div>
  );
};

export default LoadingSpinner;
