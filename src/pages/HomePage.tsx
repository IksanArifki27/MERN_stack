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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            obcaecati exercitationem
          </h2>
          <p className="leading-loose">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            dolorum delectus velit dolores aspernatur libero consequatur hic
            veniam quasi maiores dolorem, debitis, est voluptatum sapiente.
          </p>
          <button className="md:mx-auto p-3 bg-blue-400 text-white rounded-md cursor-pointer font-semibold mt-4 hover:bg-blue-600">
            <Link to="/product"> Product Kami</Link>
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
            <img src="./image/section1.png" alt="" />
          </div>
          <div className=" md:w-1/2 mr-4 w-full">
            <p className="mt-3 font-semibold leading-normal text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni,
              odit exercitationem nobis provident eum voluptatibus voluptatum
              nam vitae temporibus modi rem labore quos nesciunt! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Eaque, assumenda
            </p>
          </div>
        </div>
      </div>
      {/* product */}
      <div id="product" className="min-h-screen container mx-auto my-4">
        <p className="text-3xl font-bold text-center text-blue-500">Product</p>
        <div className="ml-3">
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            nihil temporibus repudiandae, autem ducimus illum?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam est
            explicabo necessitatibus ea. Aliquid sed libero labore nemo, nobis
            voluptatibus consequatur! Dolores cum assumenda vitae.
          </p>
        </div>
        <Product />
      </div>
    </PageLayout>
  );
}
