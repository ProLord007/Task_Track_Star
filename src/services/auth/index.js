import api from "../axios";

export const loginUser = async (data) => {
  try {
    const response = await api.post("/auth/signin", data, {
      headers: { "Content-Type": "application/json" },
    });
    localStorage.setItem("token", response.data.token);
    return JSON.stringify({ data: response.data, type: "success" });
  } catch (e) {
    return JSON.stringify({ message: e.response.data.message, type: "error" });
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

    return JSON.stringify({ data: response.data, type: "success" });
  } catch (e) {
    return JSON.stringify({ message: e.response.data.message, type: "error" });
  }
};

export const getUserData = async (token) => {
  // const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await api.get("/auth/getUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return JSON.stringify({ data: response.data, type: "success" });
    } catch (e) {
      return JSON.stringify({
        message: e.response.data.message,
        type: "error",
      });
    }
  }
};
