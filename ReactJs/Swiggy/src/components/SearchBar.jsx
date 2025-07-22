import React from 'react'

function SearchBar() {
  return (
    <div className="search-bar mt-4 w-full flex justify-center items-center">
      <input type="text" placeholder="Whats in Your mind..." 
      className='w-2/3 h-10 px-4 text-sm border-2 border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 py-6'
      />
    </div>  
  )
}

export default SearchBar