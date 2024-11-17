import React, { useRef, useState } from "react";
import Card from "./Card";


function Foreground() {
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque!",
      filesize: ".9mb",
      close: true,
      tag: {
        isopen: true,
        tagTitile: "Download Now",
        tagcolor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque!",
      filesize: ".9mb",
      close: false,
      tag: {
        isopen: true,
        tagTitile: "Upload Now",
        tagcolor: "blue",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque!",
      filesize: ".9mb",
      close: true,
      tag: {
        isopen: false,
        tagTitile: "Download Now",
        tagcolor: "blue",
      },
    },
  ];
  const ref=useRef(null);
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-8 flex-wrap p-5 ">
      {data.map((item, index) => {
        return <Card data={item} key={index}  refrence={ref}/>;
      })}
    </div>
  );
}

export default Foreground;
