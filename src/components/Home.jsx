import MainLayout from "../layouts/MainLayout";
import Post from "./Post";
import UserInformation from "./UserInformation";

function Home({ user, posts, token, fetchPosts }) {
  return (
    <MainLayout>
      <UserInformation user={user} />
      <section className="p-10">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <li key={post.id}>
              <Post fetchPosts={fetchPosts} token={token} post={post} />
            </li>
          ))}
        </ul>
      </section>
    </MainLayout>
  );
}

export default Home;
