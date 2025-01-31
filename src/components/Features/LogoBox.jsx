import { Box, Icon, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LogoContainer = styled(Box)({
  position: "absolute",
  top: "1rem",
  left: "1rem",
  textDecoration: "none",
  color: "#008080",
  alignSelf: "start",
  display: "flex",
  gap: "0.5rem",
});

const LogoBox = () => {
  return (
    <LogoContainer component={Link} to="/">
      <Typography variant="h4">Platform</Typography>
      <Icon sx={{ fontSize: "2.5rem" }}>campaign</Icon>
    </LogoContainer>
  );
};

export default LogoBox;
