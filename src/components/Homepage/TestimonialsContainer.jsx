import { Box, styled, Typography } from "@mui/material";
const MainContainer = styled(Box)({
  gap: "2rem",
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const ContentContainer = styled(Box)({
  width: "50%",
  height: "auto",
  gap: "2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ContentTitle = styled(Typography)({
  color: "white",
  letterSpacing: "2px",
  borderBottom: "1px solid white",
  textAlign: "center",
});

const MainContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  fontStyle: "italic",
  color: "white",
});

const TestimonialsContainer = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <ContentTitle variant="h2" gutterBottom>
          Testimonials
        </ContentTitle>
        <MainContent>
          <Typography variant="body1" sx={{ fontSize: "2rem" }} gutterBottom>
            {
              "Platform has transformed the way I share my ideas. It's intuitive and engaging!"
            }{" "}
            - User A
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "2rem" }} gutterBottom>
            {
              "I love the customization options and the community aspect of Platform."
            }{" "}
            - User B
          </Typography>
        </MainContent>
      </ContentContainer>
    </MainContainer>
  );
};

export default TestimonialsContainer;
