import React from 'react'

function ShutUp({tada}) {
  return (
    <>
    <div className='bg-yellow-500 w-full h-screen'>
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-4xl text-white'>{tada}</h1>
        </div>
    </div>
    </>
  )
}

export default ShutUp