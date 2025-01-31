import { Box, Icon, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LogoBox = styled(Box)({
  position: "absolute",
  top: "1rem",
  left: "1rem",
  textDecoration: "none",
  color: "#008080",
  alignSelf: "start",
  display: "flex",
  gap: "0.5rem",
});

const LogoTitle = styled(Typography)({
  letterSpacing: "2px",
});
const LogoIcon = styled(Icon)({
  fontSize: "2.5rem",
});

const LogoBoxContainer = () => {
  return (
    <LogoBox component={Link} to="/">
      <LogoTitle variant="h4">Platform</LogoTitle>
      <LogoIcon>campaign</LogoIcon>
    </LogoBox>
  );
};

export default LogoBoxContainer;
