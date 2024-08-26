import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./componenets/Home";
import Show from "./componenets/Show";
import About from "./componenets/About"
function App() {
  return (
    <>
      <div className="w-full pt-8">
        <nav className="flex justify-center gap-10 text-2xl">

          <Link to="/">Home</Link>
          <Link to="/Show">Show</Link>
          <Link to="/About">About</Link>
        </nav>
        <hr className='bg-black w-[100%] h-2 mt-10 mb-6' />

      </div>
      <Routes>
        <Route path="/"element={<Home />}/>
        <Route path="/Show"element={<Show />}/>
        <Route path="/About"element={<About />}/>
      </Routes>
    </>
  );
}

export default App;
