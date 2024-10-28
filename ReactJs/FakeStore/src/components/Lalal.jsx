import React from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { productContext } from "../utils/Context";
import { useContext } from "react";
import Loading from "./Loading";
import axios from "axios";
import { useEffect, useState } from "react";


const Home = () => {
  const {products}=useContext(productContext)
  // console.log(products)

  const {search}=useLocation();
  const category=  decodeURIComponent(search.split("=")[1]);
  const [filteredProducts,setFilteredProducts]=useState(products)
  // console.log(category)
  const getProductcategory=async()=>{
    try{
      const res=await axios.get(`/products/category/${category}`)
      console.log(res.data)
      setFilteredProducts(res.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    if(category.length>0){
      getProductcategory()
    }
  },[category])

  console.log(filteredProducts)

  return (products?
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap  overflow-y-auto overflow-x-hidden">
        {products.map((product)=>{
          return(
<Link key={product.id} to={`/details/${product.id}`} className="card p-3 border shadow w-[18%] h-[30vh] flex justify-center items-center flex-col mr-3 mb-3">
          <div
            className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center hover:scale-110 transition-all duration-300"
            style={{
              backgroundImage: `url("${product.image}")`,
            }}
          ></div>
          <h1 className="hover:text-blue-300 transition-all duration-300">
            {product.title.length>40?product.title.slice(0,40)+"...":product.title}
          </h1>
        </Link>
          )
        })}
        
      </div>
    </>:<Loading/>
  );
};

export default Home;
