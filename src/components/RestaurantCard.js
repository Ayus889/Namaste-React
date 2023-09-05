import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  //  console.log(resData);

  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData;

  return (
    <div
      data-testid="resCard"
      className="w-[350px] h-[400px] p-4 m-4 border border-solid border-black rounded-xl shadow-lg bg-gray-200 leading-5 hover:bg-gray-300"
    >
      <img
        className="rounded-xl"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div>
        <h3 className="text-2xl  font-bold py-2">{name}</h3>
        <p className="truncate hover:text-clip">{cuisines.join(",")}</p>
      </div>

      <div className="flex items-center justify-between m-3">
        <h4 className="bg-green-500 rounded-md shadow-md w-14 h-10 p-2 text-white font-extrabold">
          {avgRating}⭐
        </h4>
        <div className="text-4xl font-extrabold mb-5 px-1">.</div>
        <h4 className="font-semibold">{costForTwo}</h4>
        <div className="text-4xl font-extrabold mb-5 px-1">.</div>
        <h4 className="font-semibold">{sla?.deliveryTime} minutes</h4>
      </div>
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
