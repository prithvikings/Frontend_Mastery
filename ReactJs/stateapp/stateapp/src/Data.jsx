import React from 'react'

function Data({data}) {
  return (
   <>
    <div className='flex items-center  justify-center bg-green-300 h-screen w-full flex-col'>
    <h1 className='text-2xl'>Name:{data.name}</h1>
    <h1 className='text-2xl'>Age{data.age}</h1>
    <h1 className='text-2xl'>Address:{data.address}</h1>
    </div>
   </>
  )
}

export default Data