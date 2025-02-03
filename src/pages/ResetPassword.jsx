import { Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../services/authService";
import PrimaryContainer from "../components/Features/PrimaryContainer";
import PrimaryForm from "../components/Features/PrimaryForm";
import PrimaryButton from "../components/Features/PrimaryButton";
import Input from "../components/Features/Input";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters long and contain a number, a letter, and a special character"
      );
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    try {
      await resetPassword(token, password);
      navigate("/login");
    } catch (error) {
      setError("An error occurred while resetting the password", error);
    }
  };

  return (
    <PrimaryContainer>
      <PrimaryForm componentType={"form"} formAction={handleSubmit}>
        <Typography variant="h4">Reset Password</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <Input
          label="New Password"
          type="password"
          value={password}
          action={(e) => setPassword(e.target.value)}
          required={true}
        />
        <Input
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          action={(e) => setConfirmPassword(e.target.value)}
          required={true}
        />
        <PrimaryButton type="submit" buttonText="Reset Password" />
      </PrimaryForm>
    </PrimaryContainer>
  );
};

export default ResetPassword;
