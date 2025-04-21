import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import "./PostDetail.css"; // Import the CSS file

export async function loader({ params }) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch post");
  }
}

function PostDetail() {
  const post = useLoaderData();

  return (
    <div className="post-detail-container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/posts">Back to Posts</Link>
    </div>
  );
}

export default PostDetail;
