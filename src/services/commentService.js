import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/api";

export const getComments = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error(`No comments found for post with ID ${postId}`);
    } else {
      console.error("Error fetching comments:", error.message);
    }
    return [];
  }
};

export const createComment = async (postId, comment) => {
  try {
    const response = await axios.post(
      `${API_URL}/posts/${postId}/comments`,
      comment
    );
    return response.data;
  } catch (error) {
    console.error("Error creating comment:", error.message);
  }
};

export const deleteComment = async (commentId) => {
  try {
    await axios.delete(`${API_URL}/comments/${commentId}`);
  } catch (error) {
    console.error(error.message);
  }
};
