import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/api/users";

export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getUser = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const updateUser = async (userId, user) => {
  try {
    const response = await axios.put(`${API_URL}/${userId}`, user);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};
