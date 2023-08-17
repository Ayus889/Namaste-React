import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  //  console.log(resData);

  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData;

  return (
    <div
      data-testid="resCard"
      className="w-[300px]  p-4 m-4 border border-solid border-black rounded-xl shadow-lg bg-gray-200 leading-5 hover:bg-gray-300"
    >
      <img
        className="rounded-xl"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-lg font-bold py-2">{name}</h3>
      <p className="truncate hover:text-clip">{cuisines.join(",")}</p>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

// Higher Order Component - Takes RestaurantCard as an input and enhance it then return as an modified component

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg ">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
