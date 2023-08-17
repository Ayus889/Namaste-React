import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const OnlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <div className="flex justify-between bg-purple-200 shadow-lg">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 justify-between items-center text-lg">
          <li>online Status: {OnlineStatus ? "✅" : "🔴"}</li>
          <li className="p-4 m-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 m-4 font-bold">
            <Link to="/cart">Cart - ({cartItems.length}items)</Link>
          </li>
          <li className="p-4 m-4">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 m-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-4 m-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login-btn"
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
