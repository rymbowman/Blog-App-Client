import { Button, styled } from "@mui/material";
import PropTypes from "prop-types";
const StyledButton = styled(Button)({
  marginTop: "2rem",
  padding: "0.75rem .5rem",
  fontSize: "1rem",
  boxShadow: "2.5px 2.5px 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#004D4D",
  width: "200px",
  ":hover": {
    filter: "brightness(1.2)",
  },
});

const PrimaryButton = ({
  buttonText,
  action,
  buttonType,
  component,
  linkTo,
}) => {
  return (
    <StyledButton
      onClick={action}
      variant="contained"
      type={buttonType}
      component={component}
      to={linkTo}
    >
      {buttonText}
    </StyledButton>
  );
};

PrimaryButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  action: PropTypes.func,
  buttonType: PropTypes.string,
  component: PropTypes.elementType,
  linkTo: PropTypes.string,
};

export default PrimaryButton;
