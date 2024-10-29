import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { productContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const { products } = useContext(productContext);
  const { search } = useLocation();
  const category = search ? decodeURIComponent(search.split("=")[1] || "") : "";
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProductCategory = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilteredProducts(data);
    } catch (error) {
      console.error("Error:", error);
      setFilteredProducts([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (products && category) {
      category.length > 0
        ? getProductCategory()
        : setFilteredProducts(products);
    }
  }, [category, products]);

  if (isLoading) return <Loading />;

  const productsToDisplay = category.length > 0 ? filteredProducts : products;

  return (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-y-auto overflow-x-hidden">
        {productsToDisplay?.map((product) => (
          <Link
            key={product.id}
            to={`/details/${product.id}`}
            className="card p-3 border shadow w-[18%] h-[30vh] flex justify-center items-center flex-col mr-3 mb-3"
          >
            <div
              className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center hover:scale-110 transition-all duration-300"
              style={{ backgroundImage: `url("${product?.image}")` }}
            ></div>
            <h1 className="hover:text-blue-300 transition-all duration-300">
              {product?.title?.length > 40
                ? product.title.slice(0, 40) + "..."
                : product.title}
            </h1>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
