import { useState } from "react";
import PostService from "../services/posts.js";
import { FaChevronDown, FaHeart } from "react-icons/fa";

const { toggleLike } = PostService;

const Post = ({ post, token, fetchPosts }) => {
  const [toggleDetails, setToggleDetails] = useState(false);
  const handleToggle = async () => {
    try {
      await toggleLike(token, post.id);
      fetchPosts();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div
      id="posts__container"
      className="max-w-sm bg-white border border-gray-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      {!toggleDetails && (
        <div className="flex justify-center mt-2">
          <img
            className="rounded-t-lg "
            src="https://picsum.photos/370/200"
            alt="blog-img"
          />
        </div>
      )}
      <div className="px-5 pt-3 mb-2">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title} - {post.author}
          </h5>
        </a>
      </div>
      {toggleDetails && (
        <PostDetails handleToggle={handleToggle} token={token} post={post} />
      )}
      <div className="flex justify-end px-5">
        <button
          onClick={() => setToggleDetails(!toggleDetails)}
          className="flex items-center mb-4 gap-2 text-gray-700 bg-slate-200 py-1 px-2 border rounded-md border-slate-300 hover:bg-slate-300"
        >
          {`${toggleDetails ? "Hide " : "See "}`}details{" "}
          <FaChevronDown className="text-gray-400" />
        </button>
      </div>
    </div>
  );
};

const PostDetails = ({ post, handleToggle }) => (
  <div className="px-4 mb-4">
    <p className="mb-2 text-sm text-gray-600">@{post.user.username}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>

    <div className="flex justify-between mt-8">
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
      <button
        onClick={handleToggle}
        className="flex items-center gap-2 text-slate-700"
      >
        <FaHeart />
        {post.likes.length}
      </button>
    </div>
  </div>
);

export default Post;
