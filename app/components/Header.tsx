import React from "react";
import Nav from "./Nav";
import { CiMenuFries } from "react-icons/ci";
import MobileNav from "./MobileNav";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 w-full p-4 text-white">
      <div className="relative flex items-center justify-between">
        <h1 className="text-xl font-bold">ITSupportHub</h1>

        {/* Nav links */}
        <Nav />

        {/* mobile nav */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
