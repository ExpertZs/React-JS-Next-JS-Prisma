import Link from 'next/link';

const blogData = [
  { id: '1', title: 'First Post' },
  { id: '2', title: 'Second Post' },
  { id: '3', title: 'Third Post' },
];

const Blog = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogData.map((post) => (
          <li key={post.id}>
            <Link href={`../post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
