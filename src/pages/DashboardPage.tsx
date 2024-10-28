import React, { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { IoAddSharp, IoPencilSharp, IoTrash } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

type Product = {
  _id: string;
  name: string;
  deskripsi: string;

  tahun: String;
};
const DashboardPage = () => {
  const [datas, setDatas] = useState([]);
  const [modal, setModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
  }
  const getData = async () => {
    const datas = await fetch("http://localhost:8000/api/product", {
      headers: { Authorization: "Bearer" + token },
    });
    const { data } = await datas.json();
    setDatas(data);
  };

  const deleteData = async (id: any) => {
    try {
      await fetch(`http://localhost:8000/api/product/${id}`, {
        headers: { Authorization: "Bearer" + token },
        method: "DELETE",
      });
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <DashboardLayout>
      <div className="min-h-screen ">
        <h2 className="text-3xl font-bold text-center">Our Product</h2>
        <Link to="/tambah">
          <p className=" bg-blue-400 rounded-md cursor-pointer p-3 w-40  font-semibold text-white text-center items-center">
            Tambah Data
          </p>{" "}
        </Link>
        <div className="my-6 md:flex mx-10 gap-4 md:flex-wrap columns-3  justify-center">
          {datas.map((item: Product, index) => (
            <div
              key={index}
              className="bg-slate-200 p-4 rounded-md shadow-md w-3/12"
            >
              <p className="font-semibold">Name : {item.name} </p>
              <p className="font-semibold">Deskripsi :{item.deskripsi} </p>
              <p className="font-semibold">Tahun :{item.tahun} </p>
              <div className="flex gap-4 mt-5">
                <Link to={`/update/${item._id}`}>
                  <p className="p-2 bg-yellow-500 rounded-md cursor-pointer font-semibold text-white">
                    <IoPencilSharp />
                  </p>
                </Link>
                <button
                  className="p-2 bg-red-500 rounded-md cursor-pointer font-semibold text-white"
                  onClick={() => deleteData(item._id)}
                >
                  <IoTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
