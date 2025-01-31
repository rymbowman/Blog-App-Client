import { Box, Typography } from "@mui/material";
import PrimaryButton from "../components/Features/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const NotFound = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleClick = () => {
    navigate(`/profile/${user.id}`);
  };
  return (
    <Box>
      <Typography variant="h1">404 Not Found</Typography>
      <PrimaryButton buttonText="Go home" action={handleClick} />
    </Box>
  );
};

export default NotFound;
