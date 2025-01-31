import { useEffect, useState } from "react";
import { deleteComment, getComments } from "../../services/commentService";
import { useParams } from "react-router-dom";
import { Box, styled, Typography } from "@mui/material";
import CommentActions from "../Comment/CommentActions";
import CommentsList from "../Comment/CommentsList";
import WriteComment from "../Comment/WriteComment";
import LoadingSpinner from "../Features/LoadingSpinner";

const MainContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  padding: "2rem",
  width: "70%",
  maxWidth: "800px",
  margin: "0 auto",
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [displayedComments, setDisplayedComments] = useState(false);
  const [commentsCount, setCommentsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const fetchComments = async (postId) => {
    try {
      const commentsList = await getComments(postId);
      setComments(commentsList);
    } catch (error) {
      setError("Error fetching comments", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments(id);
  }, [id]);

  useEffect(() => {
    setCommentsCount(comments.length);
  }, [comments]);

  const handleNewComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await deleteComment(commentId);
      console.log("Comment deleted:", commentId);
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== commentId)
      );
    } catch (error) {
      console.error("Error deleting comment:", error.message);
    }
  };

  return (
    <MainContainer>
      {loading && <LoadingSpinner loadingMessage={"Loading comments..."} />}
      {!loading && comments.length === 0 ? (
        <WriteComment
          postId={id}
          onNewComment={(newComment) => {
            handleNewComment(newComment);
            setDisplayedComments(true);
          }}
        />
      ) : (
        <>
          <CommentActions
            displayedComments={displayedComments}
            onShowComments={() => setDisplayedComments(true)}
            onHideComments={() => setDisplayedComments(false)}
            commentsCount={commentsCount}
          />
          {displayedComments && (
            <CommentsList
              comments={comments}
              onDelete={handleDeleteComment}
              onCreatedComment={handleNewComment}
              postId={id}
            />
          )}
        </>
      )}
      {error && <Typography>{error}</Typography>}
    </MainContainer>
  );
};

export default Comments;
