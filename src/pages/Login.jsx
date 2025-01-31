import { Box, styled, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { AuthContext } from "../context/AuthContext";
import PrimaryButton from "../components/Features/PrimaryButton";
import PrimaryContainer from "../components/Features/PrimaryContainer";
import PrimaryForm from "../components/Features/PrimaryForm";
import Input from "../components/Features/Input";
import LogoBox from "../components/Features/LogoBox";

const StyledLink = styled(Link)({
  color: "red",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form button clicked");
    try {
      const result = await loginUser({ username, password });
      console.log("this is the result:", result);
      if (!result) {
        console.log("loginUser api call did not go through");
        setForgotPassword(true);
      } else {
        login(result);
        console.log("this is the result after login:", result);
        navigate(`/profile/${result.id}`);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setForgotPassword(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <PrimaryContainer>
      <LogoBox />
      <PrimaryForm
        componentType={"form"}
        formAction={handleSubmit}
        onKeyPress={handleKeyPress}
      >
        <Typography variant="h4">Sign In</Typography>
        <Input
          value={username}
          label="Username"
          type="text"
          action={(e) => setUsername(e.target.value)}
        />
        <Input
          value={password}
          label="Password"
          type="password"
          action={(e) => setPassword(e.target.value)}
        />
        <PrimaryButton buttonText="Sign in" buttonType={"submit"} />
        {forgotPassword ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <StyledLink to={"/forgot-password"}>Forgot Password?</StyledLink>
            <Link to={"/register"}>Create an account</Link>
          </Box>
        ) : (
          <Link to={"/register"}>Create an account</Link>
        )}
      </PrimaryForm>
    </PrimaryContainer>
  );
};

export default Login;
