import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-700 w-full flex justify-between h-32 items-center">
      <p className="text-white text-4xl font-bold ml-10 ">SmartFind</p>
      <ul className=" gap-3 text-white mr-10 cursor-pointer">
        <li className="font-semibold text-white cursor-pointer   ">
          <a href="#home"> Home</a>
          {/* <Link to="/">Home</Link> */}
        </li>
        <li className="font-semibold text-white cursor-pointer">
          <a href="#about"> About</a>
          {/* <Link to="/about">About</Link> */}
        </li>
        <li className="font-semibold text-white cursor-pointer">
          {/* <Link to="/product">Product</Link> */}
          <a href="#product"> Product</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
