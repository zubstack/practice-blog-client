import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import PostService from "../services/posts";
import { Toast } from "../utils/alert_config";

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
      <form className="max-w-md mx-auto" onSubmit={handleCreatePost}>
        <h1 className="text-3xl font-bold text-center p-5 text-slate-800">
          Compose a new post
        </h1>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={({ target }) => setTitle(target.value)}
            type="title"
            name="floating_title"
            id="floating_title"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={({ target }) => setAuthor(target.value)}
            type="author"
            name="floating_author"
            id="floating_author"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_author"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Author
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={({ target }) => setUrl(target.value)}
            type="url"
            name="repeat_url"
            id="floating_repeat_url"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_repeat_url"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Image Url
          </label>
        </div>

        <button
          type="submit"
          className="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </MainLayout>
  );
}

export default Compose;
