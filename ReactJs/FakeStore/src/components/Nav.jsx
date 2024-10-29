import React from "react";
import { Link } from "react-router-dom";
import { productContext } from "../utils/Context";
import { useContext } from "react";

const Nav = () => {
  const { products } = useContext(productContext);

  const distinct_categories = products
    ? [...new Set(products.map((product) => product.category))]
    : [];
  // console.log(distinct_categories)

  const getColorClass = (category) => {
    const colorMap = {
      "men's clothing": "bg-blue-100",
      "women's clothing": "bg-green-100",
      electronics: "bg-red-100",
      jewelery: "bg-yellow-100",
    };

    if (colorMap[category]) return colorMap[category];

    // Generate a random color for new categories
    const colors = [
      "bg-purple-100",
      "bg-pink-100",
      "bg-indigo-100",
      "bg-teal-100",
      "bg-orange-100",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  };

  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
      <Link
        className="py-3 px-5 border rounded border-blue-200 text-blue-500 hover:bg-blue-50"
        to="/create"
      >
        Add Product
      </Link>
      <hr className="my-3 w-[80%]" />
      <h1 className="text-2xl  w-[80%] mb-3">Category Filter</h1>
      <div className=" w-[80%]">
        {distinct_categories.map((category, index) => {
          return (
            <Link
              key={index}
              to={`/?category=${category}`}
              className={`mb-3  flex items-center gap-2 hover:text-blue-500`}
            >
              <span
                className={`rounded-full  w-[15px] h-[15px] ${getColorClass(
                  category
                )}`}
              ></span>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
