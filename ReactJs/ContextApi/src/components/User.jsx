import React, { useContext } from "react";
import { userContext } from "../utils/Context";
import { Link } from "react-router-dom";
const User = () => {
  const {user}=useContext(userContext)
  return (
    <>
      <h1 className="text-3xl ">User List</h1>
      <div className="mt-10 w-1/3  flex flex-col gap-3 justify-center items-center">
      {user.map((user)=>{
        return(
          <Link id={user.id} to={`${user.Username}/${user.id}`} className='hover:bg-blue-700 hover:text-white p-3 bg-blue-500 text-white rounded-md w-28 flex justify-center items-center font-bold'>{user.Username}</Link>   
        )
      })}
      </div>
    </>
  );
};

export default User;
