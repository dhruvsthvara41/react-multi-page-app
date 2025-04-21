import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import "./Posts.css"; // Import the CSS file

export async function loader() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
}

function Posts() {
  const posts = useLoaderData();

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
