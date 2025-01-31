import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PrimaryButton from "../Features/PrimaryButton";

const HeaderContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "2rem",
  height: "100vh",
});

const HeaderContent = styled(Box)({
  width: "50%",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  padding: "2rem",
});

const TitleText = styled(Typography)({
  color: "white",
  textAlign: "center",
});

const ContentText = styled(Typography)({
  color: "white",
  fontSize: "1.5rem",
  textAlign: "center",
});

const ButtonBox = styled(Box)({
  display: "flex",
  gap: "1rem",
});

const HomeHeader = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <TitleText variant="h2" gutterBottom>
          Find your platform.
        </TitleText>
        <ContentText variant="body1" gutterBottom>
          This is a place where you can share ideas and knowledge with others.
          Join a community of individuals who are passionate about learning and
          giving back. Our platform offers a variety of features to help you
          connect, collaborate, and grow:
        </ContentText>
        <ButtonBox>
          <PrimaryButton
            buttonText="Get Started"
            component={Link}
            linkTo={"/register"}
          />
          <PrimaryButton
            buttonText="Log In"
            component={Link}
            linkTo={"/login"}
          />
        </ButtonBox>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default HomeHeader;
