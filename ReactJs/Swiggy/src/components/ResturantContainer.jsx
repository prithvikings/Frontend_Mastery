import React from "react";
import { useState,useEffect } from "react";
import ResturantCard from "./ResturantCard";
import { data} from "../utils/mockData";
import { ShimmerPostList } from "react-shimmer-effects";
import { Link } from "react-router";
function ResturantContainer() {
  let [listofResturants, setListOfResturants] = useState([]);
  let [searchText, setSearchText] = useState("");

  let filter=listofResturants.filter((resturant)=>{
    return resturant.info.name.toLowerCase().includes(searchText.toLowerCase());
  })
  listofResturants=searchText.length===0?listofResturants:filter;


   useEffect(()=>{
    getdata();
  },[])

  let getdata=async()=>{
    let data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    let json=await data.json();
    setListOfResturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
 

  return listofResturants.length === 0 ? (
    <ShimmerPostList />
  ) : (
    
    <div className="resturant-container mx-auto my-4  w-full max-w-7xl p-4 ">
      {/* // Displaying the restaurant categories */}
<div className="search-bar mt-4 w-full flex justify-center items-center">
      <input 
      value={searchText}
      onChange={(e) => 
        setSearchText(e.target.value)}
      
      type="text" placeholder="Whats in Your mind..." 
      className='w-2/3 h-10 px-4 text-sm border-2 border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 py-6'
      />
    </div>  
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
                <Link to={`/restaurant/${resturant.info.id}`} key={resturant.info.id}>
                  <ResturantCard resturant={resturant} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResturantContainer;
