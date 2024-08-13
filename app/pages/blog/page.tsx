// app/pages/blog/page.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";

const fetchBlogPosts = async () => {
  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/jj81pl7j23yv/entries?access_token=X1XL9DoP2BzMPGOSVMcSRubact4qa8HhEX1QtnT57s8&content_type=blogPost`
    );

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Error fetching data:", errorData);
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("Failed to fetch data");
  }
};

const BlogPage = async () => {
  let blogPosts = [];

  try {
    const data = await fetchBlogPosts();
    blogPosts = data.items || [];
  } catch (error) {
    console.error("Error loading blog posts:", error);
  }

  return (
    <div className="container h-screen mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      {blogPosts.length === 0 ? (
        <div className="w-full h-full flex items-center justify-center">
          <p>No blog posts available.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {blogPosts.map(
            (blog: { id: string; title: string; summary: string }) => (
              <div key={blog.id} className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-700 mb-4">{blog.summary}</p>
                <Link
                  className="text-blue-500 hover:underline"
                  href={`/blog/${blog.id}`}
                >
                  Read more
                </Link>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
