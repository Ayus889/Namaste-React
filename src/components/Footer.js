import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-32 shadow-xl bg-slate-100">
      <div className="flex justify-between">
        <img
          className="w-38 h-28 m-4 p-4"
          src="https://api.logo.com/api/v2/images?logo=logo_6e448f94-590d-4acb-a41c-16169c35fffa&format=webp&margins=0&quality=60&width=500&background=transparent&u=1693480798"
        />
        <h2 className="font-bold m-4 p-4 mt-8">
          Copyright © 2023 Trained to Deliver!
        </h2>
        <ul className="flex justify-center mt-10 mr-20">
          <li className="m-2">
            <Link to={"https://www.linkedin.com/in/ayush-kumar-dev/"}>
              <img className="w-10 h-10" src="https://shorturl.at/AVZ13" />
            </Link>
          </li>
          <li className="m-2">
            <Link to={"https://github.com/Ayus889"}>
              <img
                className="w-8 h-8 bg-slate-200"
                src="https://shorturl.at/yLMN6"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
