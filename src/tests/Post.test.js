import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Post from "../components/Post";

test("renders content", () => {
  const post = {
    id: "sjoiej23e23",
    title: "El cielo azul",
    author: "Cristian Castro",
    user: {
      username: "@zubstack",
    },
    likes: ["ramdom_user_id"],
  };
  const token = "dnoifhr8349trh934fjoijerasf";
  const fetchPosts = () => {
    console.log("fethching posts");
  };

  render(<Post post={post} token={token} fetchPosts={fetchPosts} />);

  const element = screen.getByText("El cielo azul - Cristian Castro");
  expect(element).toBeDefined();
});
