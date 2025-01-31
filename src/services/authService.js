import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/api/auth";
//"http://localhost:5000/api/auth";

export const registerUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/register`, user);
    return response.data;
  } catch (error) {
    console.error("Error response data:", error.response.data);
    throw error;
  }
};

export const loginUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/login`, user);
    return response.data;
  } catch (error) {
    console.error("Error response data:", error.response.data);
    console.error("Request failed with status code:", error.response.status);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await axios.post(`${API_URL}/logout`);
  } catch (error) {
    console.error(error.message);
  }
};

export const sendPasswordResetEmail = async (email) => {
  try {
    await axios.post(`${API_URL}/forgot-password`, { email });
  } catch (error) {
    console.error(error.message);
  }
};

export const resetPassword = async (token, password) => {
  try {
    await axios.post(`${API_URL}/reset-password/${token}`, { password });
  } catch (error) {
    console.error(error.message);
  }
};
