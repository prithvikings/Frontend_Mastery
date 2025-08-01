/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { stagger, useAnimate } from "motion/react";
import { motion } from "motion/react";
function TextAnime() {
  const [scope, animate] = useAnimate();
  const text =
    "welcome to F*** C***. The first rule of F*** C*** is that you don't talk about F*** C***. The second rule of F*** C*** is that you don't talk about F*** C***.";

  // useEffect(() => {
  //   startAnimating();
  // }, []);

  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: stagger(0.02),
      }
    );
  };
  return (
    <div
      ref={scope}
      className="text-white max-w-4xl mx-auto font-bold text-4xl "
    >
      <motion.button
      onClick={startAnimating}
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
      className="bg-amber-950 p-4 rounded-xl mr-2 cursor-pointer ">What is Fc?</motion.button>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          className="inline-block tracking-widest leading-8"
          style={{
            opacity: 0,
            filter: "blur(10px)",
            y: 10,
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </div>
  );
}

export default TextAnime;
