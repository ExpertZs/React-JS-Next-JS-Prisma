"use client";
import { useEffect, useState } from 'react';

const Post = ({ params }) => {
  const [post, setPost] = useState(null);
  const id= params.id;
  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`../../data/blogData.json`); // Path to the JSON file
        if (!response.ok) {
          throw new Error('Error fetching posts.');
        }
        const data = await response.json();
        const selectedPost = data.find(item => item.id === id);
        setPost(selectedPost);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Post</h1>
      <h1 className="fontbold text-lg">{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.date}</p>
    </div>
  );
};

export default Post;
