import { useEffect, useState } from 'react';
import { MENU_API } from '../utils/constants';

const useFetchMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json?.data?.cards?.[2]?.card?.card?.info);
    setLoading(false);
  };

  return [resInfo, loading];
};

export default useFetchMenu;
