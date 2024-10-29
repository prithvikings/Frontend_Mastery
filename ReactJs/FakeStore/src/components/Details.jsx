import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { productContext } from "../utils/Context";
import { useContext } from "react";
import Loading from "./Loading";
const Details = () => {
  const { products } = useContext(productContext);
  const { id } = useParams();
  return products ? (
    <div className=" w-[70%] flex h-full items-center justify-between m-auto p-[10%] ">
      <img
        className="h-[80%] w-[40%] object-contain"
        src={`${products.find((product) => product.id == id).image}`}
        alt=""
      />
      <div className="content w-[50%]">
        <h1 className="text-4xl">
          {products.find((product) => product.id == id).title}
        </h1>
        <h3 className="text-zinc-400 my-5">
          {products.find((product) => product.id == id).category}
        </h3>
        <h2 className="text-red-300 mb-3">
          ${products.find((product) => product.id == id).price}
        </h2>
        <p className="mb-[5%]">
          {products.find((product) => product.id == id).description}
        </p>
        <Link className=" mr-3 py-3 px-5 border rounded border-blue-200 text-blue-500 hover:bg-blue-50">
          Edit
        </Link>
        <Link className="py-3 px-5 border rounded border-red-200 text-red-500 hover:bg-red-50">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
