"use client";
import React, { useState } from "react";
import Hero from "../components/Hero";
import FeatureHighlights from "@/components/FeatureHighlights";
import NewsletterSignup from "@/components/NewsletterSignup";
import TutorialCard from "@/components/TutorialCard";

export default function Home() {
  const [videos, setVideos] = useState<any[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchVideos = async (
    query: string,
    pageToken: string | null = null
  ) => {
    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

    if (!API_KEY) {
      console.error("YouTube API key is missing!");
      alert("Failed to fetch videos. API key is missing.");
      return;
    }

    try {
      const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=6&q=${encodeURIComponent(
        query
      )}&key=${API_KEY}${pageToken ? `&pageToken=${pageToken}` : ""}`;
      const response = await fetch(searchUrl);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `API error: ${response.status} ${response.statusText} - ${errorData.error.message}`
        );
      }
      const data = await response.json();
      setVideos((prevVideos) =>
        pageToken ? [...prevVideos, ...data.items] : data.items
      );
      setNextPageToken(data.nextPageToken || null);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching videos:", error.message);
        alert(
          `Failed to fetch videos. Please try again later. ${error.message}`
        );
      } else {
        console.error("Unknown error:", error);
        alert("An unknown error occurred. Please try again later.");
      }
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    fetchVideos(query);
  };

  const loadMoreVideos = () => {
    if (nextPageToken) {
      fetchVideos(searchQuery, nextPageToken);
    }
  };

  return (
    <main className="min-h-screen flex flex-col gap-8 mb-10">
      <Hero onSearch={handleSearch} />
      <FeatureHighlights />
      <NewsletterSignup />
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {videos.map((video) => (
            <TutorialCard
              key={video.id.videoId}
              title={video.snippet.title}
              description={video.snippet.description}
              link={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              thumbnail={video.snippet.thumbnails.high.url}
            />
          ))}
        </div>
        {nextPageToken && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreVideos}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
