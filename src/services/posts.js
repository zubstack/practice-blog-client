import axios from "axios";
import { API_URL } from "../utils/config";

const posts_endpoint = "/api/posts";
const baseUrl = `${API_URL}${posts_endpoint}`;

const getAllPosts = async () => {
  const request = axios.get(baseUrl);
  const response = await request;
  return response.data;
};

const createPost = async (token, data) => {
  return await axios.post(baseUrl, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
const toggleLike = async (token, id) => {
  return await axios.patch(
    `${baseUrl}/${id}`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export default { getAllPosts, createPost, toggleLike };
