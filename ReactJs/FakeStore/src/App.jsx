import React from "react";
import Home from "./components/Home";
import Details from "./components/Details";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Create from "./components/Create";

const App = () => {
  const { search, pathname } = useLocation();
  return (
    <div className="h-screen w-screen flex">
      {(pathname != "/"  || search.length > 0) && ( //agar ye true hua toh link show hoga
        <Link
          className="absolute top-[3%] left-[17%] py-2 px-4 border rounded border-red-200 text-red-500 hover:bg-red-50"
          to="/"
        >
          Home
        </Link>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;
