import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useFetchRecommended = (id) => {
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(MENU_API + id);
    const json = await data.json();
    const recomend =
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards ||
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards ||
      [];
    setRecommended(recomend);
    setLoading(false);
  };

  return [recommended, loading];
};

export default useFetchRecommended;
