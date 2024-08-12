"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

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

const Nav: React.FC = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="items-center gap-8 hidden md:flex">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-blue-500 border-b-2 border-b-blue-500"
            } hover:border-b-2 p-2 transition-all duration-150`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
