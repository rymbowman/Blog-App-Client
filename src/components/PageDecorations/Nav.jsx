import { Box, styled, Toolbar } from "@mui/material";
import Logo from "./Logo";
import ProfileControls from "./ProfileControls";
import SearchBar from "./SearchBar";

const NavBar = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  backgroundColor: "#FF6F61",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  height: "100px",
});

const NavContainer = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

const Nav = () => {
  return (
    <NavBar>
      <NavContainer>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Logo />
        </Box>
        <SearchBar />
        <ProfileControls />
      </NavContainer>
    </NavBar>
  );
};

export default Nav;
