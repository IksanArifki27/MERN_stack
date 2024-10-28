import React, { useEffect, useState } from "react";
import PageLayout from "../layouts/PageLayout";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState<string>("");
  const [deskripsi, setDeskripsi] = useState<string>("");
  const [tahun, setTahun] = useState<string>("");
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const getDataID = async () => {
    try {
      const getData = await fetch(`http://localhost:8000/api/product/${id}`);
      const { data } = await getData.json();
      setName(data.name);
      setDeskripsi(data.deskripsi);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e: any) => {
    try {
      e.preventDefault();
      await fetch(`http://localhost:8000/api/product/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer" + token,
        },
        body: JSON.stringify({
          name,
          deskripsi,
          tahun,
        }),
      });
      navigate("/dashboard");
    } catch (error) {
      throw new Error("gagal update data");
    }
  };

  useEffect(() => {
    getDataID();
  }, []);
  return (
    <div className="min-h-screen bg-slate-200 flex justify-center items-center">
      <div className="w-1/2 p-4 border-4 -blue-400 shadow-md rounded-md bg-white">
        <p className="text-center my-2 text-2xl font-bold"> Update Product</p>
        <form onSubmit={handleUpdate}>
          <div className="my-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Enter name Product"
              className="w-full p-2 rounded-md border-2 border-blue-400"
              onChange={(e) => setName(e.target.value)}
              required={true}
              value={name}
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
              value={deskripsi}
            />
          </div>
          <div className="my-2">
            <label htmlFor="name">Tahun:</label>
            <input
              type="text"
              placeholder="Enter Deskripsi Product"
              className="w-full p-2 rounded-md border-2 border-blue-400"
              onChange={(e) => setTahun(e.target.value)}
              required={true}
              value={tahun}
            />
          </div>
          <div className="flex mt-4 gap-3">
            <button
              className="p-2 bg-gray-700 text-white rounded-md cursor-pointer"
              onClick={() => navigate("/dashboard")}
            >
              Kembali
            </button>
            <button
              className="p-2 bg-blue-400 text-white rounded-md cursor-pointer"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
