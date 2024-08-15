"use client";
import { useState } from "react";
import blogPostsData from "@/blogPosts.json";

// Define the BlogPost interface
export interface BlogPost {
  id: string;
  title: string;
  content: string;
}

const BlogPage = () => {
  // Use the BlogPost type for your state
  const [blogPosts] = useState<BlogPost[]>(blogPostsData);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPostsData);

  // Filter blog posts based on the search query
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter blog posts based on title or content matching the search query
    const results = blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query)
    );
    setFilteredPosts(results);
  };

  return (
    <div className="w-full  p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search blog posts..."
        className="p-2 border border-gray-300 rounded-lg mb-6 w-full md:w-1/2 lg:w-1/3"
      />
      {filteredPosts.length > 0 ? (
        <ul className="space-y-4">
          {filteredPosts.map((post) => (
            <li key={post.id} className="p-4 bg-white shadow-md rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No blog posts found.</p>
      )}
    </div>
  );
};

export default BlogPage;
