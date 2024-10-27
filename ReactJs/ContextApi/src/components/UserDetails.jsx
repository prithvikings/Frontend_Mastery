import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { name, id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="mt-10 flex justify-center items-center flex-col gap-3">
      <h1 className="text-3xl">User Details</h1>
      <h2 className="text-2xl">
        {" "}
        Hiii {name} your id is {id}
      </h2>
      <button
        className="bg-blue-500 text-white rounded-md px-4 py-2 w-28 hover:bg-blue-700 font-medium"
        onClick={() => {
          navigate("/user");
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
