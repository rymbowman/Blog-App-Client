import { Chip, Stack, styled } from "@mui/material";
import PropTypes from "prop-types";

const StyledStack = styled(Stack)({
  marginBottom: "2rem",
});

const CategoryChips = ({ categories, selectedCategory, onClick }) => {
  return (
    <StyledStack direction="row" spacing={2}>
      <Chip
        label="All"
        variant="outlined"
        onClick={onClick}
        sx={{ backgroundColor: selectedCategory === "All" ? "#FFD700" : "" }}
      />
      {categories.map((category, index) => (
        <Chip
          key={index}
          label={category}
          variant="outlined"
          onClick={onClick}
          sx={{
            backgroundColor: selectedCategory === category ? "#FFD700" : "",
          }}
        />
      ))}
    </StyledStack>
  );
};

CategoryChips.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default CategoryChips;
