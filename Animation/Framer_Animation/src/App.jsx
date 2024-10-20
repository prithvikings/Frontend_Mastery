import React from "react";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div>
      <motion.div
        id="box"
        initial={{
          scale: 1,
          x: 0,
          y: 0,
        }}
        animate={{
          scale: 1.5,
          x: 900,
          y: 100,
          borderRadius: "50%",
          backgroundColor: "orange",
        }}
        transition={{
          duration: 1,
          type: "spring",
          delay: 1,
          // stiffness: 100,
          // damping: 10,
          ease: "linear",
        }}
        drag={true}
        dragConstraints={{
          top: 0,
          left: 0,
          right: 1200,
          bottom: 350,
        }}
        whileHover={{
          backgroundColor: "royalblue",
        }}
        whileDrag={{
          backgroundColor: "orange",
          scale: 0.2,
          rotate: 360,
        }}
      ></motion.div>
    </div>
  );
};

export default App;
