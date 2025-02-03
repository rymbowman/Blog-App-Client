import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/api/posts";

export const getPosts = async (user_id) => {
  try {
    const response = await axios.get(API_URL, {
      params: { user_id },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
};

export const getPost = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const createPost = async (post) => {
  try {
    const postResponse = await axios.post(API_URL, post);
    return postResponse.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const updatePost = async (postId, post) => {
  try {
    const postResponse = await axios.put(`${API_URL}/${postId}`, post);
    return postResponse.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const deletePost = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(error.message);
  }
};
