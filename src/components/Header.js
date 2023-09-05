import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Body from "./Body";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const OnlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <div className=" right-0 flex justify-between bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200  shadow-2xl h-48">
      <div className="logo-container w-52 mt-6 ">
        <Link to={"/"}>
          <img className="w-48 cursor-pointer" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 justify-between items-center text-lg">
          <li className="font-serif font-bold">
            online Status: {OnlineStatus ? "✅" : "🔴"}
          </li>
          <li className="p-4 m-4 font-serif font-bold">
            <Link to="/">Home</Link>
          </li>

          <li className="p-4 m-4 font-serif font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 m-4 font-serif font-bold">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-4 m-4 font-serif font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4 m-4 font-bold font-serif">
            <Link to="/cart">🛒 - ({cartItems.length})</Link>
          </li>
          <button
            className="bg-pink-100 hover:bg-pink-300 text-black font-bold py-2 px-4 rounded"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }} // It will re-render the UI again and refresh the whole header section will render again
            // you can proof with write console.log (and modify the login->Logout).
          >
            {btnNameReact}
          </button>
          <li className="p-4 m-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
