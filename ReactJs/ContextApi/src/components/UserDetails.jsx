import React from "react";
import { useParams } from "react-router-dom";
const UserDetails = () => {
  const {name,id}=useParams()
  return <div className="mt-10 flex flex-col gap-3">
    <h1 className="text-3xl">User Details</h1>
    <h2 className="text-2xl"> Hiii {name} your id is {id}</h2>
  </div>;
};

export default UserDetails;
