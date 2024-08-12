"use client";
import React from "react";

const testimonials = [
  {
    name: "John Doe",
    testimonial: "The support I received was outstanding. Highly recommended!",
  },
  {
    name: "Jane Smith",
    testimonial: "A fantastic service that solved all my tech issues quickly.",
  },
  {
    name: "Sam Wilson",
    testimonial: "Great expertise and very professional. Will use again!",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="flex flex-col gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600 mb-4">"{testimonial.testimonial}"</p>
              <p className="font-semibold text-gray-800">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
