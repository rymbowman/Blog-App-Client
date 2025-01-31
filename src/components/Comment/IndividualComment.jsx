import { Box, Icon, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Comment = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  border: "1px solid #ddd",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

const CommentHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "0.5rem",
});

const DeleteIcon = styled(Icon)({
  cursor: "pointer",
  borderRadius: "10px",
  border: "1px solid #ddd",
  padding: "0.25rem",
  width: "fit-content",
  height: "fit-content",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "box-shadow 0.2s, transform 0.2s",
  "&:active": {
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
    transform: "translateY(1px)",
  },
});

const IndividualComment = ({ comment, onDelete }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      year: "2-digit",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleString("en-US", options).replace(",", "");
  };

  return (
    <Comment key={comment.id}>
      <CommentHeader>
        <Typography variant="subtitle2">@{comment.username}</Typography>
        <DeleteIcon onClick={() => onDelete(comment.id)}>delete</DeleteIcon>
      </CommentHeader>
      <Typography variant="body1">{comment.content}</Typography>
      <Typography variant="caption">
        {formatDate(comment.created_at)}
      </Typography>
    </Comment>
  );
};

export default IndividualComment;

IndividualComment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func,
};
