import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [images,setImages] = useState([]);
  const getImages=async()=>{
    const response=await axios.get("https://picsum.photos/v2/list?page=2&limit=50")
    setImages(response.data)
  }

  // useEffect(()=>{
  //   getImages();
  // },[])

  return (
    <div className='min-h-screen bg-gray-500 p-8'>
      <h1 className='text-3xl font-bold text-center mb-8'>Image Gallery</h1>
      <div className='flex justify-center mb-8'>
        <button className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition duration-300 ease-in-out active:scale-95 active:bg-blue-700 font-bold font-gilroy' onClick={getImages}>
          Get Images
        </button>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {images.map(image => (
          <div key={image.id} className='group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out'>
            <img 
              className='w-full h-64 object-cover object-center transform group-hover:scale-110 transition duration-300 ease-in-out' 
              src={image.download_url} 
              alt={image.author} 
            />
            <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center transition duration-300 ease-in-out'>
              <p className='text-white text-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
                {image.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App