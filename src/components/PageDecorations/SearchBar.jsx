import {
  Avatar,
  Box,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";

const SearchForm = styled("form")({
  display: "flex",
  alignItems: "center",
  borderRadius: "25px",
  padding: "0.5rem 1rem",
  width: "100%",
  maxWidth: "400px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

const StyledInputBase = styled(InputBase)({
  width: "90%",
  padding: ".5rem",
  borderRadius: "4px",
});

const SuggestionsBox = styled(Box)({
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translateX(-55%)",
  backgroundColor: "#fff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  zIndex: 1,
  width: "25%",
});

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [options, setOptions] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await getUsers();
        const users = usersResponse.map((user) => ({
          label: `${user.firstname} ${user.lastname} (@${user.username})`,
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          profile_img: user.profile_img,
          id: user.id,
          type: "user",
        }));
        setAllUsers(users);
      } catch (error) {
        console.error("Error fetching data", error.message);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const currentValue = e.target.value;
    setSearchQuery(currentValue);
    if (currentValue.length === 0) {
      setOptions([]);
      return;
    }
    // Filter users based on search query
    setOptions(
      allUsers.filter(
        (option) =>
          `${option.firstname} ${option.lastname}`
            .toLowerCase()
            .includes(currentValue.toLowerCase()) ||
          option.username.toLowerCase().includes(currentValue.toLowerCase())
      )
    );
  };

  // handle search when user clicks on a suggestion or presses enter
  const handleSearch = (e, value) => {
    e.preventDefault();
    const selectedUser =
      value ||
      options.find(
        (option) => option.label.toLowerCase() === searchQuery.toLowerCase()
      );
    if (selectedUser) {
      navigate(`/profile/${selectedUser.id}`);
      setSearchQuery("");
    } else {
      alert("User not found.");
      setSearchQuery("");
    }
  };

  const handleSelect = (user) => {
    navigate(`/profile/${user.id}`);
    setSearchQuery("");
    setOptions([]);
  };

  return (
    <SearchForm onSubmit={(e) => handleSearch(e, null)}>
      <StyledInputBase
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="submit" sx={{ p: "10px" }}>
        <SearchIcon />
      </IconButton>
      {options.length > 0 && (
        <SuggestionsBox>
          <List>
            {options.map((option) => (
              <ListItem
                type="button"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
                key={option.id}
                onClick={() => handleSelect(option)}
              >
                <ListItemAvatar>
                  <Avatar src={option.profile_img} alt={option.firstname} />
                </ListItemAvatar>
                <ListItemText primary={option.label} />
              </ListItem>
            ))}
          </List>
        </SuggestionsBox>
      )}
    </SearchForm>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
  key: PropTypes.string,
};
export default SearchBar;
