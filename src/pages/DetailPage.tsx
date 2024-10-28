import React, { useEffect, useState } from "react";
import PageLayout from "../layouts/PageLayout";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [tahun, setTahun] = useState("");

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
    <PageLayout>
      <div className="min-h-screen bg-gray-200 flex justify-center items-center">
        <br />
        <br />
        <div className="w-1/2 h-96 bg-white rounded-md shadow-md p-4  ">
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
    </PageLayout>
  );
};

export default DetailPage;
