import React, { useEffect, useState } from "react";
import PageLayout from "../layouts/PageLayout";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../componets/Footer";
import { CgInstagram } from "react-icons/cg";

const DetailPage = () => {
  const { id } = useParams();
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [tahun, setTahun] = useState("");
  const navigate = useNavigate();

  const getDetailData = async () => {
    const getData = await fetch(`http://localhost:8000/api/product/${id}`);
    const { data } = await getData.json();
    setNama(data.name);
    setDeskripsi(data.deskripsi);
    setTahun(data.tahun);
  };
  useEffect(() => {
    getDetailData();
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gray-200 flex justify-center items-center">
        <div className="w-1/2 h-96 bg-white rounded-md shadow-md p-4  ">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 text-xl font-semibold p-1 cursor-pointer rounded-md text-white"
          >
            kembali
          </button>
          <h2 className="text-3xl font-bold text-blue-500 mt-4 text-center">
            {nama}{" "}
          </h2>
          <p className="font-semibold my-2">
            Deskripsi Produk
            <br />
            {deskripsi}{" "}
          </p>
          <p>
            diproduksi tahun <span className="font-bold">{tahun}</span>{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPage;
