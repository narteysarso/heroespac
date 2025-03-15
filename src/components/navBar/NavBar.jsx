// import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { FaFacebook, FaInstagram } from "react-icons/fa";
// import { Link } from "react-router-dom";

export default function NavBar() {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const [isNav, setIsNav] = useState(false);

  function handleNavDrop() {
    setIsNav(!isNav);
    console.log(isNav);
  }

  const nav = [
    {
      name: "Home",
      link: "/",
      navLoc: "",
    },
    {
      name: "Products",
      link: "/products",
      navLoc: "products",
    },
    {
      name: "About Us",
      link: "/about",
      navLoc: "about",
    },
    {
      name: "Contact Us",
      link: "/contact",
      navLoc: "contact",
    },
  ];

  useEffect(() => {
    setLocation(window.location.pathname.substring(1));
    console.log(location);
  }, [location]);

  return (
    <div className="shadow w-screen bg-gray-900 bg-opacity-35 text-white font-main fixed top-0 z-10  backdrop-blur-md">
      <div className="w-11/12 md:w-10/12 mx-auto flex items-center justify-between py-5">
        <span className="text-xl font-bold">Logo</span>
        <div className="hidden md:flex gap-8 w-full justify-between">
          {/* Hide on small screens */}
          <ul></ul>
          <ul className="flex gap-8">
            {nav.map((navItems) => (
              <li
                key={navItems.name}
                onClick={() => navigate(navItems?.link, { replace: true })}
                className={`${
                  location === navItems.navLoc
                    ? "font-semibold border-b border-white"
                    : ""
                } text-white cursor-pointer border-t border-t-transparent hover:border-t hover:border-white`}
              >
                {navItems.name}
              </li>
            ))}
          </ul>
          <ul className="flex gap-4">
            <li className="cursor-pointer text-base">
              <FaFacebook className="text-2xl text-white hover:text-gray-900" />
            </li>
            <li className="cursor-pointer">
              <FaInstagram className="text-2xl text-white hover:text-gray-900" />
            </li>
          </ul>
        </div>
        {/* Responsive Nav for Small Screens */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white focus:outline-none"
            onClick={() => {
              handleNavDrop();
            }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Responsive Mobile Menu */}
      <div className="md:hidden">
        {isNav && (
          <ul className="flex flex-col text-center gap-8  pt-20 pb-5">
            {nav.map((navItems) => (
              <li
                key={navItems.name}
                onClick={() => navigate(navItems?.link, { replace: true })}
                className={`${
                  location === navItems.navLoc ? "font-semibold " : ""
                } text-white cursor-pointer border-t border-t-transparent hover:text-amber-500 hover:text-lg transition-all duration-150 ease-in-out`}
              >
                {navItems.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
