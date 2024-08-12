// app/blog/page.tsx
import React from "react";
import Link from "next/link";

// Example blog data (replace this with actual data fetching)
const blogs = [
  {
    id: "1",
    title: "Understanding JavaScript Closures",
    summary:
      "A deep dive into closures in JavaScript, including use cases and examples.",
  },
  {
    id: "2",
    title: "Top 10 CSS Tricks for Modern Web Design",
    summary:
      "Learn about the top 10 CSS tricks that can make your web design more effective and stylish.",
  },
  {
    id: "3",
    title: "How to Optimize React Performance",
    summary:
      "Tips and techniques to enhance the performance of your React applications.",
  },
  // Add more blog posts as needed
];

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="space-y-6">
        {blogs.map((blog) => (
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
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
