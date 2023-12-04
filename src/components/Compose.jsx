import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import PostService from "../services/posts";
import { Toast } from "../utils/alert_config";
import ComposeForm from "./ComposeForm";

function Compose({ token, fetchPosts }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [url, setUrl] = useState(null);

  async function handleCreatePost(event) {
    try {
      event.preventDefault();
      const data = { title, author, url };
      await PostService.createPost(token, data);
      Toast.fire({
        icon: "success",
        title: "Successfully created!",
      });
      fetchPosts();
      navigate("/");
    } catch (error) {
      console.log("error", error);
      Toast.fire({
        icon: "error",
        title: error.response.data.message,
      });
    }
  }
  return (
    <MainLayout>
      <ComposeForm
        handleCreatePost={handleCreatePost}
        setTitle={setTitle}
        setAuthor={setAuthor}
        setUrl={setUrl}
      />
    </MainLayout>
  );
}

export default Compose;
