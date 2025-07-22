import React from "react";
import { useState } from "react";
import ResturantCard from "./ResturantCard";
import { data, resturantData } from "../utils/mockData";
function ResturantContainer() {
  let [listofResturants, setListOfResturants] = useState(resturantData);

  return (
    <div className="resturant-container mx-auto my-4  w-full max-w-7xl p-4 ">
      {/* // Displaying the restaurant categories */}

      <div className="flex flex-col items-end justify-center mb-4 border-b-2 border-gray-200 pb-4 w-full">
        <h1 className="text-sm font-medium hover:cursor-pointer ">View All</h1>
        <div className="flex items-center justify-between mb-4 h-48 px-16">
          {data.map((item) => {
            return (
              <div
                className={`h-full flex items-center justify-between ${item.name}`}
                key={item.id}
              >
                <img
                  className="h-full w-full  object-cover"
                  src={item.image}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* // Displaying the restaurant categories */}

      <div className="flex flex-col mt-12 gap-4 px-16">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-semibold">Top Resturant in varanasi</h1>
          <button
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-200 font-semibold cursor-pointer"
            onClick={() => {
              let topRated = listofResturants.filter((resturant) => {
                return resturant.info.avgRating >= 4.0;
              });
              setListOfResturants(topRated);
            }}
          >
            Top Rated
          </button>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap gap-4 justify-start items-start">
            {listofResturants.map((resturant) => {
              return (
                <ResturantCard key={resturant.info.id} resturant={resturant} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResturantContainer;
