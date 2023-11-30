import axios from "axios";
import { API_URL } from "../utils/config";

const login_endpoint = "/api/login";
// const users_endpoint = "/api/users";
// const baseUrl = `${API_URL}${users_endpoint}`;

const loginUser = async (data) => {
  console.log("data", data);
  const response = await axios.post(`${API_URL}${login_endpoint}`, data);
  return response.data;
};

export default { loginUser };
