import React from "react";

import PageLayout from "../layouts/PageLayout";
import { Link } from "react-router-dom";
import Product from "../componets/Product";

export default function HomePage() {
  return (
    <PageLayout>
      <div className="container min-h-screen flex items-center" id="home">
        <div className="md:w-1/2 ml-4 w-full ">
          <h2 className="text-4xl font-bold leading-normal">
            Satu Sentuhan untuk Semua,Temukan Smartphone Ideal Anda!
          </h2>
          <p className="leading-loose">
            Dengan antarmuka yang ramah pengguna dan pencarian yang cepat,
            SmartFind memudahkan Anda untuk menemukan informasi yang Anda
            butuhkan. Bergabunglah dengan komunitas kami dan tetap terhubung
            dengan dunia smartphone!
          </p>
          <button className="md:mx-auto p-3 bg-blue-400 text-white rounded-md cursor-pointer font-semibold mt-4 hover:bg-blue-600">
            <a href="#product"> Kami Product</a>
          </button>
        </div>
        <div className=" md:w-1/2 hidden md:flex  ">
          <img
            src="./image/logo.png"
            height={400}
            width={400}
            className="mx-auto"
          />
        </div>
      </div>
      {/* about page */}
      <div className="min-h-screen container mx-auto  " id="about">
        <p className="text-3xl font-bold text-center text-blue-500">About</p>
        <div className="md:flex items-center justify-center">
          <div className="md:w-1/2  w-full">
            <img src="./image/section2.png" alt="" />
          </div>
          <div className=" md:w-1/2 mr-4 w-full">
            <p className="mt-3 font-semibold leading-normal text-2xl">
              SmartFind adalah destinasi utama Anda untuk menemukan semua
              informasi terkini tentang smartphone. Apakah Anda mencari ulasan
              mendalam, perbandingan spesifikasi, atau tips memilih smartphone
              yang tepat? Kami menyediakan segala yang Anda butuhkan untuk
              membuat keputusan yang cerdas.
            </p>
          </div>
        </div>
      </div>
      {/* product */}
      <div id="product" className="min-h-screen container mx-auto my-4">
        <p className="text-3xl font-bold text-center text-blue-500">Product</p>
        <div className="ml-3">
          <p className="text-center my-6">
            Update harian tentang peluncuran produk baru, tren teknologi, dan
            inovasi di dunia smartphone.
          </p>
        </div>
        <Product />
      </div>
    </PageLayout>
  );
}
