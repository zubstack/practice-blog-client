import { useState, useEffect } from "react";
import Post from "./components/Post";
import PostService from "./services/posts";
import Login from "./components/Login";
import UserInformation from "./components/UserInformation";

const App = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await PostService.getAllPosts();
        setPosts(posts);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchPosts();
  }, []);

  if (!user) return <Login setUser={setUser} />;

  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-5 bg-gray-100">
        Blog list
      </h1>

      <main className="p-4">
        <UserInformation user={user} />
        <section className="p-10">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {posts.map((post) => (
              <li key={post.id}>
                <Post post={post} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
