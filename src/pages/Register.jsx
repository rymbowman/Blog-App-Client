import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import PrimaryButton from "../components/Features/PrimaryButton";
import PrimaryContainer from "../components/Features/PrimaryContainer";
import PrimaryForm from "../components/Features/PrimaryForm";
import Input from "../components/Features/Input";
import LogoBox from "../components/Features/LogoBox";
import { getUsers } from "../services/userService";
import ValidationErrors from "../components/Features/ValidationErrors";
import { getValidationSchema, validateForm } from "../utils/validation";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState("");
  const [notValid, setNotValid] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL);
    const fetchUsers = async () => {
      const usersData = await getUsers();
      console.log("Users data:", usersData); // Log users data for debugging
      setUsersData(usersData);
    };
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form button clicked");

    const schema = getValidationSchema(usersData);
    const formData = { firstName, lastName, email, username, password };
    const errors = await validateForm(schema, formData);

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setNotValid(true);
      return;
    }

    try {
      const newUser = {
        firstname: firstName,
        lastname: lastName,
        email,
        username,
        password,
      };
      const result = await registerUser(newUser);
      if (!result) {
        setError("Registration failed. Please try again.");
        return;
      } else {
        alert("Registration successful! Please log in.");
        setFirstName("");
        setLastName("");
        setEmail("");
        setUsername("");
        setPassword("");
        setError("");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during registration:", error); // Log error for debugging
      setError("Registration failed. Please try again.");
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
        <Typography variant="h4">Sign Up</Typography>
        <Input
          label="First Name"
          type="text"
          name="firstName"
          value={firstName}
          action={(e) => setFirstName(e.target.value)}
        />
        {notValid && validationErrors.firstName && (
          <ValidationErrors
            errors={{ firstName: validationErrors.firstName }}
          />
        )}

        <Input
          label="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          action={(e) => setLastName(e.target.value)}
        />
        {notValid && validationErrors.lastName && (
          <ValidationErrors errors={{ lastName: validationErrors.lastName }} />
        )}
        <Input
          label="Email"
          type="email"
          name="email"
          value={email}
          action={(e) => setEmail(e.target.value)}
        />
        {notValid && validationErrors.email && (
          <ValidationErrors errors={{ email: validationErrors.email }} />
        )}
        <Input
          label="Username"
          type="text"
          name="username"
          value={username}
          action={(e) => setUsername(e.target.value)}
        />
        {notValid && validationErrors.username && (
          <ValidationErrors errors={{ username: validationErrors.username }} />
        )}
        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          action={(e) => setPassword(e.target.value)}
        />
        {notValid && validationErrors.password && (
          <ValidationErrors errors={{ password: validationErrors.password }} />
        )}
        <PrimaryButton buttonText="Sign Up" buttonType={"submit"} />
        <Link to="/login">Already have an account?</Link>
        {error && <p>{error}</p>}
      </PrimaryForm>
    </PrimaryContainer>
  );
};

export default Register;
