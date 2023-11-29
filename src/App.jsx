import { useState, useEffect } from "react";
import Post from "./components/Post";
import PostService from "./services/posts";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await PostService.getAll();
        setPosts(posts);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <h1>Blog list</h1>
      <h2>Posts: </h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
