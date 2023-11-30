import { useState, useEffect } from "react";
import Post from "./components/Post";
import PostService from "./services/posts";
import Login from "./components/Login";
import UserInformation from "./components/UserInformation";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App = () => {
  const [token, setToken] = useLocalStorage("userToken", "");
  const [user, setUser] = useLocalStorage("userData", "");
  const [posts, setPosts] = useState([]);

  function logOut() {
    setToken("");
    localStorage.removeItem("userToken");
  }

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

  if (!token) return <Login setUser={setUser} setToken={setToken} />;

  return (
    <div>
      <nav className="flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold text-center p-5 bg-gray-100">
          Blog list
        </h1>
        <button
          onClick={logOut}
          className="bg-slate-700 text-white p-3 hover:bg-black"
        >
          Sign out
        </button>
      </nav>

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
