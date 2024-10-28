import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-700 w-full flex justify-between h-32 items-center">
      <p className="text-white text-4xl font-bold ml-3 ">footer</p>
      <ul className=" gap-3 text-white mr-4 cursor-pointer">
        <li className="hover:text-white text-gray-300">Home</li>
        <li className="hover:text-white text-gray-300">About</li>
        <li className="hover:text-white text-gray-300">Product</li>
      </ul>
    </div>
  );
};

export default Footer;
