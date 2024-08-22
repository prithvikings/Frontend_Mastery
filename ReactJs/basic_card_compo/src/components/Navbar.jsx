import React from 'react'

function Navbar({data}) {
  return (
    <div className='w-full px-20 py-5 flex justify-between items-center'>
      <h3>Orange</h3>
      <div className='flex p-2 px-4 bg-orange-600 text-white font-medium rounded-md text-sm gap-3'>
        <h3>Favourites</h3>
        <h4>{data.filter(items=>items.added).length}</h4>
      </div>
    </div>
  )
}

export default Navbar