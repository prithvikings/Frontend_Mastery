import React from "react";
import { useParams } from "react-router";
import { RESTURANT_LIST_IMAGE } from "../utils/constants";
import useFetchMenu from "../utils/useFetchMenu";
import useFetchRecommended from "../utils/useFetchRecommended";
import ShimmerCard from "./ShimmerCard"; // you can create this component
import Shimmer from "./Shimmer"; // fallback shimmer if needed

function Menu() {
  const { id } = useParams();
  const [info, loadingMenu] = useFetchMenu(id);
  const [recommended, loadingRecommended] = useFetchRecommended(id);

  const { name, cuisines, costForTwoMessage } = info || {};
  if (loadingMenu || loadingRecommended) {
    return (
      <div className="p-8 w-full min-h-screen gap-4 flex flex-col items-center">
        <div className="w-full max-w-3xl mb-8">
          <div className="h-10 bg-gray-300 w-1/2 rounded animate-pulse mb-4"></div>
          <div className="h-4 bg-gray-300 w-1/3 rounded animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-300 w-2/3 rounded animate-pulse"></div>
        </div>
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <ShimmerCard key={i} />
          ))}
      </div>
    );
  }

  return (

    <div className="w-full px-16 py-16 flex flex-col items-center min-h-screen">
      <div className="flex flex-col gap-12 justify-start items-start w-3xl">
        <div className="bg-gradient-to-r from-gray-500 to-slate-800 shadow-md rounded-lg p-8 w-full max-w-3xl gap-2 flex flex-col items-start">
          <h1 className="text-3xl font-black text-white">{name}</h1>
          <p className="text-md text-gray-200 font-semibold">{costForTwoMessage}</p>
          <p className="text-md text-gray-200 font-semibold">
            {cuisines && cuisines.join(", ")}
          </p>
        </div>
        
        
        <div className="w-full bg-gray-200 h-0.5"></div>


        <h3 className="text-xl font-bold">Recommended ({recommended.length})</h3>
        {recommended.map((item) => (
          <div
            key={item.card.info.id}
            className="w-full bg-gradient-to-r from-slate-900 to-slate-700 p-8 rounded-lg shadow-md flex flex-col items-start gap-4"
          >
            <h1 className="font-semibold text-xl text-white">
              {item.card.info.name}
            </h1>
            <div className="flex items-center gap-4 w-full">
              <p className="w-3/4 font-medium text-gray-300 leading-6">
                {item.card.info.description}
              </p>
              <img
                src={RESTURANT_LIST_IMAGE + item.card.info.imageId}
                className="w-1/4 object-cover rounded-lg shadow-lg"
                alt={item.card.info.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
