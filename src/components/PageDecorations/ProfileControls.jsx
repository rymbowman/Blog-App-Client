import { Box, styled, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ProfileMenu from "./ProfileMenu";

const ProfileControlsContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  color: "white",
});

const ProfileControls = () => {
  const { user } = useContext(AuthContext);
  return (
    <ProfileControlsContainer>
      <Typography variant="body1" sx={{ fontSize: "1.25rem" }}>
        Hello, {user ? user.firstname : "Guest"}!
      </Typography>
      <ProfileMenu />
    </ProfileControlsContainer>
  );
};

export default ProfileControls;
