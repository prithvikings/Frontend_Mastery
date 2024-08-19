// Maan lete hai aapke game mein score by default 0 se shuru hota hai and future mein woh score badhega by 10 aur aapko page pe show bhi karna hai jab score badhe to use case mein aapka score variable ek state mein rakhna jaruri hai, kyunki react sirf use change karta hai jo state mein hota hai

import React, { useState } from 'react'

function State() {
    const [score,setscore]=useState(1);
  return (
    <>
    <div className='px-20 py-10 flex flex-col items-center justify-center gap-9'>
    <h1 className='text-2xl'>Score is : {score}</h1>
    <button className='px-4 py-2 text-white bg-sky-600 rounded-md mt-1 font-semibold'onClick={()=>{
        setscore((prev)=>{
            if(prev<20){
                return prev+1;
            }else{
                alert("You Cannot Increase Now");
                return prev;
            }
        })
    }}>Change Score</button>
    </div>
    </>
  )
}

export default State