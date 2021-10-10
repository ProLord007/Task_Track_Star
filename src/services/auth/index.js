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
