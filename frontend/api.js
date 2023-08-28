import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://192.168.8.101:3500/',
// });

export const login = async (userData) => {
  try {
    const response = await axios.post(
      "http://192.168.8.101:3500/users/login",
      userData,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Login error:", error);
  }
};

export const getUserDetails = async (token, userId) => {
  try {
    const response = await axios.get(
      `http://192.168.8.101:3500/users/details/${userId}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Fetch user details error:", error);
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(
      "http://192.168.8.101:3500/users/register",
      userData,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error("Login error:", error);
  }
};