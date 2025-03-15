// import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="w-screen font-main h-screen bg-[url('./assets/hero1.jpg')]  bg-cover bg-no-repeat bg-left-bottom flex">
        <div className="w-full h-full flex justify-center items-center backdrop-brightness-50">
          <div className=" flex items-center justify-center">
            <div className="text-white font-main text-center w-11/12 md:w-8/12 xl:w-7/12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Bringing pure, refreshing water to enhance your well-being and
                satisfy your thirst.
              </h1>
              <h2 className="text-md mt-8 md:mt-7 xl:mt-3">
                Experience the purity of nature in every drop. Your trusted
                source for high-quality water solutions.
              </h2>
              <Link to="products">
                <button className="text-md xl:text-lg px-6 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 bg-amber-500 rounded-sm mt-8 text-black border border-transparent hover:border hover:border-amber-500 hover:bg-transparent hover:text-amber-500 transition-colors duration-150 ease-in-out">
                  Explore Product
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
