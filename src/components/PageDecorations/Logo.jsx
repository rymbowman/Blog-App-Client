import { Box, Icon, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LogoBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  textDecoration: "none",
  color: "#004d4d",
});

const Logo = () => {
  return (
    <LogoBox component={Link} to="/">
      <Typography variant="h5" sx={{ fontSize: "2rem" }}>
        Platform
      </Typography>
      <Icon sx={{ fontSize: "2rem" }}>campaign</Icon>{" "}
    </LogoBox>
  );
};

export default Logo;
