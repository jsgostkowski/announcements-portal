import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <footer
        className="w-full h-16 bg-green-300 border-t-2 border-white
            fixed left-0 bottom-0
            flex justify-center items-center
            text-white text-2xl"
      >
        <div className="container p-6">
          <div className="">
            <p className="flex justify-center items-center">
              <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white ">
                Register for free
              </span>
              <Link href="/Register">
                <button
                  type="button"
                  className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Sign up!
                </button>
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
