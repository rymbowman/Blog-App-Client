import { Card, CardMedia, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPost } from "../services/postService";
import Comments from "../components/Comment/Comments";
import PrimaryButton from "../components/Features/PrimaryButton";
import LoadingSpinner from "../components/Features/LoadingSpinner";

const PostContainer = styled(Card)({
  maxWidth: "800px",
  margin: "2rem auto",
  padding: "1rem",
  borderRadius: "12px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const PostReadTime = styled(Typography)({
  marginBottom: "1rem",
  color: "#666",
});

const PostImage = styled(CardMedia)({
  height: "400px",
  borderRadius: "12px",
  marginBottom: "1rem",
});

const PostTitle = styled(PostReadTime)({
  marginBottom: "1rem",
  fontWeight: "bold",
  color: "#333",
});

const PostDate = styled(PostReadTime)({
  marginBottom: "1rem",
  color: "#666",
  fontStyle: "italic",
});

const PostDescription = styled(PostReadTime)({
  marginBottom: "1rem",
  color: "#666",
});

const PostContent = styled(PostReadTime)({
  marginBottom: "2rem",
  color: "#444",
});

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getPost(postId);
      console.log(postData);
      setPost(postData);
    };
    fetchPost();
  }, [postId]);

  if (!post) {
    return <LoadingSpinner loadingMessage={"No posts found"} />;
  }

  // convert the word count into an estimated reading time
  const readingTime = (wordCount) => {
    const wordsPerMinute = 200;
    const minutes = wordCount / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    return readTime;
  };

  const estimatedReadingTime = readingTime(post.word_count);

  // split the content by newline characters and wrap each paragraph in a <PostReadTime> tag
  const paragraphs = post.content.split("\n").map((paragraph, index) => (
    <PostReadTime variant="body1" key={index}>
      {paragraph}
    </PostReadTime>
  ));

  // create date format for post
  const formattedDate = new Date(post.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  return (
    <PostContainer>
      <PostImage image={post.image} component="img" />
      {estimatedReadingTime > 1 ? (
        <PostReadTime>Read time: {estimatedReadingTime} minutes</PostReadTime>
      ) : (
        <PostReadTime>Read time: {estimatedReadingTime} minute</PostReadTime>
      )}
      <PostTitle variant="h4">{post.title}</PostTitle>
      <PostDate variant="body1">{formattedDate}</PostDate>
      <PostDescription variant="body1">{post.description}</PostDescription>
      <PostContent component="div">{paragraphs}</PostContent>
      <Comments />
      <PrimaryButton
        buttonText="Back to posts"
        component={Link}
        linkTo={`/profile/${post.user_id}`}
      />
    </PostContainer>
  );
};

export default Post;

Post.propTypes = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
