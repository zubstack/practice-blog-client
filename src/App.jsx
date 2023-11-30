import { useState, useEffect } from "react";
import PostService from "./services/posts";
import Login from "./components/Login";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Compose from "./components/Compose";
import Nav from "./components/Nav";

const App = () => {
  const [token, setToken] = useLocalStorage("userToken", "");
  const [user, setUser] = useLocalStorage("userData", "");
  const [posts, setPosts] = useState([]);

  function logOut() {
    setToken("");
    window.localStorage.clear();
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
    <BrowserRouter>
      <Nav logOut={logOut} />

      <hr />

      <Routes>
        <Route path="/" element={<Home user={user} posts={posts} />} />
        <Route path="/compose" element={<Compose />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
