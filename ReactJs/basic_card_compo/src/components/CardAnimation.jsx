import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
function CardAnimation() {
  const [data, setdata] = useState(false);
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className=" relative w-96 h-56 bg-zinc-500 rounded-md flex overflow-hidden">
        <img 
          className={`w-full h-full transition-transform duration-700 ease-in-out object-cover shrink-0 ${data===false ? "-translate-x-[0%]" : "-translate-x-[100%]"}`}
          src="https://images.unsplash.com/photo-1724169913051-49f6ff76a070?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={` w-full h-full transition-transform duration-700 ease-in-out object-cover shrink-0 ${data===false ? "-translate-x-[0%]" : "-translate-x-[100%]"}`}
          src="https://images.unsplash.com/photo-1724180872527-4087c8db6093?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span onClick={()=>{
            setdata(!data);
        }} className=" absolute w-16 h-16 flex justify-center items-center bg-[#dadada7b] bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%] rounded-full">
          <FaArrowRight size={"1em"}/>
        </span>
      </div>
    </div>
  );
}

export default CardAnimation;
