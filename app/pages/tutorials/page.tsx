"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TutorialCard from "@/components/TutorialCard";
import VideoModal from "@/components/VideoModal";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

const ExploreVideos: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchVideos = async (pageToken: string | null = null) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            part: "snippet",
            q: "programming tutorial computer help",
            type: "video",
            maxResults: 12,
            key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
            pageToken: pageToken || "",
          },
        }
      );

      const videoList = response.data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium.url,
      }));

      setVideos((prevVideos) => [...prevVideos, ...videoList]);
      setNextPageToken(response.data.nextPageToken || null);
      setHasMore(!!response.data.nextPageToken);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const loadMoreVideos = () => {
    if (nextPageToken) {
      fetchVideos(nextPageToken);
    }
  };

  if (loading && videos.length === 0)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-xl">Loading videos...</p>
      </div>
    );
  if (error)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Error fetching videos: {error}</p>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Explore Programming & Tutorial Videos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <TutorialCard
            key={video.id}
            title={video.title}
            description={video.description}
            link={`https://www.youtube.com/watch?v=${video.id}`}
            thumbnail={video.thumbnail}
          />
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={loadMoreVideos}
          >
            {loading ? "Loading more..." : "Load More"}
          </button>
        </div>
      )}
      <VideoModal
        videoId={selectedVideoId}
        onClose={() => setSelectedVideoId(null)}
      />
    </div>
  );
};

export default ExploreVideos;
