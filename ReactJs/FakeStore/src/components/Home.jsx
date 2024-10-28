import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap  overflow-y-auto overflow-x-hidden">
        <Link to={`/details/${1}`} className="card p-3 border shadow w-[18%] h-[30vh] flex justify-center items-center flex-col mr-3 mb-3">
          <div
            className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center hover:scale-110 transition-all duration-300"
            style={{
              backgroundImage: `url("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg")`,
            }}
          ></div>
          <h1 className="hover:text-blue-300 transition-all duration-300">
            Lorem ipsum dolor sit amet.
          </h1>
        </Link>
      </div>
    </>
  );
};

export default Home;
