import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    /*  const timer = setInterval(() => {
      console.log("NAMASTE OP!");
    }, 1000); */
    console.log("useEffect");
    return () => {
      console.log("use Effect return");
    };
  });
  console.log("Render");
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h2>Name: {name}</h2>
      <h2>Location: {location}</h2>
      <h2>Contact: @yushkr</h2>
    </div>
  );
};
export default User;
