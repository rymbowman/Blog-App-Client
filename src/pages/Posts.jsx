import { Box, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { deletePost, getPosts } from "../services/postService";
import { useEffect, useState } from "react";
import PostCard from "../components/Post/PostCard";
import CategoryChips from "../components/Category/CategoryChips";
import PrimaryContainer from "../components/Features/PrimaryContainer";
import LoadingSpinner from "../components/Features/LoadingSpinner";

const PostsGrid = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  justifyContent: "center",
});

const Posts = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [postsStatus, setPostsStatus] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState("All");

  // Fetch posts from the server
  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getPosts(userId);

      if (postsData.length > 0) {
        setError(false);
        setPosts(postsData);
        setLoading(false);
      } else if (postsData.length === 0) {
        setError(true);
        setPostsStatus("No posts found");
        setLoading(false);
      } else {
        setLoading(true);
      }
    };
    fetchPosts();
  }, [userId]);

  // Delete post
  const handleDeletePost = async (id) => {
    await deletePost(id);
    setPosts(posts.filter((post) => post.id !== id));
  };

  // Handle click on category chip
  const handleClick = (e) => {
    setSelectedTopic(e.target.innerText);
  };

  // Extract unique categories
  const uniqueCategories = [...new Set(posts.map((post) => post.category))];

  // Filter posts based on selected category
  const filteredPosts =
    selectedTopic === "All"
      ? posts
      : posts.filter((post) => post.category === selectedTopic);

  return (
    <PrimaryContainer>
      <CategoryChips
        categories={uniqueCategories}
        selectedCategory={selectedTopic}
        onClick={handleClick}
      />
      <PostsGrid>
        {loading && <LoadingSpinner loadingMessage={"Loading posts..."} />}
        {error ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "3rem",
            }}
          >
            <Typography variant="h5">{postsStatus}</Typography>
          </Box>
        ) : (
          <>
            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                isAuthor={userId === post.user_id}
                onDelete={() => handleDeletePost(post.id)}
              />
            ))}
          </>
        )}
      </PostsGrid>
    </PrimaryContainer>
  );
};

export default Posts;

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  userId: PropTypes.number,
};
