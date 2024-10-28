import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-gray-900 min-h-screen">
      <p className="text-4xl font-bold text-blue-500 my-3">
        404 Page Not Found
      </p>
      <Link to="/">
        {" "}
        <p className="text-gray-500 text-xl underline">back to Home page</p>
      </Link>
    </div>
  );
};

export default PageNotFound;
