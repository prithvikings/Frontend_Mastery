/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";
function ButtonCompo() {
  return (
    <div>
      <motion.button
        whileHover={{
          // scale: 1.1,
          rotateX: 25,
          rotateY: 10,
        }}
        whileTap={{
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "easeInOut",
          duration: 0.3,
        }}
        style={{
          translateZ: 100,
        }}
        className="px-12 py-4 bg-zinc-950 text-neutral-300 rounded-lg font-gilroy text-lg cursor-pointer "
      >
        Follow
      </motion.button>
    </div>
  );
}

export default ButtonCompo;
