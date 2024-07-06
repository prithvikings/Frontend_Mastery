import React, { useState } from 'react'

function Conditional() {
    const[a,b]=useState(true)
  return (
    <>
    <div className='bg-gray-700 w-full h-screen flex justify-center items-center flex-col'>
        <h1 className={`text-4xl font-bold ${a===false?"text-yellow-300 ":"text-white"}`}>{a===false?"Hello":"Bye"}</h1>
        <button onClick={()=>{b(!a)}} className='py-2 px-4 bg-green-700 text-white text-2xl rounded-lg mt-5'>change</button>
    </div>
    </>
  )
}

export default Conditional