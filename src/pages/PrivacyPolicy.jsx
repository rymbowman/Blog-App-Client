import { Typography } from "@mui/material";
import PrimaryContainer from "../components/Features/PrimaryContainer";

const PrivacyPolicy = () => {
  return (
    <PrimaryContainer>
      <Typography variant="h2">Privacy Policy</Typography>
      <Typography
        variant="body1"
        sx={{ marginTop: "2rem", textAlign: "center" }}
      >
        Your privacy is important to us. It is our policy to respect your
        privacy regarding any information we may collect from you across this
        website. This is just a sample privacy policy page for the sake of this
        project.
      </Typography>
    </PrimaryContainer>
  );
};

export default PrivacyPolicy;
