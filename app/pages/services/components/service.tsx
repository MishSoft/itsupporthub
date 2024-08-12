import React from "react";

interface ServiceProps {
  icon: React.ComponentType<{ className?: string }>; // Icon is a React component
  title: string;
  description: string;
}

const Service = ({ icon: Icon, title, description }: ServiceProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <Icon className="text-4xl text-blue-600 mb-4 mx-auto" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Service;
