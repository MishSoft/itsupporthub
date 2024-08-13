import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // Replace this with your actual data fetching logic
  const blogPosts = [
    {
      id: "1",
      title: "Understanding JavaScript Closures",
      content: "Detailed content about JavaScript closures...",
    },
    {
      id: "2",
      title: "Top 10 CSS Tricks for Modern Web Design",
      content: "Detailed content about CSS tricks...",
    },
    {
      id: "3",
      title: "How to Optimize React Performance",
      content: "Detailed content about React performance optimization...",
    },
  ];

  const blog = blogPosts.find((post) => post.id === id);

  if (!blog) {
    return NextResponse.json(
      { message: "Blog post not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(blog);
}
