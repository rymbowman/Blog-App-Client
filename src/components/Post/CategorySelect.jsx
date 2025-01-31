import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getPosts } from "../../services/postService";

const StyledFormControl = styled(FormControl)({
  width: "70%",
  margin: "1rem 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const SelectCategory = styled(Select)({
  width: "100%",
});

const NewCategoryTextField = styled(TextField)({
  width: "70%",
  marginTop: "1rem",
});

const CategorySelect = ({
  currentCat,
  userId,
  onCategoryChange,
  onCreateCategoryChange,
}) => {
  const [category, setCategory] = useState(currentCat || "");
  const [newCategory, setNewCategory] = useState("");
  const [posts, setPosts] = useState([]);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    if (onCategoryChange) onCategoryChange(selectedCategory);
  };

  const handleNewCategoryChange = (event) => {
    const newCat = event.target.value.toLowerCase();
    setNewCategory(newCat);
    if (onCreateCategoryChange) onCreateCategoryChange(newCat);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getPosts(userId);
      setPosts(postData);
    };
    fetchPosts();
  }, [userId]);

  const uniqueCategories = [...new Set(posts.map((post) => post.category))];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <StyledFormControl fullWidth>
        <InputLabel>{currentCat ? currentCat : "Category"}</InputLabel>
        <SelectCategory
          value={category}
          onChange={handleCategoryChange}
          required
        >
          <MenuItem value="newCat">New Topic</MenuItem>
          {uniqueCategories.map((cat, index) => (
            <MenuItem key={index} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </SelectCategory>
      </StyledFormControl>
      {category === "newCat" && (
        <NewCategoryTextField
          fullWidth
          label="New Category"
          value={newCategory}
          onChange={handleNewCategoryChange}
          margin="normal"
          required
        />
      )}
    </Box>
  );
};

CategorySelect.propTypes = {
  currentCat: PropTypes.string,
  userId: PropTypes.number,
  onCategoryChange: PropTypes.func,
  onCreateCategoryChange: PropTypes.func,
};

export default CategorySelect;
