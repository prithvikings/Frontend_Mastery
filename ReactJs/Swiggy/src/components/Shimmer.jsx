import React from "react";

function ShimmerCard() {
  return (
    <div className="w-[48%] bg-gray-300 animate-pulse p-6 rounded-lg h-56 mb-4">
      <div className="h-6 bg-gray-400 rounded w-1/2 mb-4"></div>
      <div className="h-4 bg-gray-400 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-400 rounded w-5/6 mb-2"></div>
      <div className="h-4 bg-gray-400 rounded w-2/3"></div>
    </div>
  );
}

export default ShimmerCard;
