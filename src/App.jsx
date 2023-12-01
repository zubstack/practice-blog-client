import { useState, useEffect } from "react";
import PostService from "./services/posts";
import Login from "./components/Login";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Compose from "./components/Compose";
import Nav from "./components/Nav";
import UserPosts from "./components/UserPosts";

const App = () => {
  const [token, setToken] = useLocalStorage("userToken", "");
  const [user, setUser] = useLocalStorage("userData", "");
  const [posts, setPosts] = useState([]);

  function logOut() {
    setToken("");
    window.localStorage.clear();
  }

  const fetchPosts = async () => {
    try {
      console.log("Fetching posts");
      const posts = await PostService.getAllPosts();
      //By default: sorting by likes
      const postsSorted = [...posts].sort(
        (a, b) => b.likes.length - a.likes.length
      );
      setPosts(postsSorted);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (!token) return <Login setUser={setUser} setToken={setToken} />;

  return (
    <BrowserRouter>
      <Nav logOut={logOut} />

      <hr />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              token={{ token }}
              fetchPosts={fetchPosts}
              user={user}
              posts={posts}
            />
          }
        />
        <Route
          path="/compose"
          element={<Compose token={token} fetchPosts={fetchPosts} />}
        />
        <Route path="/user-posts" element={<UserPosts token={token} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
