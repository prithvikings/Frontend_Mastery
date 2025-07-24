import React from 'react';
function ShimmerCard() {
  return (
    <div className="w-full bg-gray-200 animate-pulse p-8 rounded-lg shadow-md flex flex-col items-start gap-4 mb-4">
      <div className="h-6 bg-gray-300 rounded w-1/3"></div>
      <div className="flex items-center gap-4 w-full">
        <div className="w-3/4 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
        <div className="w-1/4 h-24 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
}

export default ShimmerCard;
