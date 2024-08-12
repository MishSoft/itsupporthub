"use client";
import React from "react";
import {
  FaShieldAlt,
  FaTools,
  FaCogs,
  FaLaptop,
  FaHdd,
  FaRecycle,
} from "react-icons/fa";
import Service from "@/app/pages/services/components/service";

const servicesData = [
  {
    icon: FaShieldAlt,
    title: "Security Assistance",
    description:
      "Protect your data and devices with our expert security services.",
  },
  {
    icon: FaTools,
    title: "Troubleshooting",
    description: "Get help solving any technical issue with your computer.",
  },
  {
    icon: FaCogs,
    title: "Software Installation",
    description: "We'll help you install and configure the software you need.",
  },
  {
    icon: FaLaptop,
    title: "Hardware Repair",
    description: "Assistance with diagnosing and repairing hardware issues.",
  },
  {
    icon: FaHdd,
    title: "System Optimization",
    description:
      "Improve your computer's performance with our optimization services.",
  },
  {
    icon: FaRecycle,
    title: "Data Recovery",
    description:
      "Recover lost or corrupted data with our professional services.",
  },
];

export default function page() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our Services
        </h2>
        <p className="text-lg text-gray-600">
          Explore the wide range of IT services we offer to help you with all
          your computer needs.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <Service
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
