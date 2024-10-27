import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="mt-10 flex justify-center gap-10 text-2xl font-[gilroy]">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="user">User</Link>
      </nav>
    </>
  );
};

export default Navbar;
