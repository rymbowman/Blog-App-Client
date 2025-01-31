import { Avatar, Box, styled, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Posts from "./Posts";
import PrimaryContainer from "../components/Features/PrimaryContainer";
import { getUser } from "../services/userService";
import LoadingSpinner from "../components/Features/LoadingSpinner";

const ProfileHeader = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "2rem",
});

const ProfileDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  width: "100%",
  maxWidth: "900px",
  padding: "2rem",
});

const StyledAvatar = styled(Avatar)({
  width: 120,
  height: 120,
  marginBottom: "1rem",
  border: "4px solid #1976d2",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profileUser, setProfileUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(user.id);
      setProfileUser(user);
    };
    fetchUser();
  }, [user.id]);

  if (!profileUser) {
    return <LoadingSpinner loadingMessage={"Cannot find user"} />;
  }

  return (
    <PrimaryContainer>
      {user && user.id === profileUser.id ? (
        <>
          <ProfileHeader>
            <StyledAvatar alt="Profile Picture" src={profileUser.profile_img} />
            <Typography variant="h4">
              {profileUser.firstname} {profileUser.lastname}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {profileUser.username}
            </Typography>
          </ProfileHeader>
          <ProfileDetails>
            <Typography variant="h6">Bio</Typography>
            <Typography variant="body1" color="textSecondary">
              {profileUser.bio || "This is a brief bio about the user."}
            </Typography>
            <Posts userId={profileUser.id} />
          </ProfileDetails>
        </>
      ) : (
        <>
          <ProfileHeader>
            <StyledAvatar alt="Profile Picture" src={profileUser.profile_img} />
            <Typography variant="h4">
              {profileUser.firstname} {profileUser.lastname}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              @{profileUser.username}
            </Typography>
          </ProfileHeader>
          <ProfileDetails>
            <Typography variant="h6">Bio</Typography>
            <Typography variant="body1" color="textSecondary">
              {profileUser.bio || "This is a brief bio about the user."}
            </Typography>
            <Posts userId={profileUser.id} />
          </ProfileDetails>
        </>
      )}
    </PrimaryContainer>
  );
};

export default Profile;
