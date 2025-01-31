import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "../services/authService";
import PrimaryButton from "../components/Features/PrimaryButton";
import PrimaryContainer from "../components/Features/PrimaryContainer";
import PrimaryForm from "../components/Features/PrimaryForm";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(email);
      setMessage("Reset email sent successfully");
    } catch (error) {
      setMessage("Failed to send reset email"), error.message;
    }
  };
  return (
    <PrimaryContainer>
      <PrimaryForm componentType={"form"} formAction={handleSubmit}>
        <Typography variant="h4">Forgot Password</Typography>
        {message && <Typography color="red">{message}</Typography>}
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <PrimaryButton buttonText="Send reset email" buttonType={"submit"} />
        <Link to={"/login"}>Back to login</Link>
      </PrimaryForm>
    </PrimaryContainer>
  );
};

export default ForgotPassword;
