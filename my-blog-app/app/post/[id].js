import { useRouter } from 'next/router';
import blogData from '../../data/blogData.json';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = blogData.find((post) => post.id === id);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Published on: {post.date}</p>
    </div>
  );
};

export default Post;
