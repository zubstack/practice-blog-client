import { useEffect, useState } from "react";
import PostService from "../services/posts";
import { FaHeart } from "react-icons/fa";

function UserPosts({ token }) {
  const [userPosts, setUserPosts] = useState(null);
  const fetchUserPosts = async () => {
    try {
      const { posts } = await PostService.getUserPosts(token);
      //By default: sorting by likes
      const postsSorted = [...posts].sort(
        (a, b) => b.likes.length - a.likes.length
      );
      setUserPosts(postsSorted);
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log("userPosts", userPosts);

  useEffect(() => {
    fetchUserPosts();
  }, []);

  async function handleDelete(id) {
    try {
      await PostService.deletePost(token, id);
      fetchUserPosts();
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div className="p-6 mt-3">
      {!userPosts?.length ? (
        <p className="text-center mt-20 text-gray-600">
          {"This user doesn't have posts"}
        </p>
      ) : (
        <div className="max-w-screen-md mx-auto bg-gray-100 p-8 rounded shadow">
          <h2 className="text-2xl font-bold mb-6">My posts</h2>

          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-200 text-gray-600">
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Likes</th>
                <th className="py-2 px-4 border-b"></th>
                <th className="py-2 px-4 border-b"></th>
              </tr>
            </thead>
            <tbody>
              {userPosts.map((post) => (
                <tr key={post.id} className="bg-white">
                  <td className="text-gray-800 py-2 px-4 border-b">
                    {post.title} - {post.author}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <p className="flex items-center justify-center gap-2 text-slate-700">
                      <FaHeart />
                      {post.likes.length}
                    </p>
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <button className="text-blue-500 hover:underline focus:outline-none">
                      Edit
                    </button>
                  </td>
                  <td className="text-center py-2 px-4 border-b">
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="r text-red-500 hover:underline focus:outline-none"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UserPosts;
