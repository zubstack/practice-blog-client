import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Post from "../components/Post";

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
test("renders content", () => {
  render(<Post post={post} token={token} fetchPosts={fetchPosts} />);

  const element = screen.getByText("El cielo azul - Cristian Castro");
  expect(element).toBeDefined();
});

test("Button for show details is shown", () => {
  const { getByText, container } = render(
    <Post post={post} token={token} fetchPosts={fetchPosts} />
  );
  expect(getByText("See details")).toBeInTheDocument();
  const div = container.querySelector(".likes");
  expect(div).toBeNull();
});

test("clicking the button shows us the hidden content", async () => {
  const { getByText, container } = render(
    <Post post={post} token={token} fetchPosts={fetchPosts} />
  );

  const user = userEvent.setup();
  const button = screen.getByRole("button");
  await user.click(button);
  const div = container.querySelector(".likes");
  expect(getByText("Hide details")).toBeInTheDocument();
  expect(div).toBeDefined();
});
