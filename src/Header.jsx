import React, { useState } from "react";
import logo from "./assets/Logo.svg";
import { TbMenu2 } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between h-36 items-center px-4 lg:px-0">
      <img src={logo} alt="logo" />
      <div>
        {/* Desktop Links */}
        <NavLink className="hidden items-center gap-16 lg:flex">
          <Link to="/" className="text-[#183B56] text-lg font-semibold">
            Home
          </Link>
          <Link to="/articles" className="text-[#183B56] text-lg font-semibold">
            Articles
          </Link>
          <Link to="/pages" className="text-[#183B56] text-lg font-semibold">
            Pages
          </Link>
          <Link to="/pricing" className="text-[#183B56] text-lg font-semibold">
            Pricing
          </Link>
          <Link
            to="/signin"
            className="py-2 px-10 text-[#1565D8] text-lg font-semibold border-2 border-[#1565D8] rounded-full"
          >
            Sign in
          </Link>
        </NavLink>

        {/* Menu Icon for Mobile */}
        <TbMenu2
          className="flex lg:hidden text-3xl text-[#183B56] cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        />

        {/* Slide-in Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="bg-white w-64 h-full p-6 shadow-lg transition-transform transform translate-x-0">
              {/* Close Button */}
              <IoClose
                className="text-2xl mb-4 cursor-pointer text-[#183B56]"
                onClick={() => setIsMenuOpen(false)}
              />
              {/* Mobile Links */}
              <Link
                to="/"
                className="block text-[#183B56] text-lg font-semibold mb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/articles"
                className="block text-[#183B56] text-lg font-semibold mb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </Link>
              <Link
                to="/pages"
                className="block text-[#183B56] text-lg font-semibold mb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Pages
              </Link>
              <Link
                to="/pricing"
                className="block text-[#183B56] text-lg font-semibold mb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/signin"
                className="block py-2 px-4 text-center text-[#1565D8] text-lg font-semibold border-2 border-[#1565D8] rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
