import '@testing-library/jest-dom';
import jest from 'jest';
import { render, screen } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Post from '../components/Post';

const post = {
  id: 'sjoiej23e23',
  title: 'El cielo azul',
  author: 'Cristian Castro',
  user: {
    username: '@zubstack',
  },
  likes: ['ramdom_user_id'],
};
const token = 'dnoifhr8349trh934fjoijerasf';
const fetchPosts = () => {
  console.log('fethching posts');
};

test('renders content', () => {
  const component = render(
    <Post post={post} token={token} fetchPosts={fetchPosts} />
  );

  component.getByText('El cielo azul - Cristian Castro');
  const detailsButton = component.container.querySelector('button');
  console.log(prettyDOM(detailsButton));
});

test('Button for show details is shown', () => {
  const { getByText, container } = render(
    <Post post={post} token={token} fetchPosts={fetchPosts} />
  );
  expect(getByText('See details')).toBeInTheDocument();
  const div = container.querySelector('.likes');
  expect(div).toBeNull();
});

test('clicking the button shows us the hidden content', async () => {
  const { getByText, container } = render(
    <Post post={post} token={token} fetchPosts={fetchPosts} />
  );

  const mockHandler = jest.fn();
  const user = userEvent.setup();
  const button = screen.getByRole('button');
  button.onclick = mockHandler;
  await user.click(button);
  const div = container.querySelector('.likes');
  expect(getByText('Hide details')).toBeInTheDocument();
  expect(div).toBeDefined();
  expect(mockHandler.mock.calls).toHaveLength(1);
});
