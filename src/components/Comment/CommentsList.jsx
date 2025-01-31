import { Box, styled } from "@mui/material";
import IndividualComment from "../Comment/IndividualComment";
import PropTypes from "prop-types";
import WriteComment from "../Comment/WriteComment";

const CommentsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginTop: "1rem",
  width: "100%",
});

const CommentsList = ({ comments, onDelete, onCreatedComment, postId }) => {
  return (
    <CommentsContainer>
      {comments.map((comment) => (
        <IndividualComment
          key={comment.id}
          comment={comment}
          onDelete={onDelete}
        />
      ))}
      <WriteComment postId={postId} onNewComment={onCreatedComment} />
    </CommentsContainer>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCreatedComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
};

export default CommentsList;
