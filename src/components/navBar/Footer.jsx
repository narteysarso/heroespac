// import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="w-10/12 xl:w-8/12 mx-auto text-center font-main">
        <div className="pb-9 flex flex-col xl:flex-row justify-center items-center xl:justify-between xl:items-start">
          <p className="mb-4 font-bold">ICE WATER</p>
          <div className="flex flex-col gap-4 text-gray-300">
            <div className="flex justify-center xl:justify-end gap-4 text-gray-300">
              <FaFacebookF />
              <FaInstagram />
              <FaGoogle />
              <FaLinkedin />
            </div>
            <div className="">
              <ul className="flex justify-center gap-4">
                <Link to="/">
                  <li className="cursor-pointer border-b border-b-transparent  hover:border-b-white">
                    Home
                  </li>
                </Link>
                <Link to="../products">
                  <li className="cursor-pointer border-b border-b-transparent  hover:border-b-white">
                    Products
                  </li>
                </Link>
                <Link to="../about">
                  <li className="cursor-pointer border-b border-b-transparent  hover:border-b-white">
                    About Us
                  </li>
                </Link>
                <Link to="../contact">
                  <li className="cursor-pointer border-b border-b-transparent  hover:border-b-white">
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-t-slate-600 flex flex-col xl:flex-row justify-center items-center pt-9 font-medium">
          <p className="mb-4">&copy;2023 HEROES PAC. All rights reserved. </p>
          <p className="mb-4 ml-1">
            Designed & Developed by PatternCraft Group
          </p>
        </div>
      </div>
    </footer>
  );
}
