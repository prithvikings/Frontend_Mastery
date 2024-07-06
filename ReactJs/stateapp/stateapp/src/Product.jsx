import React from 'react'

function Product({naam}) {
  return (
    <>
    <div className='bg-indigo-500 w-full h-screen'>
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-4xl text-white'>{naam}</h1>
        </div>
    </div>
    </>
  )
}

export default Product