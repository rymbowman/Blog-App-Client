import { Box, styled, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";

const StyledTextField = styled(TextField)({
  width: "70%",
  marginBottom: "1rem",
  "& .MuiInputBase-root": {
    borderRadius: "5px",
    backgroundColor: "#f5f5f5",
  },
  "& .MuiInputLabel-root": {
    color: "#333",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ccc",
    },
    "&:hover fieldset": {
      borderColor: "#999",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#333",
    },
  },
});

const Input = ({
  label,
  name,
  type,
  value,
  action,
  maxRows,
  required,
  placeholder,
  rows,
}) => {
  const wordCount = value ? value.trim().split(/\s+/).length : 0;
  return (
    <Box width="100%">
      <StyledTextField
        placeholder={placeholder}
        variant="filled"
        label={label}
        name={name}
        type={type}
        value={value}
        onChange={action}
        maxRows={maxRows}
        rows={rows}
        multiline={Boolean(rows)}
        required={required}
        slotProps={{
          style: {
            wordWrap: "break-word", // Ensure text wraps to the next line
          },
        }}
      />
      {rows && (
        <Typography variant="caption" display="block" align="right">
          Word count: {wordCount}
        </Typography>
      )}
    </Box>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  action: PropTypes.func,
  maxRows: PropTypes.number,
  multiline: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
};

export default Input;
