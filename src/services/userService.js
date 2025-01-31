import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/users";
//"http://localhost:5000/api/users";

export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getUser = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
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
