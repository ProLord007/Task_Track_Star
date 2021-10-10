import axios from "axios";

const api = axios.create({
  baseURL: "https://task-manager-server-vm.herokuapp.com/",
  // responseType: "application/json",
});

export default api;
