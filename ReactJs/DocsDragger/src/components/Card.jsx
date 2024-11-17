import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import {motion} from "framer-motion";

function Card({ data,refrence }) {
  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.1}} dragElastic={.1} dragTransition={{bounceStiffness:100, bounceDamping:30}} className="flex-shrink-0 relative w-56 h-64 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden">
      <FaRegFileAlt />
      <p className=" text-sm mt-5 font-semibold  leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center py-3 justify-between px-8  mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose size=".7em" color="#fff" />
            ) : (
              <LuDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isopen && (
          <div className={`tag flex items-center justify-center ${data.tag.tagcolor === "green" ? "bg-green-600" : "bg-blue-600"} w-full py-4 h-10`}>
          <h3 className="text-sm font-semibold">{data.tag.tagTitile}</h3>
        </div>
          )}
      </div>
    </motion.div>
  );
}

export default Card;
