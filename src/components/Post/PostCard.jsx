import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";

const StyledCard = styled(Card)({
  width: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  textAlign: "center",
  borderRadius: "12px",
  padding: "1rem",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const PostPhoto = styled(CardMedia)({
  height: "175px",
  width: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

const ButtonContainer = styled(CardActions)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  padding: "0 1rem",
});

const StyledButton = styled(Button)({
  color: "#004D4D",
  "&:hover": {
    filter: "brightness(120%)",
  },
});
const PostCard = ({ post, onDelete }) => {
  const [isAuthor, setIsAuthor] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const checkAuthor = () => {
      if (user && user.id === post.user_id) {
        setIsAuthor(true);
      } else if (user && user.id !== post.user_id) {
        setIsAuthor(false);
      }
    };
    checkAuthor();
  }, [user, post.user_id]);

  return (
    <StyledCard key={post.id}>
      <PostPhoto image={post.image} title={post.title} />
      <CardContent>
        <Typography
          sx={{ color: "#004d4d" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {post.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#757575" }}>
          {post.category}
        </Typography>
        <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
          {post.description}
        </Typography>
      </CardContent>
      {isAuthor ? (
        <ButtonContainer>
          <StyledButton
            size="small"
            component={Link}
            to={`http://localhost:5173/post/${post.id}`}
          >
            Read
          </StyledButton>
          <StyledButton
            size="small"
            component={Link}
            to={`/edit/post/${post.id}`}
          >
            Edit
          </StyledButton>
          <StyledButton size="small" onClick={() => onDelete(post.id)}>
            Delete
          </StyledButton>
        </ButtonContainer>
      ) : (
        <StyledButton
          size="small"
          component={Link}
          to={`http://localhost:5173/post/${post.id}`}
        >
          Read
        </StyledButton>
      )}
    </StyledCard>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default PostCard;
