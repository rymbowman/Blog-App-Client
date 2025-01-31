import { Box, styled, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";
const Spinner = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: "1rem",
  margin: "auto",
  padding: "2rem",
  minHeight: "43vh",
});

const LoadingSpinner = ({ loadingMessage }) => {
  return (
    <Spinner>
      <CircularProgress />
      <Typography variant="h6">{loadingMessage}</Typography>
    </Spinner>
  );
};

LoadingSpinner.propTypes = {
  loadingMessage: PropTypes.string,
};
export default LoadingSpinner;
