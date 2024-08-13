"use client";
// app/blog/[id]/page.tsx
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Define a TypeScript interface for the blog post
interface BlogPost {
  title: string;
  content: string;
}

const BlogPostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (id) {
      // Replace with your data fetching logic
      fetch(`/api/blogs/${id}`)
        .then((response) => response.json())
        .then((data: BlogPost) => setBlog(data));
    }
  }, [id]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>
      <div className="prose">
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogPostPage;
