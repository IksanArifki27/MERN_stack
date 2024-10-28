import React from "react";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  const revomeToken = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="h-11 w-full bg-blue-500 flex justify-between shadow-md ">
      <p className="text-3xl font-bold text-white ml-6">Brand</p>
      <div className="flex items-center gap-8 mr-6">
        <p className="font-semibold text-white">Iksan Arifki</p>
        <p>
          <button
            className="p-1 bg-blue-900 text-white font-semibold rounded-md"
            onClick={revomeToken}
          >
            Logout
          </button>
        </p>
      </div>
    </div>
  );
};

export default Topbar;
