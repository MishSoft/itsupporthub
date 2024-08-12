"use client";
import Link from "next/link";
import React from "react";

interface CTAButtonProps {
  text: string;
  link: string;
}

const CTAButton = ({ text, link }: CTAButtonProps) => {
  return (
    <Link
      href={link}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition duration-300"
    >
      {text}
    </Link>
  );
};

export default CTAButton;
