import { Box, Icon, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PrimaryButton from "../Features/PrimaryButton";

const WelcomeBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  padding: "2rem",
  borderRadius: "10px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f9f9f9",
});

const PlatformLogo = styled(Box)({
  textDecoration: "none",
  color: "#008080",
});

const WelcomeBackContainer = ({ user }) => {
  return (
    <WelcomeBox>
      <Typography
        variant="h5"
        color="#FF6F61"
      >{`Welcome back, ${user.firstname}!`}</Typography>
      <PlatformLogo>
        <Icon sx={{ fontSize: "2.5rem" }}>campaign</Icon>
      </PlatformLogo>
      <PrimaryButton
        buttonText="Go To Profile"
        component={Link}
        linkTo={`/profile/${user.id}`}
      />
    </WelcomeBox>
  );
};

WelcomeBackContainer.propTypes = {
  user: PropTypes.object.isRequired,
  firstname: PropTypes.string,
  id: PropTypes.number,
};

export default WelcomeBackContainer;
