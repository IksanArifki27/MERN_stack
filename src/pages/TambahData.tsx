import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TambahData = () => {
  const [name, setName] = useState<string>("");
  const [deskripsi, setDeskripsi] = useState<string>("");

  const [tahun, setTahun] = useState<string>("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer" + token,
        },
        body: JSON.stringify({ name, deskripsi, tahun }),
      });
      const data = await response.json();
      console.log(data);

      navigate("/dashboard");
    } catch (error) {
      console.log("gagal create data");
    }
  };
  return (
    <div className="min-h-screen bg-slate-200 flex justify-center items-center">
      <div className="w-1/2 p-4 border-4  shadow-md rounded-md bg-white">
        <p className="text-center my-2 text-2xl font-bold"> Tambah Product</p>
        <form onSubmit={handleSubmit}>
          <div className="my-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Enter name Product"
              className="w-full p-2 rounded-md border-2 border-blue-400"
              onChange={(e) => setName(e.target.value)}
              required={true}
            />
          </div>
          <div className="my-2">
            <label htmlFor="name">Deskripsi:</label>
            <input
              type="text"
              placeholder="Enter Deskripsi Product"
              className="w-full p-2 rounded-md border-2 border-blue-400"
              onChange={(e) => setDeskripsi(e.target.value)}
              required={true}
            />
          </div>

          <div className="my-2">
            <label htmlFor="name">Tahun:</label>
            <input
              type="number"
              placeholder="Enter Tahun RIlis"
              className="w-full p-2 rounded-md border-2 border-blue-400"
              onChange={(e) => setTahun(e.target.value)}
              required={true}
            />
          </div>
          <div className="flex mt-4 gap-3">
            <Link
              to="/dashboard"
              className="p-2 bg-gray-700 text-white rounded-md cursor-pointer"
            >
              Kembali
            </Link>
            <button
              className="p-2 bg-blue-400 text-white rounded-md cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TambahData;
