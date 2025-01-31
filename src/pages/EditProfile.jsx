import { Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, updateUser } from "../services/userService";
import { AuthContext } from "../context/AuthContext";
import PrimaryButton from "../components/Features/PrimaryButton";
import PrimaryContainer from "../components/Features/PrimaryContainer";

import Input from "../components/Features/Input";
import PrimaryForm from "../components/Features/PrimaryForm";
import LoadingSpinner from "../components/Features/LoadingSpinner";

const EditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [bio, setBio] = useState("");
  const { user, updateUser: updateUserContext } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const fetchUser = async () => {
        const userData = await getUser(user.id);
        if (userData) {
          setFirstName(userData.firstname);
          setLastName(userData.lastname);
          setEmail(userData.email);
          setUsername(userData.username);
          setPassword(userData.password);
          setProfileImg(userData.profile_img);
          setBio(userData.bio);
        }
      };
      fetchUser();
    }
  }, [user]);

  const submitForm = async (e) => {
    e.preventDefault();
    const updatedUser = {
      firstname: firstName,
      lastname: lastName,
      email,
      username,
      password,
      profile_img: profileImg,
      bio,
    };
    const response = await updateUser(user.id, updatedUser);
    if (response) {
      updateUserContext(response);
      navigate(`/profile/${user.id}`);
    }
  };

  if (!user) {
    return <LoadingSpinner loadingMessage={"Cannot find user"} />;
  }

  return (
    <PrimaryContainer>
      <PrimaryForm componentType={"form"} formAction={submitForm}>
        <Typography variant="h4">Edit Profile</Typography>
        <Input
          label="First Name*"
          name="firstName"
          type="text"
          value={firstName}
          action={(e) => setFirstName(e.target.value)}
        />
        <Input
          label="Last Name*"
          name="lastName"
          type="text"
          value={lastName}
          action={(e) => setLastName(e.target.value)}
        />
        <Input
          label="Email*"
          name="email"
          type="email"
          value={email}
          action={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Username*"
          name="username"
          type="text"
          value={username}
          action={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Password*"
          name="Password"
          type="password"
          value={password}
          action={(e) => setPassword(e.target.value)}
        />
        <Input
          label="Profile Image"
          name="profileImg"
          type="text"
          value={profileImg}
          action={(e) => setProfileImg(e.target.value)}
        />
        <Input
          label="bio"
          name="bio"
          type="text"
          value={bio}
          action={(e) => setBio(e.target.value)}
        />
        <PrimaryButton buttonText="Update profile" buttonType={"submit"} />
      </PrimaryForm>
    </PrimaryContainer>
  );
};

export default EditProfile;
