import React from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { RESTURANT_LIST_IMAGE } from "../utils/constants";
import Shimmer from "./Shimmer";

function Menu() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await fetch(`
      https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER
    `);
    let json = await data.json();

    const recommendedItems = json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards ||
                             json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards ||
                             [];

    setTitle(json?.data?.cards?.[0]?.card?.card?.text);
    setInfo(json?.data?.cards?.[2]?.card?.card?.info);
    setRecommended(recommendedItems);
    setLoading(false); // Set loading to false once data is fetched
  };

  if (loading) {
  return (
    <div className="p-8 w-full min-h-screen gap-4 flex justify-start items-start flex-wrap">
      {Array(6).fill(0).map((_, index) => (
        <Shimmer key={index} />
      ))}
    </div>
  );
}

  return (
    <div className="w-full px-16 py-16 flex flex-col items-center min-h-screen">
      <div className="flex flex-col gap-12 justify-start items-start w-3xl">
        <div className="bg-gradient-to-r from-gray-500 to-slate-800 shadow-md rounded-lg p-8 w-full max-w-3xl gap-2 flex flex-col items-start">
          <h1 className="text-3xl font-black text-white">{title}</h1>
          <p className="text-md text-gray-200 font-semibold">
            {info.costForTwoMessage}
          </p>
          <p className="text-md text-gray-200 font-semibold">
            {info.cuisines && info.cuisines.join(", ")}
          </p>
        </div>
        <div className="w-full bg-gray-200 h-0.5"></div>
        <h3 className="text-xl font-bold">Recommended (20)</h3>
        {recommended.map((item) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
