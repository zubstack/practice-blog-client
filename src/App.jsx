import { useState, useEffect } from "react";
import Post from "./components/Post";
import PostService from "./services/posts";
import Login from "./components/Login";

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
      <h1 className="text-3xl font-bold text-center p-5 bg-gray-100">
        Blog list
      </h1>
      <Login />
      {/* <main className="p-4">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <li key={post.id}>
              <Post post={post} />
            </li>
          ))}
        </ul>
      </main> */}
    </div>
  );
};

export default App;
