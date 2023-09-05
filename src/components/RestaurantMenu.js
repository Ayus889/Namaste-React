//import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { CDN_URL } from "../utils/constant";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
    sla,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
      ?.card ||
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card
      ?.categories;
  //console.log(itemCards);
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        ("type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
    );
  // "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"

  //  console.log(categories);
  return (
    <div className="text-xl">
      <div className="Res-details max-w-screen-2xl h-72 my-8 p-8 flex justify-center rounded-xl mx-8">
        <div className=" mx-7 ">
          <img
            className="w-80 rounded-xl"
            alt="res-logo"
            src={CDN_URL + cloudinaryImageId}
          />
        </div>
        <div>
          <div className="my-9 ">
            <h1 className="font-bold  text-3xl">{name}</h1>
            <h2>{cuisines.join(",")} </h2>
          </div>
          <div className="flex">
            <div className="bg-green-400 w-18 rounded-md h-8 px-2 font-bold">
              ⭐{avgRating}
            </div>
            <div className="mx-4 ">|</div>
            <div className="font-bold">{costForTwoMessage}</div>
          </div>
        </div>
      </div>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
