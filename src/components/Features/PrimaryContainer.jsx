import { Box, styled } from "@mui/material";
import PropTypes from "prop-types";

const MainContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2rem",
  backgroundColor: "#f5f5f5",
  minHeight: "100vh",
});

const PrimaryContainer = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

PrimaryContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrimaryContainer;
