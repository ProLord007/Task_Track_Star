import api from "../axios";

export const loginUser = async (data) => {
  try {
    const response = await api.post("/auth/signin", data, {
      headers: { "Content-Type": "application/json" },
    });
    localStorage.setItem("token", response.data.token);
    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e);
  }
};

export const googleAuth = async (tokenId) => {
  try {
    const response = await api.post("/auth/google", tokenId);
    localStorage.setItem("token", response.data.token);

    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e);
  }
};

export const registerUser = async (data) => {
  try {
    const response = await api.post("/auth/signup", data);
    localStorage.setItem("token", response.data.token);

    return JSON.stringify(response.data);
  } catch (e) {
    console.log(e);
  }
};

export const getUserData = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await api.get("/auth/getUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return JSON.stringify(response.data);
    } catch (e) {
      console.log(e);
    }
  }
};
