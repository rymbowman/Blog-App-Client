import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/Theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Post from "./pages/Post";
import "./App.css";
import EditPost from "./pages/EditPost";
import { AuthProvider } from "./context/AuthProvider";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import MainLayout from "./layouts/MainLayout";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="write" element={<Write />} />
              <Route path="post/:id" element={<Post />} />
              <Route path="profile/:id" element={<Profile />} />
              <Route path="edit/post/:id" element={<EditPost />} />
              <Route path="profile/:userId/edit" element={<EditProfile />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-of-service" element={<TermsOfService />} />
            </Route>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password/:token" element={<ResetPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
