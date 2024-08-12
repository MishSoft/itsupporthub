// pages/api/tutorials.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Video = {
  id: string;
  title: string;
  description: string;
};

type Tutorial = {
  title: string;
  description: string;
  link: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tutorial[] | { error: string }>
) {
  try {
    // Fetch video data from Khan Academy API
    const response = await axios.get<Video[]>(
      "https://api.khanacademy.org/api/internal/videos"
    );

    // Format video data into tutorial-like objects
    const tutorials: Tutorial[] = response.data.map((video) => ({
      title: video.title,
      description: video.description,
      link: video.id, // Use video ID to construct the link
    }));

    // Send response with formatted tutorial data
    res.status(200).json(tutorials);
  } catch (error) {
    // Handle errors and send a 500 response
    res.status(500).json({ error: "Failed to fetch tutorials" });
  }
}
