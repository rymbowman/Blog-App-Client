import { Box, styled } from "@mui/material";
import PropTypes from "prop-types";

const FormBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "1.5rem",
  padding: "2rem",
  backgroundColor: "#f5f5f5",
  borderRadius: "10px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  width: "75%",
});

const PrimaryForm = ({ children, componentType, formAction }) => {
  return (
    <FormBox component={componentType} onSubmit={formAction}>
      {children}
    </FormBox>
  );
};

PrimaryForm.propTypes = {
  children: PropTypes.node.isRequired,
  componentType: PropTypes.elementType,
  formAction: PropTypes.func,
};
export default PrimaryForm;
