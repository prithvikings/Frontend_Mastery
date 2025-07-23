import React from 'react'

function Shimmer() {
  return (
    <div>
        <div className="flex items-center justify-between mb-4 h-48 px-16">
            {Array(10).fill("").map((_, index) => (
                <div
                    key={index} 
                    className="h-full w-64 bg-gray-200 animate-pulse rounded-md shadow-md"
                >
                    <div className="h-32 w-full bg-gray-300 animate-pulse rounded-md"></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Shimmer