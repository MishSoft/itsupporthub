"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";

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

const MobileNav: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="border p-2 rounded-full">
          <CiMenuFries size={20} />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center justify-center">
          <SheetDescription className="flex flex-col items-center justify-center gap-8">
            {links.map((link, index) => {
              return (
                <Link
                  className={`${
                    link.path === pathname &&
                    "text-blue-500 border-b-2 border-b-blue-500"
                  } hover:border-b-2 p-2 transition-all duration-150`}
                  href={link.path}
                  key={index}
                >
                  {link.name}
                </Link>
              );
            })}
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
