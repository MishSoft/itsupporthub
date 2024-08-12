import React from "react";
import Nav from "@/components/Nav";
import { CiMenuFries } from "react-icons/ci";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 w-full p-4 text-white">
      <div className="relative flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold">ITSupportHub</h1>
        </Link>

        {/* Nav links */}
        <Nav />

        {/* mobile nav */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
