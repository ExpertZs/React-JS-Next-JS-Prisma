import { useRouter } from 'next/router';
import { blogData } from '../../data/blogData.json';

const Post = () => {
  const router = useRouter();
  const postId = router.query.id;
  const post = blogData.find((post) => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Date: {post.date}</p>
    </div>
  );
};

export default Post;
