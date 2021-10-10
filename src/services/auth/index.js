import api from "../axios";

export const loginUser = async (data) => {
  try {
    const response = await api.post("/auth/signin", data, {
      headers: { "Content-Type": "application/json" },
    });
    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e);
  }
};

export const googleAuth = async (tokenId) => {
  try {
    const response = await api.post("/auth/google", tokenId);
    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e);
  }
};

export const registerUser = async (data) => {
  try {
    const response = await api.post("/auth/signup", data);
    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e);
  }
};
