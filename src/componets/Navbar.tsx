import React, { useState } from "react";
import { IoClose, IoDesktop, IoOpen } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const router = useNavigate();
  const [navbar, setNavbar] = useState(false);

  const handleNav = () => {
    setNavbar(!navbar);
  };
  return (
    <div className="flex h-12 bg-white items-center justify-between w-full fixed shadow-md">
      <div className="brand ml-4">
        <h1 className="text-3xl md:text-2xl font-bold">
          <Link to="/">Brand</Link>
        </h1>
      </div>
      <div className="hidden items-center gap-4  md:flex list-none mr-3">
        <li className="font-semibold hover:text-gray-800 text-gray-500 cursor-pointer   ">
          <a href="#home"> Home</a>
          {/* <Link to="/">Home</Link> */}
        </li>
        <li className="font-semibold hover:text-gray-800 text-gray-500 cursor-pointer">
          <a href="#about"> About</a>
          {/* <Link to="/about">About</Link> */}
        </li>
        <li className="font-semibold hover:text-gray-800 text-gray-500 cursor-pointer">
          {/* <Link to="/product">Product</Link> */}
          <a href="#product"> Product</a>
        </li>
      </div>
      <div className="md:flex gap-2 mr-3 hidden">
        <Link to="/register">
          <p className="font-semibold text-white p-1 rounded-md bg-blue-500">
            Sign Up
          </p>
        </Link>
        <Link to="/login">
          <p className="font-semibold text-white p-1  rounded-md bg-blue-500">
            Log In
          </p>
        </Link>
      </div>

      <div className="flex md:hidden mr-5 cursor-pointer" onClick={handleNav}>
        {!navbar ? (
          <IoDesktop size={22} className="text-gray-800" />
        ) : (
          <IoClose size={22} className="text-gray-800" />
        )}
      </div>
      <div
        className={
          !navbar
            ? "hidden"
            : "absolute w-1/2  py-4 px-8 top-0  ease-in-out duration-1500 h-full"
        }
      >
        <div className="brand ml-4">
          <h1 className="text-2xl font-bold">Brand</h1>
        </div>
        <ul>
          <li className="border-b-2  border-b-gray-600 py-3 font-semibold cursor-pointer ">
            <Link to="/">Home</Link>
          </li>
          <li className="border-b-2  border-b-gray-600 py-3 font-semibold">
            <Link to="/about">About</Link>
          </li>
          <li className="border-b-2  border-b-gray-600 py-3 font-semibold">
            <Link to="/product">Product</Link>
          </li>
        </ul>
        <div className=" mt-3   ">
          <button className="bg-purple-400 py-2 px-2 font-semibold text-white rounded-md  my-3 ">
            sing up
          </button>
          <button className="bg-purple-500 py-2 px-2 font-semibold text-white rounded-md">
            sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
