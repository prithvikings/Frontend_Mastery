import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-gray-900 text-white font-medium'>
      <div className='max-w-7xl mx-auto px-4 py-6 text-center'>
        <p className='text-sm'>
          © {new Date().getFullYear()} Swiggy. All rights reserved.
        </p>
        <p className='text-xs mt-2'>
          This is a demo project and not affiliated with Swiggy.
        </p>
        <p className='text-xs mt-1'>
          Built with ❤️ using React.js
        </p>
        <p className='text-xs mt-1'>
          Check out the project repository on GitHub.
        </p>
        <a 
          href='https://github.com/your-username/your-repo'
          className='text-blue-400 hover:underline'
        >
          GitHub Repository
        </a>
  </div>
      </div>
  )
}

export default Footer