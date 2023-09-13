import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //local State variable using useState() function.
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // console.log("Body Render", listOfRestaurant);

  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //Make function async.
    try {
      const data = await fetch(
        // And data await
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6368743&lng=85.0547624&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      // Optional Chaining
      setListOfRestaurant(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log(err);
    }
    //  console.log(json);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like your internconnection is disconnected! check your
        internetconnention.
      </h1>
    );

  // Conditional Rendering - when you Render on the basis of condition is known as conditional rendering
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <div className="flex justify-between items-center">
        <div className="flex  justify-between p-4 m-4">
          <div>
            <button
              className="p-4 py-2 m-4 border rounded-lg bg bg-green-200 hover:bg-green-400 h-12"
              onClick={() => {
                // filter logic here
                const filterdList = listOfRestaurant.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredRestaurant(filterdList);
              }}
            >
              Top Rated restaurant
            </button>
          </div>
          <div className="ml-72">
            <input
              type="text"
              data-testid="searchInput"
              placeholder="Search a restaurant you want..."
              className=" w-[500px] border-spacing-2 p-4 py-2 border border-solid border-black rounded-lg"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />

            <button
              className="text-black font-semibold p-4 py-2 m-4 border rounded-lg bg bg-green-200 hover:bg-green-500 w-36"
              onClick={() => {
                // Filter the restaurant cards and update the UI
                // searchText
                //    console.log(searchText);

                const filteredRestaurant = listOfRestaurant.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="m-4 p-4">
          User Name:{" "}
          <input
            className="border border-black p-2 "
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
          {/*This input will change the name of context* */}
        </div>
      </div>
      <div className="flex flex-wrap px-5 m-5 justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant?.info?.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Body;
