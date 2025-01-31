import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FooterContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: "#333",
  color: "white",
  padding: "2rem 0",
});

const FooterBox = styled(Box)({
  "& .MuiTypography-root": {
    marginBottom: "1rem",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
});
const FooterLink = styled(Link)({
  color: "white",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <Typography
          variant="h5"
          sx={{ borderBottom: "2px solid white", paddingBottom: "0.5rem" }}
        >
          Platform
        </Typography>
        <Typography variant="body2">
          © 2024 Platform. All rights reserved.
        </Typography>
      </FooterBox>
      <FooterBox>
        <Typography
          variant="h5"
          sx={{ borderBottom: "2px solid white", paddingBottom: "0.5rem" }}
        >
          Quick Links
        </Typography>
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
        <FooterLink component={Link} to={"/privacy-policy"}>
          Privacy Policy
        </FooterLink>
        <FooterLink component={Link} to={"/terms-of-service"}>
          Terms of Service
        </FooterLink>
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;
