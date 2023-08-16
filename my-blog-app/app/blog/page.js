"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('../../data/blogData.json'); 
        if (!response.ok) {
          throw new Error('Error fetching posts.');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}><h2>{post.title}</h2></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
