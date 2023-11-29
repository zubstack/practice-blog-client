import axios from "axios";
import { API_URL } from "../utils/config";

const posts_endpoint = "/api/posts";
const baseUrl = `${API_URL}${posts_endpoint}`;

const getAllPosts = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

export default { getAllPosts };
