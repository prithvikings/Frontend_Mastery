import React from "react";
import { IMAGE_CDN } from "../utils/constants";

function ResturantCard(props) {
  const { resturant } = props;
  const { name, cloudinaryImageId, avgRating, sla, cuisines, areaName } = resturant.info;

  return (
    <div className="card w-64 h-80 rounded-lg p-4 flex flex-col items-start hover:cursor-pointer hover:scale-95 transition-transform duration-300">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={`${IMAGE_CDN}/${cloudinaryImageId}`}
        alt={name}
      />
      <h1 className="text-xl text-gray-900 font-semibold">{name}</h1>
      <div className="flex gap-4 items-center w-full">
        <p className="text-sm font-medium text-gray-500">{avgRating}</p>
        <p className="text-sm font-medium text-gray-500">{sla?.slaString}</p>
      </div>
      <p className="text-sm font-medium text-gray-500">{cuisines.join(", ")}</p>
      <p className="text-sm font-medium text-gray-500">{areaName}</p>
    </div>
  );
}


export default ResturantCard;
