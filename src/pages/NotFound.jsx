import { Box, styled, Typography } from "@mui/material";
import PrimaryButton from "../components/Features/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const MainContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const NotFound = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleClick = () => {
    navigate(`/profile/${user.id}`);
  };
  return (
    <MainContainer>
      <Typography variant="h1">404 Not Found</Typography>
      <PrimaryButton buttonText="Go home" action={handleClick} />
    </MainContainer>
  );
};

export default NotFound;
