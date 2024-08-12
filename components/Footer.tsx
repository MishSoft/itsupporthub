// app/components/Footer.tsx
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const links = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Services",
    path: "/pages/services",
  },

  {
    name: "Blog",
    path: "/pages/blog",
  },

  {
    name: "FAQ",
    path: "/pages/faq",
  },

  {
    name: "Contact",
    path: "/pages/contact",
  },

  {
    name: "About Us",
    path: "/pages/about",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between mb-6">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Computer Helpers</h3>
            <p className="text-gray-400">
              Your trusted partner for reliable IT support and computer
              troubleshooting.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="list-none">
              {links.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className="text-gray-400 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Computer Helpers. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
