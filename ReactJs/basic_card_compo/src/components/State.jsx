// Maan lete hai aapke game mein score by default 0 se shuru hota hai and future mein woh score badhega by 10 aur aapko page pe show bhi karna hai jab score badhe to use case mein aapka score variable ek state mein rakhna jaruri hai, kyunki react sirf use change karta hai jo state mein hota hai

//usestate state ko turant update nahi karta, wo usestate ko update karta apne hisaab se function completion ke baad to fix performance issues

import React, { useState } from "react";

function State() {
  const [val, setval] = useState({ name: "Prithvi", age: 18 });
  const [score, setscore] = useState(1);
  return (
    <>
      <div className="px-20 py-10 flex flex-col items-center justify-center gap-9">
        <h1 className="text-2xl">Score is : {score}</h1>
        <button
          className="px-4 py-2 text-white bg-sky-600 rounded-md mt-1 font-semibold"
          onClick={() => {
            setscore((prev) => {
              if (prev < 20) {
                return prev + 1;
              } else {
                alert("You Cannot Increase Now");
                return prev;
              }
            });
          }}
        >
          Change Score
        </button>
      </div>
      <div className="px-20 py-10 flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl">Name is : {val.name}</h1>
        <h1 className="text-2xl">Age is : {val.age}</h1>
        <button onClick={()=>{
            setval({...val})// isme gender hum log use effect ke baare mein sikh ke lagayenge
        }}
         className='px-4 py-2 rounded-md  text-white font-semibold bg-sky-600'>Add Gender</button>
      </div>
    </>
  );
}

export default State;
