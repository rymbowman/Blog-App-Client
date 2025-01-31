import { Box, Button, TextField } from "@mui/material";
import { createComment } from "../../services/commentService";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import PropTypes from "prop-types";

const WriteComment = ({ postId, onNewComment }) => {
  const [comment, setComment] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    const newComment = {
      content: comment,
      user_id: user.id,
      post_id: postId,
      username: user.username,
    };
    try {
      const createdComment = await createComment(postId, newComment);
      console.log("Comment submitted:", createdComment);
      setComment("");
      // Manually add the username to the created comment
      createdComment.username = user.username;
      onNewComment(createdComment);
    } catch (error) {
      console.error("Error creating comment:", error.message);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
        fullWidth
        multiline
        rows={4}
        variant="outlined"
      />
      <Button onClick={handleSubmitComment}>Post</Button>
    </Box>
  );
};

WriteComment.propTypes = {
  postId: PropTypes.string.isRequired,
  onNewComment: PropTypes.func.isRequired,
};

export default WriteComment;
