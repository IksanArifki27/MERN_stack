import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

type Product = {
  _id: string;
  name: string;
  deskripsi: string;
  tahun: string;
};

const Product = () => {
  const [datas, setDatas] = useState([]);

  const getData = async () => {
    const datas = await fetch("http://localhost:8000/api/product");
    const { data } = await datas.json();
    setDatas(data);
  };

  const limit = (char: string, limit: number) => {
    return char.substring(0, limit);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="my-6 md:flex mx-10 gap-5 md:flex-wrap justify-between  ">
        {datas.map((item: Product, index) => (
          <div
            key={index}
            className="bg-slate-200 p-4 rounded-md shadow-md w-3/12"
          >
            <p className="font-semibold">Name : {item.name} </p>
            <p className="font-semibold">
              Deskripsi : {limit(item.deskripsi, 45)}
            </p>
            <p className="font-semibold">Tahun :{item.tahun} </p>
            <div>
              <Link to={`/detail/${item._id}`}>
                <p className="text-white bg-blue-500 p-2 my-2 text-center rounded-md cursor-pointer font-semibold w-full ">
                  Detail
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
