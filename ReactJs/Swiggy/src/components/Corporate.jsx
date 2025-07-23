import React from 'react'

function Corporate() {
  return (
    <div className='max-w-7xl mx-auto flex flex-col  justify-center h-screen'>
      <div className='flex flex-col mt-8 items-start justify-start p-4 
      bg-white shadow-md rounded-lg w-full max-w-xl outline-red-50 outline-1
      outline-offset-2 '>
      <h1 className='text-4xl font-bold '>Corporate Page</h1>
      <p className='mt-4 text-lg text-gray-700 font-semibold'>This is the corporate page of our application.</p>
      <p className='mt-2 text-md text-gray-600 font-medium'>Here you can find information about our corporate services, partnerships, and business solutions.</p>
      <p className='mt-2 text-md text-gray-500 font-black'>For inquiries, please contact our corporate team.</p>
      </div>
    </div>
  )
}

export default Corporate