import { Box, Typography } from "@mui/material";
import PrimaryContainer from "../components/Features/PrimaryContainer";

const TermsOfService = () => {
  return (
    <PrimaryContainer>
      <Typography variant="h2">Terms of Service</Typography>
      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Typography variant="h4">1. Terms</Typography>
        <Typography variant="body1">
          By accessing this website, you are agreeing to be bound by these terms
          of service, all applicable laws and regulations, and agree that you
          are responsible for compliance with any applicable local laws. If you
          do not agree with any of these terms, you are prohibited from using or
          accessing this site. The materials contained in this website are
          protected by applicable copyright and trademark law. This is just a
          sample Terms of Service page for the sake of this project.
        </Typography>
      </Box>
    </PrimaryContainer>
  );
};

export default TermsOfService;
