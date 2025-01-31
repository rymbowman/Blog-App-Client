import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import WelcomeBackContainer from "../components/Homepage/WelcomeBackContainer";
import LogoBoxContainer from "../components/Homepage/LogoBoxContainer";
import HomeHeader from "../components/Homepage/HomeHeader";
import TestimonialsContainer from "../components/Homepage/TestimonialsContainer";
import Features from "../components/Homepage/Features";

const HomeContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  minHeight: "100vh",
  backgroundColor: "D3D3D3",
});

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <HomeContainer>
      {user ? (
        <WelcomeBackContainer user={user} />
      ) : (
        <Box>
          <LogoBoxContainer />
          <HomeHeader />
          <Features />
          <TestimonialsContainer />
        </Box>
      )}
    </HomeContainer>
  );
};

export default Home;
