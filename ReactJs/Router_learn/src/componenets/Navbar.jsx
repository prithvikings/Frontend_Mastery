import React from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="w-full h-16 flex justify-center items-center gap-10 bg-yellow-400">
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "green" : "grey",
            fontWeight:e.isActive?"bold":""
          };
        }}
        className="text-2xl font-medium"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(e)=>{
          return[
            e.isActive?"text-2xl font-medium":"text-2xl font-medium",
            e.isActive ? "text-green-600" : "text-zinc-600",
            e.isActive?"font-bold":""
          ].join(" ");
        }}
        to="/User"
      >
        User
      </NavLink>
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "green" : "grey",
            fontWeight:e.isActive?"bold":""

          };
        }}
        className="text-2xl font-medium"
        to="/About"
      >
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;
