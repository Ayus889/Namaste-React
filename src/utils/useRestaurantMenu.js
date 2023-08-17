import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  //fetching logic
  // how to fetch? -> just like we fetch in the normal component using the useEffect hooks

  useEffect(() => {
    fetchData();
  }, []);

  //fetchMenu function logic
  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
