import { Box, styled, Typography } from "@mui/material";

const FeaturesContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1736443569819-27b16dea3a94?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const FeaturesTitle = styled(Typography)({
  color: "white",
  letterSpacing: "2px",
  borderBottom: "1px solid white",
  width: "40%",
});

const FeatureList = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  maxWidth: "80%",
  gap: ".75rem",
  fontSize: "1rem",
  fontStyle: "italic",
  padding: "1rem",
  color: "white",
});

const IndividualFeature = styled(Box)({
  width: "40%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: ".5rem",
  padding: "1rem",
});

const Features = () => {
  return (
    <FeaturesContainer>
      <FeaturesTitle variant="h3" gutterBottom>
        Features
      </FeaturesTitle>
      <FeatureList>
        <IndividualFeature>
          <Typography variant="h4">Accessible</Typography>
          <Typography variant="body1">
            Get started quickly with our user-friendly interface.
          </Typography>
        </IndividualFeature>
        <IndividualFeature>
          <Typography variant="h4">Customizable</Typography>
          <Typography variant="body1">
            Personalize your profile to reflect your interests and expertise.
          </Typography>
        </IndividualFeature>
        <IndividualFeature>
          <Typography variant="h4">Interactive</Typography>
          <Typography variant="body1">
            Engage in meaningful conversations with like-minded individuals.
          </Typography>
        </IndividualFeature>
        <IndividualFeature>
          <Typography variant="h4">Resourceful</Typography>
          <Typography variant="body1">
            Share articles, videos, and other resources to help others learn.
          </Typography>
        </IndividualFeature>
      </FeatureList>
    </FeaturesContainer>
  );
};

export default Features;
