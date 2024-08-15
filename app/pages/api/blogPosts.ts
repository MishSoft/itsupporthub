// pages/api/blogPosts.ts
import type { NextApiRequest, NextApiResponse } from "next";

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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(blogPosts);
}
