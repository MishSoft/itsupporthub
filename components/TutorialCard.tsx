import Link from "next/link";
import React from "react";

interface TutorialCardProps {
  title: string;
  description: string;
  link: string;
  thumbnail: string;
}

const TutorialCard: React.FC<TutorialCardProps> = ({
  title,
  description,
  link,
  thumbnail,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <Link className="underline text-blue-500 mt-10" href={link}>
          Watch Video
        </Link>
      </div>
    </div>
  );
};

export default TutorialCard;
