// import React from "react";

export default function Header() {
  return (
    <>
      <div className="w-screen font-main h-[35dvh] bg-[url('./assets/about-header.jpg')]  bg-cover bg-no-repeat bg-center flex">
        <div className="w-full h-full flex justify-center items-end pb-12 backdrop-brightness-50">
          <div className=" flex items-center justify-center">
            <div className="text-white font-main text-center">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl">PRODUCTS</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
