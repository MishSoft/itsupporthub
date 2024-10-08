"use client";
import React, { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import TutorialCard from "@/components/TutorialCard";

export default function page() {
  const [videos, setVideos] = useState<any[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchVideos = async (
    query: string,
    pageToken: string | null = null
  ) => {
    try {
      const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
      const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=6&q=${encodeURIComponent(
        query
      )}&key=${API_KEY}${pageToken ? `&pageToken=${pageToken}` : ""}`;

      const response = await fetch(searchUrl);

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (pageToken) {
        setVideos((prevVideos) => [...prevVideos, ...data.items]);
      } else {
        setVideos(data.items);
      }

      setNextPageToken(data.nextPageToken || null);
    } catch (error) {
      console.error("Error fetching videos:", error);
      alert("Failed to fetch videos. Please try again later.");
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

  // Fetch default videos on component mount
  useEffect(() => {
    fetchVideos("node, python, programming");
  }, []);

  return (
    <main className="min-h-screen flex flex-col gap-8 mb-10">
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>
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
