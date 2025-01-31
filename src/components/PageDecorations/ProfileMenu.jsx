import {
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  styled,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import AddIcon from "@mui/icons-material/Add";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    MenuListProps={{
      autoFocusItem: false,
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.text.primary,
    boxShadow:
      "rgb(255 255 255 / 20%) 0px 0px 0px 1px, rgb(0 0 0 / 20%) 0px 2px 10px",
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      marginLeft: theme.spacing(-0.5),
      marginRight: theme.spacing(1),
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      backgroundColor: theme.palette.background.paper,
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
}));

const MenuChoice = styled(MenuItem)({
  display: "flex",
  alignItems: "center",
});

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const avatarRef = useRef(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
    navigate("/");
  };
  return (
    <>
      <Avatar
        ref={avatarRef}
        alt="Profile Picture"
        src={user?.profile_img || "/default-profile.png"}
        sx={{
          cursor: "pointer",
          height: "4rem",
          width: "4rem",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, .2)",
        }}
        onClick={openMenu}
      />
      <StyledMenu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuChoice onClick={() => navigate(`/profile/${user.id}`)}>
          <ListItemIcon>
            <HomeIcon fontSize="medium" />
          </ListItemIcon>{" "}
          Home
        </MenuChoice>
        <MenuChoice onClick={() => navigate("/write")}>
          <ListItemIcon>
            <AddIcon fontSize="medium" />
          </ListItemIcon>{" "}
          Create Post
        </MenuChoice>
        <MenuChoice onClick={() => navigate(`/profile/${user.id}/edit`)}>
          <ListItemIcon>
            <CreateIcon fontSize="medium" />
          </ListItemIcon>{" "}
          Edit Profile
        </MenuChoice>
        <Divider />
        <MenuChoice onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize="medium" />
          </ListItemIcon>
          Logout
        </MenuChoice>
      </StyledMenu>
    </>
  );
};

export default ProfileMenu;
