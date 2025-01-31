import { Box, styled } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../Features/Input";

const InputsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "70%",
  gap: "1rem",
});

const PostForm = ({
  title,
  image,
  description,
  content,
  onTitleChange,
  onImageChange,
  onDescriptionChange,
  onContentChange,
}) => {
  return (
    <InputsContainer>
      <Input
        value={title}
        label="Title"
        maxRows={4}
        action={onTitleChange}
        required
      />
      <Input
        value={image}
        label="Image URL"
        maxRows={4}
        action={onImageChange}
        required
      />
      <Input
        value={description}
        label="Description"
        maxRows={4}
        action={onDescriptionChange}
        required
      />
      <Input
        value={content}
        label="Main Content"
        rows={10}
        action={onContentChange}
        required
      />
    </InputsContainer>
  );
};

PostForm.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onContentChange: PropTypes.func.isRequired,
};

export default PostForm;
