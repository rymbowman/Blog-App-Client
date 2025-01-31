import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ValidationErrors = ({ errors }) => {
  return (
    <Box>
      {Object.keys(errors).map((key) => (
        <Typography key={key} variant="body2" sx={{ color: "red" }}>
          {errors[key]}
        </Typography>
      ))}
    </Box>
  );
};

ValidationErrors.propTypes = {
  errors: PropTypes.object.isRequired,
};
export default ValidationErrors;
