"use client";
import React from "react";
import { FaCheckCircle, FaRegStar, FaBullhorn } from "react-icons/fa";

const features = [
  {
    icon: FaCheckCircle,
    title: "Reliable Support",
    description: "Get expert help with any tech issues.",
  },
  {
    icon: FaRegStar,
    title: "Top-Rated Experts",
    description: "Our team of professionals is highly rated.",
  },
  {
    icon: FaBullhorn,
    title: "24/7 Availability",
    description: "We're here to help you anytime.",
  },
];

const FeatureHighlights = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 text-center"
        >
          <feature.icon className="text-4xl text-blue-600 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureHighlights;
